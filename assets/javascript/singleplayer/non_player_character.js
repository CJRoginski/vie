/* Non-Player Character (Fortune) moves and turns (single player only) */


/* Track Fortune's (NPC/AI) actions  */
var fortuneactions = "";

/* Probability of Fortune (NPC/AI) buying a property */
var probability;

/* Fortune's monopolies */
var fortunemonopoly = [];
var fortunemonopolycolor = [];



/* Start Fortune's (NPC/AI) turn */
function nextturn_fortune() {
	/* Reset the number of doubles rolled */
	numofdoubles = 0;
	
	/* Make Fortune land on top of any other players */
	document.getElementById("fortune").style.zIndex = "11";
	
	document.getElementById("user").innerHTML = "Fortune's";
	document.getElementById("turnidentifier").style.display = "block";
	
	setTimeout(function() {
		document.getElementById("turnidentifier").style.display = "none";
		document.getElementById("actionwindow").style.bottom = "0";
		
		/* Upgrade any monopolies (Fortune will always upgrade an entire monopoly together) */
		if (users.Fortune.assets.num > 1) { /* Value is greater than one instead of greater than two since Violet and Yellow assets only have two assets */
			var m;
			for (m = 0; m < fortunemonopoly.length; m++) {
				var upgradeprice = 0; /* Reset it after every upgrade */
				fortunemonopoly[m].forEach(function(item) {
					upgradeprice += item.upgrade;
				});
				
				if (users.Fortune.money >= upgradeprice) {
					fortunemonopoly[m].forEach(function(item, index) {
						if (item.rent.current !== "five") {
							fortune_moneysubtraction(item.upgrade);
						
							var x = document.getElementById(fortunemonopolycolor[m] + (index + 1));
							
							/* Display the identifiers */
							if (item.rent.current == "base") {
								item.rent.current = "one";
								
								x.querySelector("#u1").style.display = "inline-block";
							} else if (item.rent.current == "one") {
								item.rent.current = "two";
								
								x.querySelector("#u2").style.display = "inline-block";
							} else if (item.rent.current == "two") {
								item.rent.current = "three";
								
								x.querySelector("#u3").style.display = "inline-block";
							} else if (item.rent.current == "three") {
								item.rent.current = "four";
								
								x.querySelector("#u4").style.display = "inline-block";
							} else if (item.rent.current == "four") {
								item.rent.current = "five";
								
								x.querySelector("#u5").style.display = "inline-block";
							}
							
							fortuneactions += "Fortune upgraded their " + item.name + " asset.<br><br>";
						}
					});
				}
			}
		}
		
		setTimeout(function() {
			seeboard(users.Fortune);
			
			setTimeout(function() {
				if (users.Fortune.position.jail.currentlyin == false) {
					fortune_move();
				} else if (users.Fortune.position.jail.currentlyin == true) {
					fortune_jail();
				}
			}, 1500); /* 1.5 second delay */
		}, 850); /* 0.85 second delay */
	}, 1500); /* 1.5 second delay */
}

