/* This is the basic innerworkings of the game (and fun little extras ;) ) */


var version; /* What version is currently being played */

var gamescreen = false; /* Whether or not the player(s) are actively playing */

var currentdiff = "easy"; /* Current difficulty of questions */

var colorid;

var numofplayers = 2; /* 2 by default for either singleplayer or multiplayer */
var users = {
	player1: { /* Player 1 is also used for the player in the singleplayer version */
		call: "Player 1", /* What this player is called (by numbers in multiplayer; "You" in singleplayer) */
		nickname: "Player 1", /* (For multiplayer only) Personalized name to be caled (in addition to number calling) */
		id: "player1", /* Game piece id in HTML */
		color: "#D3D3D3", /* Color of game piece */
		currentlyplaying: true, /* (For multiplayer only) If the player is playing (bankruptcy check and number of players) */
		money: 1500, /* Current money */
		position: {
			num: 1, /* Current space they are on */
			owner: "unowned", /* Owner of the space they are on (for questions) */
			rent: 0, /* Current rent of the space they are on */
			jail: {
				currentlyin: false, /* Whether or not they are in jail */
				turns: 0 /* How long they have been in jail */
			}
		},
		assets: {
			num: 0, /* Number of assets owned */
			owned: [], /* Actual assets owned (not sorted) */
		},
		advertising: {
			num: 0, /* Number of Advertising assets owned */
			owned: [] /* Actual Advertising assets owned (not sorted) */
		}
	},
	player2: {
		call: "Player 2", /* What this player is called (by numbers) */
		nickname: "Player 2", /* Personalized name to be caled (in addition to number calling) */
		id: "player2", /* Game piece id in HTML */
		color: "#D3D3D3", /* Color of game piece */
		currentlyplaying: false, /* If the player is playing (bankruptcy check and number of players) */
		money: 1500, /* Current money */
		position: {
			num: 1, /* Current space they are on */
			owner: "unowned", /* Owner of the space they are on (for questions) */
			rent: 0, /* Current rent of the space they are on */
			jail: {
				currentlyin: false, /* Whether or not they are in jail */
				turns: 0 /* How long they have been in jail */
			}
		},
		assets: {
			num: 0, /* Number of assets owned */
			owned: [], /* Actual assets owned (not sorted) */
		},
		advertising: {
			num: 0, /* Number of Advertising assets owned */
			owned: [] /* Actual Advertising assets owned (not sorted) */
		}
	},
	player3: {
		call: "Player 3", /* What this player is called (by numbers) */
		nickname: "Player 3", /* Personalized name to be caled (in addition to number calling) */
		id: "player3", /* Game piece id in HTML */
		color: "#D3D3D3", /* Color of game piece */
		currentlyplaying: false, /* If the player is playing (bankruptcy check and number of players) */
		money: 1500, /* Current money */
		position: {
			num: 1, /* Current space they are on */
			owner: "unowned", /* Owner of the space they are on (for questions) */
			rent: 0, /* Current rent of the space they are on */
			jail: {
				currentlyin: false, /* Whether or not they are in jail */
				turns: 0 /* How long they have been in jail */
			}
		},
		assets: {
			num: 0, /* Number of assets owned */
			owned: [], /* Actual assets owned (not sorted) */
		},
		advertising: {
			num: 0, /* Number of Advertising assets owned */
			owned: [] /* Actual Advertising assets owned (not sorted) */
		}
	},
	player4: {
		call: "Player 4", /* What this player is called (by numbers) */
		nickname: "Player 4", /* Personalized name to be caled (in addition to number calling) */
		id: "player4", /* Game piece id in HTML */
		color: "#D3D3D3", /* Color of game piece */
		currentlyplaying: false, /* If the player is playing (bankruptcy check and number of players) */
		money: 1500, /* Current money */
		position: {
			num: 1, /* Current space they are on */
			owner: "unowned", /* Owner of the space they are on (for questions) */
			rent: 0, /* Current rent of the space they are on */
			jail: {
				currentlyin: false, /* Whether or not they are in jail */
				turns: 0 /* How long they have been in jail */
			}
		},
		assets: {
			num: 0, /* Number of assets owned */
			owned: [], /* Actual assets owned (not sorted) */
		},
		advertising: {
			num: 0, /* Number of Advertising assets owned */
			owned: [] /* Actual Advertising assets owned (not sorted) */
		}
	},
	player5: {
		call: "Player 5", /* What this player is called (by numbers) */
		nickname: "Player 5", /* Personalized name to be caled (in addition to number calling) */
		id: "player5", /* Game piece id in HTML */
		color: "#D3D3D3", /* Color of game piece */
		currentlyplaying: false, /* If the player is playing (bankruptcy check and number of players) */
		money: 1500, /* Current money */
		position: {
			num: 1, /* Current space they are on */
			owner: "unowned", /* Owner of the space they are on (for questions) */
			rent: 0, /* Current rent of the space they are on */
			jail: {
				currentlyin: false, /* Whether or not they are in jail */
				turns: 0 /* How long they have been in jail */
			}
		},
		assets: {
			num: 0, /* Number of assets owned */
			owned: [], /* Actual assets owned (not sorted) */
		},
		advertising: {
			num: 0, /* Number of Advertising assets owned */
			owned: [] /* Actual Advertising assets owned (not sorted) */
		}
	},
	player6: {
		call: "Player 6", /* What this player is called (by numbers) */
		nickname: "Player 6", /* Personalized name to be caled (in addition to number calling) */
		id: "player6", /* Game piece id in HTML */
		color: "#D3D3D3", /* Color of game piece */
		currentlyplaying: false, /* If the player is playing (bankruptcy check and number of players) */
		money: 1500, /* Current money */
		position: {
			num: 1, /* Current space they are on */
			owner: "unowned", /* Owner of the space they are on (for questions) */
			rent: 0, /* Current rent of the space they are on */
			jail: {
				currentlyin: false, /* Whether or not they are in jail */
				turns: 0 /* How long they have been in jail */
			}
		},
		assets: {
			num: 0, /* Number of assets owned */
			owned: [], /* Actual assets owned (not sorted) */
		},
		advertising: {
			num: 0, /* Number of Advertising assets owned */
			owned: [] /* Actual Advertising assets owned (not sorted) */
		}
	},
	Fortune: { /* Non-player character in the singleplayer version */
		call: "Fortune", /* What this player is called (by numbers) */
		nickname: "", /* Fortune does not have a nickname (created and left blank to prevent errors) */
		id: "fortune", /* Game piece id in HTML */
		color: "#D3D3D3", /* Color of game piece */
		currentlyplaying: true, /* This is true regardless of the version since singleplayer is not affected by this variable */
		money: 1500, /* Current money */
		position: {
			num: 1, /* Current space they are on */
			owner: "unowned", /* Owner of the space they are on (for questions) */
			rent: 0, /* Current rent of the space they are on */
			jail: {
				currentlyin: false, /* Whether or not they are in jail */
				turns: 0 /* How long they have been in jail */
			}
		},
		assets: {
			num: 0, /* Number of assets owned */
			owned: [], /* Actual assets owned (not sorted) */
		},
		advertising: {
			num: 0, /* Number of Advertising assets owned */
			owned: [] /* Actual Advertising assets owned (not sorted) */
		}
	}
};
var playerorder = [users.player1]; /* The players currently playing and the order to which they will play */
var currentuser = 0; /* Used to determine the position in the playerorder array */

