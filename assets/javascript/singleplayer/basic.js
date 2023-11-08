/* Single player version of innerworkings.js */


/* Choose pawn color */
function setpawncolor(colorname, base, shading) {
	document.getElementById("hideme").style.display = "block";
	
	users.player1.color = base;

	document.getElementById("identifierbar").style.backgroundColor = base;
	
	$("#board #player #blub").css({ "background-color": base, "box-shadow": "inset -7px -3px 0 2px " + shading });
	$("#board #player #collar").css( "border-bottom-color", base );
	$("head").append("<style>#board #player #collar::after { border-top-color:" + base + "; }</style>"); /* jQuery .css() function cannot be used on ::after selectors */
	$("#board #player #collar #shadow").css( "border-bottom-color", shading );
	$("head").append("<style>#board #player #collar #shadow::after { background-color:" + shading + "; }</style>"); /* jQuery .css() function cannot be used on ::after selectors */
	$("#board #player #neck").css( "border-bottom-color", base );
	$("head").append("<style>#board #player #neck::after { border-top-color:" + shading + "; }</style>"); /* jQuery .css() function cannot be used on ::after selectors */
	$("#board #player #shade").css( "border-bottom-color", shading );
	$("head").append("<style>#board #player #shade::after { background-color:" + shading + "; }</style>"); /* jQuery .css() function cannot be used on ::after selectors */
	$("#board #player #topbase").css({ "background-color": base, "box-shadow": "inset -5px -13px 0 4px " + shading });
	$("#board #player #bottombase").css({ "background-color": base, "box-shadow": "inset -10px -10px 0 10px " + shading });
	
	document.getElementById("colorprompt").style.opacity = "1";
	
	document.getElementById("colortype").innerHTML = colorname.toUpperCase();
}
function pawncolor() {
	$("#choose").animate( {
		left: "-100%"
	}, {
		duration: 1000, /* 1 second */
		easing: "swing"
	});
	setTimeout(function() {
		newgame();
	}, 750); /* 0.75 second delay */
}

/* Start a new game */
function newgame() {
	gamescreen = true;
	
	document.getElementById("game").style.display = "block";

	$("#board").animate( {
		top: "-1600px"
	}, {
		duration: 1000, /* 1 second */
		easing: "swing",
		complete: function() {
			document.getElementById("titlescreen").style.display = "none";
			
			setTimeout(function() {
				move(playerorder[currentuser]);
			}, 750); /* 0.75 second delay */
		}
	});
}