/* Fortune (NPC/AI) rolls the dice and move the appropriate spaces */
function fortune_move() {
	rolldice();
	
	if (die1 == die2) {
		numofdoubles++;
		
		if (numofdoubles == 1) {
			fortuneactions += "Fortune rolled double " + die1 + "'s.<br><br>";
		} else if (numofdoubles == 2) {
			fortuneactions += "Fortune rolled again and got double " + die1 + "'s.<br><br>";
		} else if (numofdoubles == 3) {
			fortuneactions += "Fortune rolled again and got double " + die1 + "'s.<br><br>Fortune went to jail.<br><br>";
			
			users.Fortune.position.jail.currentlyin = true;
			users.Fortune.position.num = 9;
			
			die1 = 0;
			die2 = 0;
			
			numofdoubles = 0;
		}
		
	} else {
		if (numofdoubles == 0) {
			fortuneactions += "Fortune rolled a " + die1 + " and a " + die2 + ".<br><br>";
		} else {
			fortuneactions += "Fortune rolled again and got a " + die1 + " and a " + die2 + ".<br><br>";
			
			numofdoubles = 0;
		}
	}
	
	movethis = die1 + die2;
	users.Fortune.position.num += movethis;
	
	document.getElementById("actions").innerHTML = fortuneactions;
	/* Keep the content scrolled to the bottom */
	document.getElementById("actions").scrollTop = document.getElementById("actions").scrollHeight;
	
	setTimeout(function() {
		$("#first").animate( {
			top: "1100px",
			left: "2000px"
		}, {
			duration: 825, /* 0.825 seconds */
			easing: "swing"
		});
		$("#second").animate( {
			top: "1100px",
			left: "2000px"
		}, {
			duration: 825, /* 0.825 seconds */
			easing: "swing"
		});
		
		/* Check if Fortune has reached or passed GO */
		if (users.Fortune.position.num > 32 ) {
			users.Fortune.position.num -= 32;
			
			/* Reward them for reaching/passing GO */
			fortune_passGO();
		}
		
		seeboard(users.Fortune);
		
		/* Find the rent and owner of the current space */
		if (users.Fortune.position.num == 1 || users.Fortune.position.num == 9 || users.Fortune.position.num == 17 || users.Fortune.position.num == 25) {
			/* These corner spaces cannot be rented out, so this is a free space */
			users.Fortune.position.rent = 0;
			
			users.Fortune.position.owner = "corner space";
			
			if (users.Fortune.position.num == 9) {
				if (users.Fortune.position.jail.currentlyin == false) {
					fortuneactions += "Fortune is visiting the jail.<br><br>";
				}
			} else if (users.Fortune.position.num == 17) {
				fortuneactions += "Fortune is taking a holiday.<br><br>";
			} else if (users.Fortune.position.num == 25) {
				/* Go to Jail */
				users.Fortune.position.jail.currentlyin = true;
				users.Fortune.position.num = 9;
				
				setTimeout(function() {
					seeboard(users.Fortune);
				}, 1000); /* 1 second delay */
				
				fortuneactions += "Fortune landed on the &quot;Go to JAIL&quot; corner and is now in jail.<br><br>";
			}
		} else if (users.Fortune.position.num == 11 || users.Fortune.position.num == 31) {
			/* Grant space */
			grants(users.Fortune);
			users.Fortune.position.owner = "grant";
			
			users.Fortune.money += users.Fortune.position.rent;
			
			fortuneactions += "Fortune got a $" + users.Fortune.position.rent.toLocaleString('en') +" grant.<br><br>";
			
			/* Update displayed money */
			document.getElementById("ai-money-count").innerHTML = users.Fortune.money.toLocaleString('en');
		} else {
			arrayposition = users.Fortune.position.num - 1;
			
			currentspace = gameboardarray[arrayposition];
			
			fortune_setrent(currentspace);
			fortune_setowner(currentspace);

			if (users.Fortune.position.owner == "unowned") {
				/* Probability of Fortune (NPC/AI) buying a property */
				probability = Math.floor(Math.random() * 4) + 1;
				
				if (probability !== 1 && users.Fortune.money >= currentspace.price) {
					/* Checking if a certain asset is in a certain color group */
					colorchecking(currentspace);
					switch (colornum) {
						case 8:
							currentcolor = "advertising";
							currentarraycolor = advertisingassets;

							currentlybuying = currentarraycolor.indexOf(currentspace);
							currentlybuying++;
					
							buyingspace = "marketing" + currentlybuying;
					
							fortune_buy_ad(currentspace, buyingspace);
							
							fortuneactions += "Fortune bought the Advertising asset &quot;" + currentspace.name +"&quot;.<br><br>";
					
							document.getElementById("ai-ad").style.display = "block";
							document.getElementById("adassests").innerHTML += "<li>" + currentspace.name + "</li>";
					
							if (users.Fortune.advertising == 1) {
								fortuneactions += "Fortune now owns 1 of the 4 Advertising assets.<br><br>";
							} else if (users.Fortune.advertising == 2) {
								fortuneactions += "Fortune now owns 2 of the 4 Advertising assets.<br><br>";
							} else if (users.Fortune.advertising == 3) {
								fortuneactions += "Fortune now owns 3 of the 4 Advertising assets.<br><br>";
							} else if (users.Fortune.advertising == 4) {
								fortuneactions += "Fortune now owns all of the Advertising assets.<br><br>";
							}

							break;

						default:
							setcolor();

							currentlybuying = currentarraycolor.indexOf(currentspace);
							currentlybuying++;
					
							buyingspace = currentcolor + currentlybuying;
					
							fortune_buy(currentspace, buyingspace);

							fortuneactions += "Fortune bought the " + currentcolor.charAt(0).toUpperCase() + currentcolor.slice(1) + " asset &quot;" + currentspace.name +"&quot;.<br><br>";
							
							document.getElementById("ai-" + currentcolor).style.display = "block";
							document.getElementById(currentcolor + "assests").innerHTML += "<li>" + currentspace.name + "</li>";
					
							var same = currentarraycolor.every(monopolies);
							if (same == true) {
								fortuneactions += "Fortune now owns all of the " + currentcolor.charAt(0).toUpperCase() + currentcolor.slice(1) + " assets.<br><br>";
								
								fortunemonopoly.push(currentarraycolor);
								fortunemonopolycolor.push(currentcolor);
							}
					}
				}
			} else if (users.Fortune.position.owner == "You") {
				fortune_moneysubtraction(users.Fortune.position.rent);
				users.player1.money += users.Fortune.position.rent;
				
				fortuneactions += "Fortune paid $" + users.Fortune.position.rent + " in rent to stay on your space.<br><br>";
			}
		}
		
		document.getElementById("actions").innerHTML = fortuneactions;
		/* Keep the content scrolled to the bottom */
		document.getElementById("actions").scrollTop = document.getElementById("actions").scrollHeight;
		
		setTimeout(function() {
			whoisnext();
		}, 1000); /* 1 second delay */
	}, 1500); /* 1.5 second delay */
}