var bankrupt = false; /* Used to stop functions from running when a player (in multiplayer with 3 or more players only; always used in singleplayer) goes bankrupt */

/* Grant spaces (numbers on the board are for aesthetic purposes) */
var mark = 100; /* What number it currently is on */
var next = 101; /* What number it is counting up/down to */
var ticker = 10; /* How fast the numbers are going (currenly 0.01 seconds per number) */
var direction = "up"; /* If the numbers are increasing or decreasing */

/* See board option in playerspace */
var pos1 = 0;
var pos2 = 0;
var pos3 = 0;
var pos4 = 0;

var greater_money; /* Find who has the greatest amount of money (in the event of a tie) */



/* Set and display the current version the player wants to play */
function play(theversion) {
	version = theversion;
	
	if (version == "singleplayer") {
		window.location.replace("versions/singleplayer.html");
	} else if (version == "multiplayer") {
		window.location.replace("versions/multiplayer.html");
	}
}

/* Redirect to the online version */
function onlineversion_singleplayer() {
	window.location.replace("http://www.vie.epizy.com/versions/singleplayer.html");
}
function onlineversion_multiplayer() {
	window.location.replace("http://www.vie.epizy.com/versions/multiplayer.html");
}
/* Play on the offline version */
function dismiss() {
	document.getElementById("online").style.display = "none";
	
	unboxed();
}

