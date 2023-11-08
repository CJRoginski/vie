/* Multiplayer version of innerworkings.js */


var numofplayers = 2; /* By default, there has to be at least 2 players for multiplayer */

var colortohide; /* The color pawn that a player has choosen and thus must be hidden from other players */



/* Set how many players are playing */
function playernum(number) {
	numofplayers = number;
	
	/* users.player1.currentlyplaying is already marked as true */
	
	/* Multiple if statements (without the use of else) allows the computer to check all of the values without marking a player as true multiple times */
	if (numofplayers >= 2) {
		users.player2.currentlyplaying = true;
		playerorder.push(users.player2);

		document.getElementById(users.player2.id).style.display = "block";
	}
	if (numofplayers >= 3) {
		users.player3.currentlyplaying = true;
		playerorder.push(users.player3);

		document.getElementById(users.player3.id).style.display = "block";
	}
	if (numofplayers >= 4) {
		users.player4.currentlyplaying = true;
		playerorder.push(users.player4);

		document.getElementById(users.player4.id).style.display = "block";
	}
	if (numofplayers >= 5) {
		users.player5.currentlyplaying = true;
		playerorder.push(users.player5);

		document.getElementById(users.player5.id).style.display = "block";
	}
	if (numofplayers == 6) {
		users.player6.currentlyplaying = true;
		playerorder.push(users.player6);

		document.getElementById(users.player6.id).style.display = "block";
	}
	
	$("#playernum").animate( {
		left: "-100%"
	}, {
		duration: 1000, /* 1 second */
		easing: "swing"
	});
	setTimeout(function() {
		$("#difficulty").animate( {
			bottom: "0"
		}, {
			duration: 1000, /* 1 second */
			easing: "swing"
		});
	}, 750); /* 0.75 second delay */
}

/* Choose pawn color and nickname */
function setplayeroptions(colorname, base, shading) {
	document.getElementById("hideme").style.display = "block";
	
	playerorder[currentuser].color = base;
	
	$("#board #" + playerorder[currentuser].id + " #blub").css({ "background-color": base, "box-shadow": "inset -7px -3px 0 2px " + shading });
	$("#board #" + playerorder[currentuser].id + " #collar").css( "border-bottom-color", base );
	$("head").append("<style>#board #" + playerorder[currentuser].id + " #collar::after { border-top-color:" + base + "; }</style>"); /* jQuery .css() function cannot be used on ::after selectors */
	$("#board #" + playerorder[currentuser].id + " #collar #shadow").css( "border-bottom-color", shading );
	$("head").append("<style>#board #" + playerorder[currentuser].id + " #collar #shadow::after { background-color:" + shading + "; }</style>"); /* jQuery .css() function cannot be used on ::after selectors */
	$("#board #" + playerorder[currentuser].id + " #neck").css( "border-bottom-color", base );
	$("head").append("<style>#board #" + playerorder[currentuser].id + " #neck::after { border-top-color:" + shading + "; }</style>"); /* jQuery .css() function cannot be used on ::after selectors */
	$("#board #" + playerorder[currentuser].id + " #shade").css( "border-bottom-color", shading );
	$("head").append("<style>#board #" + playerorder[currentuser].id + " #shade::after { background-color:" + shading + "; }</style>"); /* jQuery .css() function cannot be used on ::after selectors */
	$("#board #" + playerorder[currentuser].id + " #topbase").css({ "background-color": base, "box-shadow": "inset -5px -13px 0 4px " + shading });
	$("#board #" + playerorder[currentuser].id + " #bottombase").css({ "background-color": base, "box-shadow": "inset -10px -10px 0 10px " + shading });
	
	document.getElementById("colorprompt").style.opacity = "1";
	
	document.getElementById("colortype").innerHTML = colorname.toUpperCase();
	colortohide = colorname + "pawn";
}
function playeroptions() {
	var x = document.getElementById("nickname").value;
	playerorder[currentuser].nickname = x;
	
	document.getElementById(playerorder[currentuser].id).setAttribute("title", titlepiece());
	function titlepiece() {
		/* Convert the nickname to all lowercase with no spaces to see if the player actually changed their nickname */
		var nick = playerorder[currentuser].nickname.toLowerCase().replace(/ /g, "");
		if (nick == playerorder[currentuser].id) { /* The player's id is used here because it is the closest to what an unchanged nickname should be */
			var y = playerorder[currentuser].call + "'s game piece";
			playerorder[currentuser].nickname = ""; /* Since there is no real nickname for this player, mark it as empty for future reference */
			return y;
		} else {
			var z = playerorder[currentuser].nickname + "'s (" + playerorder[currentuser].call + ") game piece";
			return z;
		}
		
	}
	
	currentuser++;

	if (currentuser < playerorder.length) {
		$("#pawncolor").animate( {
			bottom: "-100%"
		}, {
			duration: 1000, /* 1 second */
			easing: "swing",
			complete: function() {
				/* display:none; cannot be used here, as it would tamper with center alignment and spacing betwen pawns */
				$("#" + colortohide).css({ "opacity": "0", "cursor": "default" });
				document.getElementById(colortohide).setAttribute("title", "");
				document.getElementById(colortohide).onclick = function() { javascript:void(0); };

				/* Change the name of the player identifier */
				document.getElementById("callby").innerHTML = playerorder[currentuser].call;

				/* Change the default value of the nickname form input */
				document.getElementById("nickname").value = playerorder[currentuser].call;

				document.getElementById("hideme").style.display = "none";

				setTimeout(function() {
					$("#pawncolor").animate( {
						bottom: "0"
					}, {
						duration: 1000, /* 1 second */
						easing: "swing",
						complete: function() {
							document.getElementById("nickname").focus();
						}
					});
				}, 250); /* 0.25 second delay */
			}
		});
	} else if (currentuser == playerorder.length) {
		document.getElementById("nickname").blur();
		
		$("#choose").animate( {
			left: "-100%"
		}, {
			duration: 1000,
			easing: "swing"
		});
		setTimeout(function() {
			newgame();
		}, 750);
	}
}