/* Fortune (NPC/AI) reached/passed GO */
function fortune_passGO() {
	if (currentdiff == "easy") {
		users.Fortune.money += 400;
		fortuneactions += "Fortune collected $400 for passing GO.<br><br>";
	} else if (currentdiff == "medium") {
		users.Fortune.money += 200;
		fortuneactions += "Fortune collected $200 for passing GO.<br><br>";
	} else if (currentdiff == "hard") {
		users.Fortune.money += 100;
		fortuneactions += "Fortune collected $100 for passing GO.<br><br>";
	}
	
	document.getElementById("actions").innerHTML = fortuneactions;
	document.getElementById("ai-money-count").innerHTML = users.Fortune.money.toLocaleString('en');
}

/* Fortune is in JAIL */
function fortune_jail() {
	/* Check if Fortune has enough money to upgrade */
	if (users.Fortune.money >= 50) {
		fortune_moneysubtraction(50);
		
		users.Fortune.position.jail.currentlyin = false;
		users.Fortune.position.jail.turns = 0;
		
		document.getElementById("fortune").style.top = "1975px";
		document.getElementById("fortune").style.left = "100px";
		
		fortuneactions += "Fortune paid $50 to get out of jail.<br><br>";
	} else {
		rolldice();
		
		if (die1 == die2) {
			users.Fortune.position.jail.currentlyin = false;
			users.Fortune.position.jail.turns = 0;
			
			document.getElementById("fortune").style.top = "1975px";
			document.getElementById("fortune").style.left = "100px";
		
			fortuneactions += "Fortune rolled double " + die1 + "'s, and got out of jail.<br><br>";
		} else {
			users.Fortune.position.jail.turns++;
			
			if (users.Fortune.position.jail.turns == 3) {
				fortune_moneysubtraction(50);
				
				users.Fortune.position.jail.currentlyin = false;
				users.Fortune.position.jail.turns = 0;
			
				document.getElementById("fortune").style.top = "1975px";
				document.getElementById("fortune").style.left = "100px";
		
				fortuneactions += "Fortune rolled a " + die1 + " and a " + die2 + ", but since they have served their full three-turn sentance, they paid $50 and got out of jail.<br><br>";
			} else {
				fortuneactions += "Fortune rolled a " + die1 + " and a " + die2 + ", and did not get out of jail.<br><br>";
			}
		}
	}
	
	document.getElementById("actions").innerHTML = fortuneactions;
	/* Keep the content scrolled to the bottom */
	document.getElementById("actions").scrollTop = document.getElementById("actions").scrollHeight;
	
	setTimeout(function() {
		document.getElementById("actionwindow").style.bottom = "-400px";
		
		$("#first").animate( {
				top: "1100px",
				left: "2000px"
			}, {
				duration: 825, /* 0.825 seconds */
				easing: "swing"
			});
			$("#second").animate( {
				top: "1100px",
				left: "2000px"
			}, {
				duration: 825, /* 0.825 seconds */
				easing: "swing",
				complete: function() {
					setTimeout(function() {
						$("#board").animate( {
							top: "-2300px"
						}, {
							duration: 1000, /* 1 second */
							easing: "swing",
							complete: function() {
								whoisnext();
							}
						});
					}, 250); /* 0.25 second delay */
				}
			});
	}, 1000); /* 1 second delay */
}