/* Beginning the game (start-up animations) */
function unboxed() {
	document.getElementById("continue").onclick = function() { setting(currentdiff) };
	
	/* Start running this function to warm it up */
	grantchange();
	
	/* Media screen queries */
	if (window.matchMedia("(max-width: 1366px)").matches) {
		$("#titlescreen #gamebox").animate( {
			top: "-50px",
			left: "-185px"
		}, {
			duration: 2000, /* 2 seconds */
			easing: "swing"
		});
	} else {
		$("#titlescreen #gamebox").animate( {
			top: "0",
			left: "0"
		}, {
			duration: 2000, /* 2 seconds */
			easing: "swing"
		});
	}
}

/* Open the instructions */
function instructions() {
	window.open("additional_info/instructions.html", "_blank", "toolbar=no, scrollbars=no, resizable=no, width=1000, height=700, top=20, left=20");
}

/* Open shortcuts_map.html in a new window (as to not lose the player's progress in-game) with custom sizing and placement (to access the gamescreen easily when done) */
function openShortcuts() {
	window.open("additional_info/shortcuts_map.html", "_blank", "toolbar=no, scrollbars=no, resizable=no, width=475, height=550, top=200, left=450");
}

/* Player wants to starting playing the game */
function getthisgamestarted() {
	$("#titlescreen #gamebox").animate( {
		top: "-1400px",
		right: "-350px"
	}, {
		duration: 1500, /* 1.5 seconds */
		easing: "swing"
	});
	setTimeout(function() {
		if (version == "multiplayer") {
			/* Reset the form for nicknames */
			document.getElementById("playernickname").reset(); 
		} else if (version == "singleplayer") {
			document.getElementById("difficulty").style.bottom = "0";

			/* Add Fortune to the playerorder array and display them since the singleplayer version does not have a  */
			playerorder.push(users.Fortune);
			document.getElementById(users.Fortune.id).style.display = "block";
		}
		
		/* Allow the player to choose various aspects of their game to personalized gameplay experience */
		$("#choose").animate( {
			bottom: "0"
		}, {
			duration: 1000, /* 1 second */
			easing: "swing"
		});
	}, 500); /* 0.5 second delay */
}

/* Choose question difficulty */
function set(difficulty) {
	currentdiff = difficulty;
	
	document.getElementById("diffprompt").style.opacity = "1";
	
	document.getElementById("difftype").innerHTML = currentdiff.toUpperCase();
	
	if (currentdiff == "easy") {
		document.getElementById("total").innerHTML = "85";
	} else if (currentdiff == "medium") {
		document.getElementById("total").innerHTML = "55";
	} else if (currentdiff == "hard") {
		document.getElementById("total").innerHTML = "25";
	}
	
	document.getElementsByClassName("diffcont").onclick = function() { setting(currentdiff) };
}
function setting(difficulty) {
	$("#difficulty").animate( {
		left: "-100%"
	}, {
		duration: 1000, /* 1 second */
		easing: "swing",
		complete: function() {
			currentdiff = difficulty;
		}
	});
	setTimeout(function() {
		if (version == "multiplayer") {
			document.getElementById("nickname").value = playerorder[currentuser].call;
			document.getElementById("nickname").focus();
		}
		
		$("#pawncolor").animate( {
			bottom: "0"
		}, {
			duration: 1000, /* 1 second */
			easing: "swing"
		});
	}, 750); /* 0.75 second delay */
}