/* Start a new game */
function newgame() {
	gamescreen = true;
	
	document.getElementById("game").style.display = "block";

	/* Randomize the order that the players will play in */
	playerorder.sort(function() { return 0.5 - Math.random(); });
	/* Display that order */
	playerorder.forEach(function(item) {
		var list = document.getElementById("ordering");
		if (item.nickname == "") {
			list.innerHTML = list.innerHTML + "<li>" + item.call + "</li>";
		} else {
			list.innerHTML = list.innerHTML + "<li>" + item.nickname + "<br><span style='font-size:22px;'>(" + item.call + ")</span></li>";
		}
	});

	$("#board").animate( {
		top: "-1600px"
	}, {
		duration: 1000, /* 1 second */
		easing: "swing",
		complete: function() {
			document.getElementById("titlescreen").style.display = "none";
			
			setTimeout(function() {
				document.getElementById("turnorder").style.top = "0";
			
				setTimeout(function() {
					document.getElementById("turnorder").style.top = "-150%";
					
					currentuser = 0;
					
					/* Update the identifier bar on question cards to match the current player's pawn color */
					document.getElementById("identifierbar").style.backgroundColor = playerorder[currentuser].color;
					
					/* Update displayed money to match the current player's money value */
					document.getElementById("money-count1").innerHTML = playerorder[currentuser].money.toLocaleString('en');
					document.getElementById("money-count2").innerHTML = playerorder[currentuser].money.toLocaleString('en');
					
					/* Update displayed name to match the current player's name */
					if (playerorder[currentuser].nickname == "") {
						document.getElementById("playerheader").innerHTML = playerorder[currentuser].call;
					} else {
						document.getElementById("playerheader").innerHTML = playerorder[currentuser].nickname + " (" + playerorder[currentuser].call + ")";
					}

					setTimeout(function() {
						document.getElementById("playerheading").style.top = "0";
						
						move(playerorder[currentuser]);
					}, 900); /* 0.9 second delay */
				}, 7500); /* 7.5 second delay */
			}, 750); /* 0.75 second delay */
		}
	});
}