/* Set current rent for Fortune (NPC/AI) */
function fortune_setrent(assetnumber) {
	if (assetnumber.rent.current == "base") {
		users.Fortune.position.rent = assetnumber.rent.base;
	} else if (assetnumber.rent.current == "one") {
		users.Fortune.position.rent = assetnumber.rent.one;
	} else if (assetnumber.rent.current == "two") {
		users.Fortune.position.rent = assetnumber.rent.two;
	} else if (assetnumber.rent.current == "three") {
		users.Fortune.position.rent = assetnumber.rent.three;
	} else if (assetnumber.rent.current == "four") {
		users.Fortune.position.rent = assetnumber.rent.four;
	} else if (assetnumber.rent.current == "five") {
		users.Fortune.position.rent = assetnumber.rent.five;
	}
}

/* Set current position owner for Fortune (NPC/AI) */
function fortune_setowner(assetnumber) {
	users.Fortune.position.owner = assetnumber.owner;
}

/* Fortune (NPC/AI) buys an asset */
function fortune_buy(assetnumber, onboard) {
	fortune_moneysubtraction(assetnumber.price);
	
	assetnumber.owner = users.Fortune.call;
	
	users.Fortune.assets.num++;
	users.Fortune.assets.owned.push(assetnumber);
	
	var x = document.getElementById(onboard);
	x.querySelector("#base").style.backgroundColor = users.Fortune.color;
	x.querySelector("#u1").style.backgroundColor = users.Fortune.color;
	x.querySelector("#u2").style.backgroundColor = users.Fortune.color;
	x.querySelector("#u3").style.backgroundColor = users.Fortune.color;
	x.querySelector("#u4").style.backgroundColor = users.Fortune.color;
	x.querySelector("#u5").style.backgroundColor = users.Fortune.color;
	x.querySelector("#base").style.display = "inline-block";
	x.title = assetnumber.name + ": Owned by Fortune";
}
function fortune_buy_ad(assetnumber, onboard) {
	fortune_moneysubtraction(assetnumber.price);
	
	assetnumber.owner = users.Fortune.call;
	
	users.Fortune.advertising.num++;
	users.Fortune.advertising.owned.push(assetnumber);
	
	var x = document.getElementById(onboard);
	x.querySelector("#base").style.backgroundColor = users.Fortune.color;
	x.querySelector("#base").style.display = "inline-block";
	x.title = assetnumber.name + ": Owned by Fortune";
	
	if (users.Fortune.advertising.num == 2) {
		playerorder[currentuser].advertising.owned.forEach(function(asset) {
			asset.rent.current = "two";
		});
	} else if (users.Fortune.advertising.num == 3) {
		playerorder[currentuser].advertising.owned.forEach(function(asset) {
			asset.rent.current = "three";
		});
	} else if (users.Fortune.advertising.num == 4) {
		playerorder[currentuser].advertising.owned.forEach(function(asset) {
			asset.rent.current = "four";
		});
	}
}

/* Fortune (NPC/AI) upgrades an asset (not an advertisment asset as these cannot be upgraded) */
function fortune_upgrade(assetnumber, onboard) {
	fortune_moneysubtraction(assetnumber.upgrade);
	
	var x = document.getElementById(onboard);
	
	if (assetnumber.rent.current == "base") {
		assetnumber.rent.current = "one";
		
		x.querySelector("#u1").style.display = "inline-block";
	} else if (assetnumber.rent.current == "one") {
		assetnumber.rent.current = "two";
		
		x.querySelector("#u2").style.display = "inline-block";
	} else if (assetnumber.rent.current == "two") {
		assetnumber.rent.current = "three";
		
		x.querySelector("#u3").style.display = "inline-block";
	} else if (assetnumber.rent.current == "three") {
		assetnumber.rent.current = "four";
		
		x.querySelector("#u4").style.display = "inline-block";
	} else if (assetnumber.rent.current == "four") {
		assetnumber.rent.current = "five";
		
		x.querySelector("#u5").style.display = "inline-block";
	}
}

/* Basic money subtraction for Fortune (NPC/AI) */
function fortune_moneysubtraction(amountlost) {
	users.Fortune.money -= amountlost;
	
	/* Check for bankruptcy */
	if (users.Fortune.money < 0) {
		/* Display the money as only zero and not as a negative (since you can't really have negative money) */
		document.getElementById("ai-money-count").innerHTML = "0";

		/* Fortune goes bankrupt */
		bankruptcy(users.Fortune);
	} else {
		/* Update displayed money */
		document.getElementById("ai-money-count").innerHTML = users.Fortune.money.toLocaleString('en');
	}
}