/* The changing number values on the grant spaces */
function setgrant() {
	/* Max 2000, Min 100; Inclusive */
	next = Math.floor(Math.random() * (2000 - 100 + 1) ) + 100;
	
	grantchange();
}
function grantchange() {
	if (direction == "up") {
		if (mark <= next) {
			document.getElementById("val1").innerHTML = mark.toLocaleString('en');
			document.getElementById("val2").innerHTML = mark.toLocaleString('en');
			mark++;
			setTimeout(grantchange, ticker);
		} else {
			direction = "down";
			
			setgrant();
		}
	} else if (direction == "down") {
		if (mark >= next) {
			document.getElementById("val1").innerHTML = mark.toLocaleString('en');
			document.getElementById("val2").innerHTML = mark.toLocaleString('en');
			mark--;
			setTimeout(grantchange, ticker);
		} else {
			direction = "up";
			
			setgrant();
		}
	}
}

/* Open/Close the menu */
function openMenu() {
	$("#playerspace").animate( {
		bottom: "-100%"
	}, {
		duration: 1000, /* 1 second */
		easing: "linear",
		complete: function() {
			document.getElementById("menu").style.display = "block";
			
			/* Media screen queries */
			if (window.matchMedia("(max-width: 1400px)").matches) {
				$("#menu #gamebox").animate( {
					top: "-50px",
					left: "-185px"
				}, {
					duration: 2000, /* 2 seconds */
					easing: "swing"
				});
			} else {
				$("#menu #gamebox").animate( {
					top: "0",
					left: "0"
				}, {
					duration: 2000, /* 2 seconds */
					easing: "swing"
				});
			}
		}
	});
}
function closeMenu() {
	$("#menu #gamebox").animate( {
		top: "-1400px",
		right: "-350px"
	}, {
		duration: 1500, /* 1.5 seconds */
		easing: "swing",
		complete: function() {
			document.getElementById("menu").style.display = "none";
		}
	});
	setTimeout(function() {
		$("#playerspace").animate( {
				bottom: "0"
			}, {
				duration: 550, /* .55 seconds */
				easing: "linear"
			});
	}, 500); /* 0.5 second delay */
}

/* View the board */
function viewBoard() {
	document.getElementById("board").style.msTransform = "rotate(3deg) scale(0.5)"; /* For Edge */
	document.getElementById("board").style.WebkitTransform = "rotate(3deg) scale(0.5)"; /* For Safari and Chrome */
	document.getElementById("board").style.transform = "rotate(3deg) scale(0.5)"; /* Standard */

	document.getElementById("board").style.right = "-100px";
	
	$("#playerspace").animate( {
		bottom: "-100%"
	}, {
		duration: 1000, /* 1 second */
		easing: "linear"
	});
	setTimeout(function() {
		$("#board").animate( {
			top: "-750px"
		}, {
			duration: 1000, /* 1 second */
			easing: "linear",
			complete: function() {
				movingBoard();
			}
		});
	}, 150); /* 0.15 second delay */
}
function movingBoard() {
	document.getElementById("board").style.cursor = "grab";
	document.getElementById("board").onmousedown = dragMouseDown;
	
	document.getElementById("movingexit").style.display = "block";
	
	/* Mouse is clicked */
	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		
		/* Get the position of the mouse */
		pos3 = e.clientX;
		pos4 = e.clientY;
		
		document.getElementById("board").style.cursor = "grabbing";
		
		/* Stop moving the board when it is no longer clicked */
		document.onmouseup = closeDragElement;
		
		/* Moving the board when it is clicked */
		document.onmousemove = elementDrag;
	}
	
	/* Moving the board when it is clicked */
	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		
		/* Get the new position of the mouse */
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		
		/* Reset the position of the board */
		document.getElementById("board").style.top = (document.getElementById("board").offsetTop - pos2) + "px";
		document.getElementById("board").style.left = (document.getElementById("board").offsetLeft - pos1) + "px";
	}
	
	/* Stop moving the board when it is no longer clicked */
	function closeDragElement() {
		document.getElementById("board").style.cursor = "grab";
		
		document.onmouseup = null;
		document.onmousemove = null;
	}
}
function exitmoving() {
	document.getElementById("board").style.cursor = "default";
	
	document.getElementById("movingexit").style.display = "none";
	
	$("#board").animate( {
		top: "-2300px"
	}, {
		duration: 1000, /* 1 second */
		easing: "swing",
		complete: function() {
			pos1 = 0;
			pos2 = 0;
			pos3 = 0;
			pos4 = 0;
			
			$("#playerspace").animate( {
				bottom: "0"
			}, {
				duration: 550, /* .55 seconds */
				easing: "linear",
				complete: function() {
					document.getElementById("board").style.left = "auto";

					document.getElementById("board").style.msTransform = "rotate(3deg) scale(1)"; /* For Edge */
					document.getElementById("board").style.WebkitTransform = "rotate(3deg) scale(1)"; /* For Safari and Chrome */
					document.getElementById("board").style.transform = "rotate(3deg) scale(1)"; /* Standard */
				}
			});
		}
	});
}

/* Keyboard Shortcuts */
document.addEventListener('keydown', function(shortcut) {
	/* Return to the title screen (on gameplay screen) or close tab (on title screen) */
	if (shortcut.keyCode === 27) { /* "ESC" was pressed */
		if (gamescreen == true) {
			quit();
		} else {
			close();
		}
	
	/* Enter key shortcuts (multiple outcomes) */
	} else if (shortcut.keyCode === 13) { /* "ENTER" is pressed */
		if (gamescreen == false) {
			/* For mutliplayer only */
			if (version == "mutliplayer") {
				$("form").submit(function() { return false; });
				document.getElementById("nickname").blur();
				
				if (document.getElementById("nickname").value === "") {
					document.getElementById("nickname").value = playerorder[currentuser].call;
				}
			}
		}
	}
});

/* What happens when a player goes "bankrupt" (this function is not applicable for Fortune) */
function bankruptcy(player) {
	bankrupt = true;
	
	document.getElementById("titlescreen").style.display = "none";
	document.getElementById("game").style.display = "none";

	/* Remove the player from the game */
	player.currentlyplaying = false;
	playerorder.splice(playerorder.indexOf(player), 1);

	/* Decrease the number of players currently playing */
	numofplayers--;

	if (version == "multiplayer") {
		if (numofplayers > 1) {
			/* Delete the player's progress from the game */
			document.getElementById(player.id).style.display = "none";
			player.assets.num = 0;
			player.assets.owned.forEach(resetting);
			player.assets.owned = 0;
			player.advertising.num = 0;
			player.advertising.owned.forEach(resetting);
			player.advertising.owned = 0;
			
			/* Show the player that went bankrupt */
			showbankruptcy(player);
			
			setTimeout(function() {
				document.getElementById("game").style.display = "block";

				setTimeout(function() {
					if (currentuser > playerorder.length) { /* > is used and not == or >= since the player that went bankrupt may have been the last player of a session */
						/* Start the session over */
						currentuser = 0;
						sessionnum++;
					}

					/* Bankruptcy conditionals have finished */
					bankrupt = false;

					document.getElementById("playerheading").style.top = "-200px";

					/* currentuser is not increased since the next player's index in the playerorder array is now equal to the bankrupt player's old index */
					nextturn(playerorder[currentuser]);
				}, 1050); /* 1.05 second delay */
			}, 6000); /* 6 second delay */
		} else {
			/* The last player standing wins (no identifier to show who went bankrupt) */
			win(playerorder[0]);
		}
	} else {
		if (player.call == "Fortune") {
			/* The player wins */
			win(playerorder[0]);
		} else {
			showbankruptcy(player);
			
			setTimeout(function() {
				credits();
			}, 7050); /* 7.05 second delay */
		}
	}
}
/* Show who went bankrupt */
function showbankruptcy(player) {
	if (player.nickname == "") {
		$("#bankruptcy #starter").html(player.call + " went");
	} else {
		$("#bankruptcy #starter").html(player.nickname + " (" + player.call + ") went");
	}

	document.getElementById("bankruptcy").style.top = "0";
	document.getElementById("bankruptcy").style.opacity = "1";
	setTimeout(function() {
		$("#bankruptcy #starter").css("opacity", "1");
			
		setTimeout(function() {
			document.getElementById("bankruptcy").style.opacity = "0";

			setTimeout(function() {
				document.getElementById("bankruptcy").style.top = "-200%";
			}, 1050); /* 1.05 second delay */
		}, 5000); /* 5 second delay */
	}, 1000); /* 1 second delay */
}

/* Game ends in a tie */
function tie() {
	document.getElementById("titlescreen").style.display = "none";
	document.getElementById("game").style.display = "none";
	
	/* Calculate each player's total net worth */
	playerorder.forEach(function(player) {
		var assetmoney = 0;

		if (player.assets.num !== 0) {
			/* Calculate the worth of normal asset spaces (factoring in upgrades as well) */
			player.assets.owned.forEach(function(item) {
				switch (item.rent.current) {
					case "base":
						assetmoney += item.price;
						break;
					case "one":
						assetmoney += item.price + item.upgrade;
						break;
					case "two":
						assetmoney += item.price + (item.upgrade * 2);
						break;
					case "three":
						assetmoney += item.price + (item.upgrade * 3);
						break;
					case "four":
						assetmoney += item.price + (item.upgrade * 4);
						break;
					case "five":
						assetmoney += item.price + (item.upgrade * 5);
				}
			});
		}
		if (player.advertising.num !== 0) {
			/* Calculate the worth of advertising spaces */
			player.advertising.owned.forEach(function(item) {
				assetmoney += item.price;
			});
		}

		player.money += assetmoney;
	});

	/* Find who has the greatest amount of money */
	playerorder.forEach(function(user, index, arr) {
		/* The first player has nothing to compare to and thus becomes the starting compairing point */
		if (index === 0) {
			greater_money = index;
		} else {
			/* Compare the current player's money to that of the player with the greatest money */
			if (user.money > arr[greater_money].money) {
				greater_money = index;
			}
		}
	});

	win(playerorder[greater_money]);
	
}
/* What happens when a player wins (Game Over) */
function win(player) {
	if (player.nickname == "") {
		$("#youwin #starter").html(player.call);
	} else {
		$("#youwin #starter").html(player.nickname + " (" + player.call + ")");
	}
	
	document.getElementById("youwin").style.top = "0";
	document.getElementById("youwin").style.opacity = "1";
	setTimeout(function() {
		$("#youwin #starter").css("opacity", "1");
			
		setTimeout(function() {
			document.getElementById("youwin").style.opacity = "0";

			setTimeout(function() {
				document.getElementById("youwin").style.top = "-200%";
				
				credits();
			}, 1050); /* 1.05 second delay */
		}, 5000); /* 5 second delay */
	}, 1000); /* 1 second delay */
}

/* Credits */
function credits() {
	gamescreen = false;
	
	$("#credits").animate( {
		bottom: "0"
	}, {
		duration: 35000, /* 35 seconds */
		easing: "linear",
		complete: function() {
			setTimeout(function() {
				$("#credits").animate( {
					bottom: "125%"
				}, {
					duration: 1000, /* 1 second */
					easing: "swing",
					complete: function() {
						setTimeout(function() {
							redoGame();
						}, 500); /* 0.5 second delay */
					}
				});
			}, 3000); /* 3 second delay */
		}
	});
}

/* Quit the game (return to title screen) */
function quit() {
	var chicken_switch = confirm("If you leave this screen, all your progress will be lost.\nContinue?");
	
	if (chicken_switch == true) {
		redoGame();
	}
}

/* Close the tab */
function end() {
	close();
}

/* Replay the game */
function redoGame() {
	window.location.replace("../index.html");
}
