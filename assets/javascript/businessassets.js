/* Asset information and conditionals that can be used for either single player or multiplayer */


/* All assets (no grouping systems) */
var assets = {
	/* Red Spaces */
	position02: {
		name: "Lower Priced Product",
		card: "p02",
		owner: "unowned",
		price: 60,
		upgrade: 50, /* Price per upgrade */
		rent: {
			current: "base",
			base: 4,
			/* Numbered by number of upgrades */
			one: 20,
			two: 60,
			three: 180,
			four: 320,
			five: 450
		}
	},
	position03: {
		name: "Give-Aways",
		card: "p03",
		owner: "unowned",
		price: 60,
		upgrade: 50, /* Price per upgrade */
		rent: {
			current: "base",
			base: 2,
			/* Numbered by number of upgrades */
			one: 10,
			two: 30,
			three: 90,
			four: 160,
			five: 250
		}
	},
	position04: {
		name: "Coupons",
		card: "p04",
		owner: "unowned",
		price: 60,
		upgrade: 50, /* Price per upgrade */
		rent: {
			current: "base",
			base: 2,
			/* Numbered by number of upgrades */
			one: 10,
			two: 30,
			three: 90,
			four: 160,
			five: 250
		}
	},
	/* Orange Spaces */
	position06: {
		name: "Website",
		card: "p06",
		owner: "unowned",
		price: 100,
		upgrade: 50, /* Price per upgrade */
		rent: {
			current: "base",
			base: 6,
			/* Numbered by number of upgrades */
			one: 30,
			two: 90,
			three: 270,
			four: 400,
			five: 550
		}
	},
	position07: {
		name: "Social Media",
		card: "p07",
		owner: "unowned",
		price: 100,
		upgrade: 50, /* Price per upgrade */
		rent: {
			current: "base",
			base: 6,
			/* Numbered by number of upgrades */
			one: 30,
			two: 90,
			three: 270,
			four: 400,
			five: 550
		}
	},
	position08: {
		name: "Online Database",
		card: "p08",
		owner: "unowned",
		price: 120,
		upgrade: 50, /* Price per upgrade */
		rent: {
			current: "base",
			base: 8,
			/* Numbered by number of upgrades */
			one: 40,
			two: 100,
			three: 300,
			four: 450,
			five: 600
		}
	},
	/* Yellow Spaces */
	position10: {
		name: "Full-Time Employees",
		card: "p10",
		owner: "unowned",
		price: 160,
		upgrade: 100, /* Price per upgrade */
		rent: {
			current: "base",
			base: 12,
			/* Numbered by number of upgrades */
			one: 60,
			two: 180,
			three: 500,
			four: 700,
			five: 900
		}
	},
	position12: {
		name: "Part-Time Employees",
		card: "p12",
		owner: "unowned",
		price: 140,
		upgrade: 100, /* Price per upgrade */
		rent: {
			current: "base",
			base: 10,
			/* Numbered by number of upgrades */
			one: 50,
			two: 150,
			three: 450,
			four: 625,
			five: 750
		}
	},
	/* Lime Spaces */
	position14: {
		name: "Chicago Office",
		card: "p14",
		owner: "unowned",
		price: 180,
		upgrade: 100, /* Price per upgrade */
		rent: {
			current: "base",
			base: 14,
			/* Numbered by number of upgrades */
			one: 70,
			two: 200,
			three: 550,
			four: 750,
			five: 950
		}
	},
	position15: {
		name: "Silicon Valley Office",
		card: "p15",
		owner: "unowned",
		price: 180,
		upgrade: 100, /* Price per upgrade */
		rent: {
			current: "base",
			base: 14,
			/* Numbered by number of upgrades */
			one: 70,
			two: 200,
			three: 550,
			four: 750,
			five: 950
		}
	},
	position16:{
		name: "New York City Office",
		card: "p16",
		owner: "unowned",
		price: 200,
		upgrade: 100, /* Price per upgrade */
		rent: {
			current: "base",
			base: 16,
			/* Numbered by number of upgrades */
			one: 80,
			two: 220,
			three: 600,
			four: 800,
			five: 1000
		}
	},
	/* Green Spaces */
	position18: {
		name: "European Plant",
		card: "p18",
		owner: "unowned",
		price: 240,
		upgrade: 150, /* Price per upgrade */
		rent: {
			current: "base",
			base: 20,
			/* Numbered by number of upgrades */
			one: 100,
			two: 300,
			three: 750,
			four: 925,
			five: 1100
		}
	},
	position19: {
		name: "American Plant",
		card: "p19",
		owner: "unowned",
		price: 220,
		upgrade: 150, /* Price per upgrade */
		rent: {
			current: "base",
			base: 18,
			/* Numbered by number of upgrades */
			one: 90,
			two: 250,
			three: 700,
			four: 875,
			five: 1050
		}
	},
	position20: {
		name: "Asian Plant",
		card: "p20",
		owner: "unowned",
		price: 220,
		upgrade: 150, /* Price per upgrade */
		rent: {
			current: "base",
			base: 18,
			/* Numbered by number of upgrades */
			one: 90,
			two: 250,
			three: 700,
			four: 875,
			five: 1050
		}
	},
	/* Turquoise Spaces */
	position22: {
		name: "Workers' Compensation",
		card: "p22",
		owner: "unowned",
		price: 260,
		upgrade: 150, /* Price per upgrade */
		rent: {
			current: "base",
			base: 22,
			/* Numbered by number of upgrades */
			one: 110,
			two: 330,
			three: 800,
			four: 975,
			five: 1150
		}
	},
	position23: {
		name: "Product Liability Insurance",
		card: "p23",
		owner: "unowned",
		price: 260,
		upgrade: 150, /* Price per upgrade */
		rent: {
			current: "base",
			base: 22,
			/* Numbered by number of upgrades */
			one: 110,
			two: 330,
			three: 800,
			four: 975,
			five: 1150
		}
	},
	position24: {
		name: "Business Interruption Insurance",
		card: "p24",
		owner: "unowned",
		price: 280,
		upgrade: 150, /* Price per upgrade */
		rent: {
			current: "base",
			base: 24,
			/* Numbered by number of upgrades */
			one: 120,
			two: 360,
			three: 850,
			four: 1025,
			five: 1200
		}
	},
	/* Blue Spaces */
	position26: {
		name: "Venture Capitalists",
		card: "p26",
		owner: "unowned",
		price: 320,
		upgrade: 200, /* Price per upgrade */
		rent: {
			current: "base",
			base: 28,
			/* Numbered by number of upgrades */
			one: 150,
			two: 450,
			three: 1000,
			four: 1200,
			five: 1400
		}
	},
	position27: {
		name: "Angel Investors",
		card: "p27",
		owner: "unowned",
		price: 300,
		upgrade: 200, /* Price per upgrade */
		rent: {
			current: "base",
			base: 26,
			/* Numbered by number of upgrades */
			one: 130,
			two: 390,
			three: 900,
			four: 1100,
			five: 1275
		}
	},
	position28: {
		name: "Personal Investors",
		card: "p28",
		owner: "unowned",
		price: 300,
		upgrade: 200, /* Price per upgrade */
		rent: {
			current: "base",
			base: 26,
			/* Numbered by number of upgrades */
			one: 130,
			two: 390,
			three: 900,
			four: 1100,
			five: 1275
		}
	},
	/* Violet Spaces */
	position30: {
		name: "Sell Online",
		card: "p30",
		owner: "unowned",
		price: 350,
		upgrade: 200, /* Price per upgrade */
		rent: {
			current: "base",
			base: 35,
			/* Numbered by number of upgrades */
			one: 175,
			two: 500,
			three: 1100,
			four: 1300,
			five: 1500
		}
	},
	position32: {
		name: "Sell in Retail Stores",
		card: "p32",
		owner: "unowned",
		price: 400,
		upgrade: 200, /* Price per upgrade */
		rent: {
			current: "base",
			base: 50,
			/* Numbered by number of upgrades */
			one: 200,
			two: 600,
			three: 1400,
			four: 1700,
			five: 2000
		}
	},
	/* Advertising Spaces */
	position05: {
		name: "Online Ads",
		card: "p05",
		owner: "unowned",
		price: 200,
		rent: {
			current: "one",
			/* Numbered by how many ad spaces are owned */
			one: 25,
			two: 50,
			three: 100,
			four: 200
		}
	},
	position13: {
		name: "Email Newsletter",
		card: "p13",
		owner: "unowned",
		price: 200,
		rent: {
			current: "one",
			/* Numbered by how many ad spaces are owned */
			one: 25,
			two: 50,
			three: 100,
			four: 200
		}
	},
	position21: {
		name: "Television Commercials",
		card: "p21",
		owner: "unowned",
		price: 200,
		rent: {
			current: "one",
			/* Numbered by how many ad spaces are owned */
			one: 25,
			two: 50,
			three: 100,
			four: 200
		}
	},
	position29: {
		name: "Billboard Ads",
		card: "p29",
		owner: "unowned",
		price: 200,
		rent: {
			current: "one",
			/* Numbered by how many ad spaces are owned */
			one: 25,
			two: 50,
			three: 100,
			four: 200
		}
	}
};

/* Assets, as grouped by color */
var redassets = [assets.position02, assets.position03, assets.position04];
var orangeassets = [assets.position06, assets.position07, assets.position08];
var yellowassets = [assets.position10, assets.position12];
var limeassets = [assets.position14, assets.position15, assets.position16];
var greenassets = [assets.position18, assets.position19, assets.position20];
var turquoiseassets = [assets.position22, assets.position23, assets.position24];
var blueassets = [assets.position26, assets.position27, assets.position28];
var violetassets = [assets.position30, assets.position32];
var advertisingassets = [assets.position05, assets.position13, assets.position21, assets.position29];

/* Positions */
var gameboardarray = ["GO", assets.position02, assets.position03, assets.position04, assets.position05, assets.position06, assets.position07, assets.position08, "JAIL/Just Visiting", assets.position10, "Grant", assets.position12, assets.position13, assets.position14, assets.position15, assets.position16, "Holiday", assets.position18, assets.position19, assets.position20, assets.position21, assets.position22, assets.position23, assets.position24, "Go to JAIL", assets.position26, assets.position27, assets.position28, assets.position29, assets.position30, "Grant", assets.position32];
var arrayposition;
var currentspace;
var viewboard = [[-1600, 100], [-1600, 100], [-1600, 100], [-1600, -200], [-1600, -400], [-1600, -600], [-1600, -600], [-1600, -600], [-1600, -900], [-1200, -900], [-1200, -900], [-1000, -900], [-900, -900], [-700, -900], [-300, -900], [0, -900], [100, -900], [100, -600], [100, -600], [100, -600], [100, -400], [100, -200], [100, 100], [100, 100], [100, 100], [0, 100], [-300, 100], [-700, 100], [-1000, 100], [-1000, 100], [-1200, 100], [-1200, 100]]; /* What portion of the board you see (x is top and y is right) */
var pieceplacement = { /* (x is top and y is left) */
	pos01: {
		alone: [1900, 1950], /* Placement if alone on the space */
		/* Placement of individual pieces when sharing a space */
		one: [2000, 1800],
		two: [1780, 2050],
		three: [1780, 1800],
		four: [2000, 2050],
		five: [2000, 1925],
		six: [1780, 1925]
	},
	pos02: {
		alone: [1900, 1625], /* Placement if alone on the space */
		/* Placement of individual pieces when sharing a space */
		one: [2000, 1625],
		two: [1750, 1625],
		three: [1950, 1625],
		four: [1800, 1625],
		five: [1900, 1625],
		six: [1850, 1625]
	},
	pos03: {
		alone: [1900, 1425], /* Placement if alone on the space */
		/* Placement of individual pieces when sharing a space */
		one: [2000, 1425],
		two: [1750, 1425],
		three: [1950, 1425],
		four: [1800, 1425],
		five: [1900, 1425],
		six: [1850, 1425]
	},
	pos04: {
		alone: [1900, 1225], /* Placement if alone on the space */
		/* Placement of individual pieces when sharing a space */
		one: [2000, 1225],
		two: [1750, 1225],
		three: [1950, 1225],
		four: [1800, 1225],
		five: [1900, 1225],
		six: [1850, 1225]
	},
	pos05: {
		alone: [1900, 1000], /* Placement if alone on the space */
		/* Placement of individual pieces when sharing a space */
		one: [2000, 1000],
		two: [1750, 1000],
		three: [1950, 1000],
		four: [1800, 1000],
		five: [1900, 1000],
		six: [1850, 1000]
	},
	pos06: {
		alone: [1900, 825], /* Placement if alone on the space */
		/* Placement of individual pieces when sharing a space */
		one: [2000, 825],
		two: [1750, 825],
		three: [1950, 825],
		four: [1800, 825],
		five: [1900, 825],
		six: [1850, 825]
	},
	pos07: {
		alone: [1900, 625], /* Placement if alone on the space */
		/* Placement of individual pieces when sharing a space */
		one: [2000, 625],
		two: [1750, 625],
		three: [1950, 625],
		four: [1800, 625],
		five: [1900, 625],
		six: [1850, 625]
	},
	pos08: {
		alone: [1900, 425], /* Placement if alone on the space */
		/* Placement of individual pieces when sharing a space */
		one: [2000, 425],
		two: [1750, 425],
		three: [1950, 425],
		four: [1800, 425],
		five: [1900, 425],
		six: [1850, 425]
	},
	pos09: {
		visiting: { /* Placement if visiting the jail */
			alone: [1975, 100], /* Placement if alone on the space */
			/* Placement of individual pieces when sharing a space */
			one: [1975, 165],
			two: [1825, -25],
			three: [1975, 240],
			four: [1750, -25],
			five: [1975, 75],
			six: [1900, -25]
		},
		jail: { /* Placement if in the jail */
			alone: [1825, 175], /* Placement if alone on the space */
			/* Placement of individual pieces when sharing a space */
			one: [1900, 85],
			two: [1750, 265],
			three: [1900, 265],
			four: [1750, 85],
			five: [1900, 175],
			six: [1750, 175]
		}
	},
	pos10: {
		alone: [1575, 100], /* Placement if alone on the space */
		/* Placement of individual pieces when sharing a space */
		one: [1575, -25],
		two: [1575, 225],
		three: [1575, 25],
		four: [1575, 175],
		five: [1575, 75],
		six: [1575, 125]
	},
	pos11: {
		alone: [1375, 100], /* Placement if alone on the space */
		/* Placement of individual pieces when sharing a space */
		one: [1375, -25],
		two: [1375, 225],
		three: [1375, 25],
		four: [1375, 175],
		five: [1375, 75],
		six: [1375, 125]
	},
	pos12: {
		alone: [1175, 100], /* Placement if alone on the space */
		/* Placement of individual pieces when sharing a space */
		one: [1175, -25],
		two: [1175, 225],
		three: [1175, 25],
		four: [1175, 175],
		five: [1175, 75],
		six: [1175, 125]
	},
	pos13: {
		alone: [975, 100], /* Placement if alone on the space */
		/* Placement of individual pieces when sharing a space */
		one: [975, -25],
		two: [975, 225],
		three: [975, 25],
		four: [975, 175],
		five: [975, 75],
		six: [975, 125]
	},
	pos14: {
		alone: [775, 100], /* Placement if alone on the space */
		/* Placement of individual pieces when sharing a space */
		one: [775, -25],
		two: [775, 225],
		three: [775, 25],
		four: [775, 175],
		five: [775, 75],
		six: [775, 125]
	},
	pos15: {
		alone: [575, 100], /* Placement if alone on the space */
		/* Placement of individual pieces when sharing a space */
		one: [575, -25],
		two: [575, 225],
		three: [575, 25],
		four: [575, 175],
		five: [575, 75],
		six: [575, 125]
	},
	pos16: {
		alone: [375, 100], /* Placement if alone on the space */
		/* Placement of individual pieces when sharing a space */
		one: [375, -25],
		two: [375, 225],
		three: [375, 25],
		four: [375, 175],
		five: [375, 75],
		six: [375, 125]
	},
	pos17: {
		alone: [50, 100], /* Placement if alone on the space */
		/* Placement of individual pieces when sharing a space */
		one: [0, 0],
		two: [180, 250],
		three: [180, 0],
		four: [0, 250],
		five: [0, 125],
		six: [180, 125]
	},
	pos18: {
		alone: [50, 425], /* Placement if alone on the space */
		/* Placement of individual pieces when sharing a space */
		one: [-25, 425],
		two: [150, 425],
		three: [10, 425],
		four: [115, 425],
		five: [45, 425],
		six: [80, 425]
	},
	pos19: {
		alone: [50, 625], /* Placement if alone on the space */
		/* Placement of individual pieces when sharing a space */
		one: [-25, 625],
		two: [150, 625],
		three: [10, 625],
		four: [115, 625],
		five: [45, 625],
		six: [80, 625]
	},
	pos20: {
		alone: [50, 825], /* Placement if alone on the space */
		/* Placement of individual pieces when sharing a space */
		one: [-25, 825],
		two: [150, 825],
		three: [10, 825],
		four: [115, 825],
		five: [45, 825],
		six: [80, 825]
	},
	pos21: {
		alone: [50, 1000], /* Placement if alone on the space */
		/* Placement of individual pieces when sharing a space */
		one: [-25, 1000],
		two: [150, 1000],
		three: [10, 1000],
		four: [115, 1000],
		five: [45, 1000],
		six: [80, 1000]
	},
	pos22: {
		alone: [50, 1225], /* Placement if alone on the space */
		/* Placement of individual pieces when sharing a space */
		one: [-25, 1225],
		two: [150, 1225],
		three: [10, 1225],
		four: [115, 1225],
		five: [45, 1225],
		six: [80, 1225]
	},
	pos23: {
		alone: [50, 1425], /* Placement if alone on the space */
		/* Placement of individual pieces when sharing a space */
		one: [-25, 1425],
		two: [150, 1425],
		three: [10, 1425],
		four: [115, 1425],
		five: [45, 1425],
		six: [80, 1425]
	},
	pos24: {
		alone: [50, 1625], /* Placement if alone on the space */
		/* Placement of individual pieces when sharing a space */
		one: [-25, 1625],
		two: [150, 1625],
		three: [10, 1625],
		four: [115, 1625],
		five: [45, 1625],
		six: [80, 1625]
	},
	pos25: {
		alone: [50, 1950], /* Placement if alone on the space */
		/* There are no placement of individual pieces when sharing a space here since players o not stay on this space for long */
	},
	pos26: {
		alone: [375, 1950], /* Placement if alone on the space */
		/* Placement of individual pieces when sharing a space */
		one: [375, 2060],
		two: [375, 1810],
		three: [375, 2010],
		four: [375, 1860],
		five: [375, 1960],
		six: [375, 1910]
	},
	pos27: {
		alone: [575, 1950], /* Placement if alone on the space */
		/* Placement of individual pieces when sharing a space */
		one: [575, 2060],
		two: [575, 1810],
		three: [575, 2010],
		four: [575, 1860],
		five: [575, 1960],
		six: [575, 1910]
	},
	pos28: {
		alone: [775, 1950], /* Placement if alone on the space */
		/* Placement of individual pieces when sharing a space */
		one: [775, 2060],
		two: [775, 1810],
		three: [775, 2010],
		four: [775, 1860],
		five: [775, 1960],
		six: [775, 1910]
	},
	pos29: {
		alone: [975, 1950], /* Placement if alone on the space */
		/* Placement of individual pieces when sharing a space */
		one: [975, 2060],
		two: [975, 1810],
		three: [975, 2010],
		four: [975, 1860],
		five: [975, 1960],
		six: [975, 1910]
	},
	pos30: {
		alone: [1175, 1950], /* Placement if alone on the space */
		/* Placement of individual pieces when sharing a space */
		one: [1175, 2060],
		two: [1175, 1810],
		three: [1175, 2010],
		four: [1175, 1860],
		five: [1175, 1960],
		six: [1175, 1910]
	},
	pos31: {
		alone: [1375, 1950], /* Placement if alone on the space */
		/* Placement of individual pieces when sharing a space */
		one: [1375, 2060],
		two: [1375, 1810],
		three: [1375, 2010],
		four: [1375, 1860],
		five: [1375, 1960],
		six: [1375, 1910]
	},
	pos32: {
		alone: [1575, 1950], /* Placement if alone on the space */
		/* Placement of individual pieces when sharing a space */
		one: [1575, 2060],
		two: [1575, 1810],
		three: [1575, 2010],
		four: [1575, 1860],
		five: [1575, 1960],
		six: [1575, 1910]
	}
};
var piecepos = [pieceplacement.pos01, pieceplacement.pos02, pieceplacement.pos03, pieceplacement.pos04, pieceplacement.pos05, pieceplacement.pos06, pieceplacement.pos07, pieceplacement.pos08, pieceplacement.pos09, pieceplacement.pos10, pieceplacement.pos11, pieceplacement.pos12, pieceplacement.pos13, pieceplacement.pos14, pieceplacement.pos15, pieceplacement.pos16, pieceplacement.pos17, pieceplacement.pos18, pieceplacement.pos19, pieceplacement.pos20, pieceplacement.pos21, pieceplacement.pos22, pieceplacement.pos23, pieceplacement.pos24, pieceplacement.pos25, pieceplacement.pos26, pieceplacement.pos27, pieceplacement.pos28, pieceplacement.pos29, pieceplacement.pos30, pieceplacement.pos31, pieceplacement.pos32]; /* Where the pieces are placed on the board */

var colornum;
var buyingspace;
var currentlybuying;
var currentcolor;

/* Dice */
var die1;
var die2;
var movethis;
var numofdoubles = 0;

var sessionnum = 1; /* This will increase after everyone has taken a turn */



/* Start the current player's turn */
function nextturn(player) {
	/* Reset the number of doubles rolled */
	numofdoubles = 0;
	
	/* Make the current player land on top of any other players */
	document.getElementById(playerorder[currentuser].id).style.zIndex = "11";
	
	/* Update the identifier bar on question cards to match the current player's pawn color */
	document.getElementById("identifierbar").style.backgroundColor = player.color;
	
	/* Update displayed money to match the current player's money value */
	document.getElementById("money-count1").innerHTML = player.money.toLocaleString('en');
	document.getElementById("money-count2").innerHTML = player.money.toLocaleString('en');
	
	/* Display the current player's assets and hide the last player's assets in the playerspace */
	player.assets.owned.forEach(function(item) { document.getElementById(item.card).style.display = "inline-block"; });
	player.advertising.owned.forEach(function(item) { document.getElementById(item.card).style.display = "inline-block"; });
	
	/* Check how many and which advertising spaces the player owns to increase the price of rent */
	if (player.advertising.num == 0) {
		/* Set the new rents on the ad cards in the event that the player has the opportunity to buy another ad */
		document.getElementById("rent05").innerHTML = assets.position05.rent.one;
		document.getElementById("rent13").innerHTML = assets.position13.rent.one;
		document.getElementById("rent21").innerHTML = assets.position21.rent.one;
		document.getElementById("rent29").innerHTML = assets.position29.rent.one;
	} else if (player.advertising.num == 1) {
		/* Set the new rents on the ad cards in the event that the player has the opportunity to buy another ad */
		document.getElementById("rentm05").innerHTML = assets.position05.rent.one;
		document.getElementById("rentm13").innerHTML = assets.position13.rent.one;
		document.getElementById("rentm21").innerHTML = assets.position21.rent.one;
		document.getElementById("rentm29").innerHTML = assets.position29.rent.one;
		
		document.getElementById("rent05").innerHTML = assets.position05.rent.two;
		document.getElementById("rent13").innerHTML = assets.position13.rent.two;
		document.getElementById("rent21").innerHTML = assets.position21.rent.two;
		document.getElementById("rent29").innerHTML = assets.position29.rent.two;
	} else if (player.advertising.num == 2) {
		/* Set the new rents on the ad cards in the event that the player has the opportunity to buy another ad */
		document.getElementById("rentm05").innerHTML = assets.position05.rent.two;
		document.getElementById("rentm13").innerHTML = assets.position13.rent.two;
		document.getElementById("rentm21").innerHTML = assets.position21.rent.two;
		document.getElementById("rentm29").innerHTML = assets.position29.rent.two;

		document.getElementById("rent05").innerHTML = assets.position05.rent.three;
		document.getElementById("rent13").innerHTML = assets.position13.rent.three;
		document.getElementById("rent21").innerHTML = assets.position21.rent.three;
		document.getElementById("rent29").innerHTML = assets.position29.rent.three;
	} else if (player.advertising.num == 3) {
		/* Set the new rents on the ad cards in the event that the player has the opportunity to buy another ad */
		document.getElementById("rentm05").innerHTML = assets.position05.rent.three;
		document.getElementById("rentm13").innerHTML = assets.position13.rent.three;
		document.getElementById("rentm21").innerHTML = assets.position21.rent.three;
		document.getElementById("rentm29").innerHTML = assets.position29.rent.three;

		document.getElementById("rent05").innerHTML = assets.position05.rent.four;
		document.getElementById("rent13").innerHTML = assets.position13.rent.four;
		document.getElementById("rent21").innerHTML = assets.position21.rent.four;
		document.getElementById("rent29").innerHTML = assets.position29.rent.four;
	} else if (player.advertising.num == 4) {
		/* Set the new rents on the ad cards */
		document.getElementById("rentm05").innerHTML = assets.position05.rent.four;
		document.getElementById("rentm13").innerHTML = assets.position13.rent.four;
		document.getElementById("rentm21").innerHTML = assets.position21.rent.four;
		document.getElementById("rentm29").innerHTML = assets.position29.rent.four;
	}
	
	/* Update any displayed names to match the current player's name */
	if (player.nickname == "") {
		if (version == "multiplayer") {
			document.getElementById("user").innerHTML = player.call + "'s";
			document.getElementById("playerheader").innerHTML = player.call;
		} else if (version == "singleplayer") {
			document.getElementById("user").innerHTML = player.call + "r";
		}
	} else {
		document.getElementById("user").innerHTML = player.nickname + "'s<br>(" + player.call + ")";
		document.getElementById("playerheader").innerHTML = player.nickname + " (" + player.call + ")";
	}
	
	/* Check what session it currently is */
	if (sessionnum == 1) {
		document.getElementById("turnidentifier").style.display = "block";
		
		setTimeout(function() {
			document.getElementById("turnidentifier").style.display = "none";
			
			if (version == "multiplayer") {
				document.getElementById("playerheading").style.top = "0";
			}
			
			seeboard(player);
			
			setTimeout(function() {
				move(player);
			}, 1500); /* 1.5 second delay */
		}, 1500); /* 1.5 second delay */
	} else {
		showplayerspace();
	}
}

/* Current player clicked the dice in the playerspace to roll the dice (thus actually starting the turn) */
function resettomove() {
	$("#playerspace").animate( {
		bottom: "-100%"
	}, {
		duration: 1000, /* 1 second */
		easing: "linear"
	});
	setTimeout(function() {
		$("#board").animate( {
			top: "-1600px"
		}, {
			duration: 1000, /* 1 second */
			easing: "linear",
			complete: function() {
				seeboard(playerorder[currentuser]);
				
				document.getElementById("startingdice").style.top = "-200px";
				
				if (playerorder[currentuser].position.jail.currentlyin == false) {
					move(playerorder[currentuser]);
				} else {
					jail(playerorder[currentuser]);
				}
			}
		});
	}, 150); /* 0.15 second delay */
}

/* Current player rolls the dice and move the appropriate spaces */
function move(player) {
	rolldice();
	
	if (die1 == die2) {
		numofdoubles++;
		
		if (numofdoubles == 3) {
			player.position.jail.currentlyin = true;
			player.position.num = 9;
			
			numofdoubles = 0;
		} else {
			movethis = die1 + die2;
			player.position.num += movethis;
		}
	} else {
		numofdoubles = 0;
		
		movethis = die1 + die2;
		player.position.num += movethis;
	}
	
	setTimeout(function() {
		/* Check if the player has reached or passed GO */
		if (player.position.num > 32 ) {
			player.position.num -= 32;
			
			/* Reward them for reaching/passing GO */
			passGO(player);
		}
		
		seeboard(player);
		
		/* Find the rent and owner of the current space */
		if (player.position.num == 1 || player.position.num == 9 || player.position.num == 17 || player.position.num == 25) {
			/* These corner spaces cannot be rented out, so this is a free space (the player does not answer a question on this space) */
			player.position.rent = 0;
			
			player.position.owner = "corner space";
		} else if (player.position.num == 11 || player.position.num == 31) {
			/* Grant space */
			grants(player);
			player.position.owner = "grant";
		} else {
			setrent(currentspace, player);
			setowner(currentspace, player);
		}
		
		setTimeout(function() {
			nextstep(player);
		}, 1500); /* 1.5 second delay */
	}, 2000); /* 2 second delay */
}

/* Current player reached/passed GO */
function passGO(player) {
	if (currentdiff == "easy") {
		player.money += 400;
	} else if (currentdiff == "medium") {
		player.money += 200;
	} else if (currentdiff == "hard") {
		player.money += 100;
	}
	
	document.getElementById("money-count1").innerHTML = player.money.toLocaleString('en');
	document.getElementById("money-count2").innerHTML = player.money.toLocaleString('en');
}

/* Current player is in JAIL */
function jail(player) {
	document.getElementById("getout").style.top = "20%";
	
	document.getElementById("pay").onclick = function() {
		moneysubtraction(player, 50);
		
		player.position.jail.currentlyin = false;
		player.position.jail.turns = 0;
		
		document.getElementById(player.id).style.top = "1975px";
		document.getElementById(player.id).style.left = "100px";
		
		document.getElementById("getout").style.top = "-100%";
			
		setTimeout(function() {
			changingturns();
		}, 825); /* 0.825 second delay */
	};
	
	document.getElementById("roll").onclick = function() {
		document.getElementById("getout").style.top = "-100%";
		
		setTimeout(function() {
			rolldice();
			
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
					easing: "swing",
					complete: function() {
						if (die1 == die2) {
							player.position.jail.currentlyin = false;
							player.position.jail.turns = 0;
				
							document.getElementById(player.id).style.top = "1975px";
							document.getElementById(player.id).style.left = "100px";
							
							setTimeout(function() {
								changingturns();
							}, 500); /* 0.5 second delay */
						} else {
							player.position.jail.turns++;
				
							if (player.position.jail.turns == 3) {
								moneysubtraction(player, 50);
								
								document.getElementById("gain-loss").innerHTML = "&minus;";
								document.getElementById("earning-count").innerHTML = "50";
								
								$("#earnings").animate( {
									top: "50px"
								}, {
									duration: 750, /* 0.75 seconds */
									easing: "linear",
									complete: function() {
										$("#earnings #hiding #earningspaper").animate( {
											top: "0px"
										}, {
											duration: 750, /* 0.75 seconds */
											easing: "linear"
										});
									}
								});
								setTimeout(function() {
									$("#earnings #hiding #earningspaper").animate( {
										top: "-200px"
									}, {
										duration: 750, /* 0.75 seconds */
										easing: "linear",
										complete: function() {
											$("#earnings").animate( {
												top: "-500px"
											}, {
												duration: 750, /* 0.75 seconds */
												easing: "linear",
												complete: function() {
													player.position.jail.currentlyin = false;
													player.position.jail.turnsinjail = 0;
									
													document.getElementById(player.id).style.top = "1975px";
													document.getElementById(player.id).style.left = "100px";
													
													setTimeout(function() {
														changingturns();
													}, 500); /* 0.5 second delay */
												}
											});
										}
									});
								}, 3000); /* 1.5 second delay after 1.5 second animation */
							} else {
								changingturns();
							}
						}
					}
				});
			}, 2750); /* 2.75 second delay */
		}, 500); /* 0.5 second delay */
	};
}

/* Set current rent for the current player */
function setrent(assetnumber, player) {
	if (assetnumber.rent.current == "base") {
		player.position.rent = assetnumber.rent.base;
	} else if (assetnumber.rent.current == "one") {
		player.position.rent = assetnumber.rent.one;
	} else if (assetnumber.rent.current == "two") {
		player.position.rent = assetnumber.rent.two;
	} else if (assetnumber.rent.current == "three") {
		player.position.rent = assetnumber.rent.three;
	} else if (assetnumber.rent.current == "four") {
		player.position.rent = assetnumber.rent.four;
	} else if (assetnumber.rent.current == "five") {
		player.position.rent = assetnumber.rent.five;
	}
}

/* Set current position owner for the current player */
function setowner(assetnumber, player) {
	player.position.owner = assetnumber.owner;
	
	if (player.position.owner == player.call) {
		document.getElementById("ownername").innerHTML = "You";
		document.getElementById("grammer").style.display = "none";
	} else {
		document.getElementById("ownername").innerHTML = player.position.owner;
		document.getElementById("grammer").style.display = "inline-block";
	}
}

/* Randomly generate how much money is gained at the grant spaces */
function grants(player) {
	/* Max 2000, Min 100; Inclusive */
	player.position.rent = Math.floor(Math.random() * (2000 - 100 + 1) ) + 100;
}

/* Prompt the current player to buy an asset or grant */
function prompt(card) {
	document.getElementById(card).style.display = "block";
	
	$("#tobuy").animate( {
		top: "0"
	}, {
		duration: 1000, /* 1 second */
		easing: "linear"
	});
}

/* Current player buys an asset */
function buy(assetnumber, card, oldrent, newrent, onboard) {
	/* Decide which name to put as the owner */
	assetnumber.owner = playerorder[currentuser].call;
	
	/* Add this asset to the player's asset inventory */
	playerorder[currentuser].assets.num++;
	playerorder[currentuser].assets.owned.push(assetnumber);
	
	document.getElementById(oldrent).innerHTML = assetnumber.rent.base;
	document.getElementById(newrent).innerHTML = assetnumber.rent.one;
	
	var x = document.getElementById(onboard);
	x.querySelector("#base").style.backgroundColor = playerorder[currentuser].color;
	x.querySelector("#u1").style.backgroundColor = playerorder[currentuser].color;
	x.querySelector("#u2").style.backgroundColor = playerorder[currentuser].color;
	x.querySelector("#u3").style.backgroundColor = playerorder[currentuser].color;
	x.querySelector("#u4").style.backgroundColor = playerorder[currentuser].color;
	x.querySelector("#u5").style.backgroundColor = playerorder[currentuser].color;
	x.querySelector("#base").style.display = "inline-block";
	x.title = assetnumber.name + ": Owned by " + playerorder[currentuser].call;
	
	/* Checking if a certain asset is in a certain color group */
	colorchecking(assetnumber);
	setcolor();
	
	/* Check for any monopolies to activate upgrades */
	var same = currentarraycolor.every(monopolies);
	if (same == true) { /* Do not need to check for ownership since the player already owns one of the assets in that color group */
		currentarraycolor.forEach(addingupgrade);
	}

	/* Pay for asset */
	moneysubtraction(playerorder[currentuser], assetnumber.price);
	
	/* Update displayed money to match the current player's money value */
	document.getElementById("money-count1").innerHTML = playerorder[currentuser].money.toLocaleString('en');
	document.getElementById("money-count2").innerHTML = playerorder[currentuser].money.toLocaleString('en');
	
	setTimeout(function() {
		$("#earnings").animate( {
			top: "-500px"
		}, {
			duration: 750, /* 0.75 seconds */
			easing: "linear"
		});
		
		$("#tobuy").animate( {
			top: "-100%"
		}, {
			duration: 1000, /* 1 second */
			easing: "linear",
			complete: function() {
				document.getElementById(card).style.display = "none";
				
				setTimeout(function() {
					whoisnext();
				}, 825); /* 0.825 second delay */
			}
		});
	}, 250); /* 0.25 second delay */
}
function buy_ad(assetnumber, card, onboard) {
	/* Decide which name to put as the owner */
	assetnumber.owner = playerorder[currentuser].call;
	
	/* Add this asset to the player's asset inventory */
	playerorder[currentuser].advertising.num++;
	playerorder[currentuser].advertising.owned.push(assetnumber);
	
	var x = document.getElementById(onboard);
	x.querySelector("#base").style.backgroundColor = playerorder[currentuser].color;
	x.querySelector("#base").style.display = "inline-block";
	x.title = assetnumber.name + ": Owned by " + playerorder[currentuser].call;

	/* Pay for asset */
	moneysubtraction(playerorder[currentuser], assetnumber.price);
	
	/* Update displayed money to match the current player's money value */
	document.getElementById("money-count1").innerHTML = playerorder[currentuser].money.toLocaleString('en');
	document.getElementById("money-count2").innerHTML = playerorder[currentuser].money.toLocaleString('en');
	
	setTimeout(function() {
		$("#earnings").animate( {
			top: "-500px"
		}, {
			duration: 750, /* 0.75 seconds */
			easing: "linear"
		});
		
		$("#tobuy").animate( {
			top: "-100%"
		}, {
			duration: 1000, /* 1 second */
			easing: "linear",
			complete: function() {
				document.getElementById(card).style.display = "none";
				
				/* Check how many and which advertising spaces the player owns to increase the price of rent */
				if (playerorder[currentuser].advertising.num == 1) {
					/* Cards must be changed to account for the possibility of rolling mutliple times and landing on another ad space */
					document.getElementById("rent05").innerHTML = assets.position05.rent.two;
					document.getElementById("rent13").innerHTML = assets.position13.rent.two;
					document.getElementById("rent21").innerHTML = assets.position21.rent.two;
					document.getElementById("rent29").innerHTML = assets.position29.rent.two;
				} else if (playerorder[currentuser].advertising.num == 2) {
					playerorder[currentuser].advertising.owned.forEach(function(asset) {
						asset.rent.current = "two";
					});
					
					/* Cards must be changed to account for the possibility of rolling mutliple times and landing on another ad space */
					document.getElementById("rent05").innerHTML = assets.position05.rent.three;
					document.getElementById("rent13").innerHTML = assets.position13.rent.three;
					document.getElementById("rent21").innerHTML = assets.position21.rent.three;
					document.getElementById("rent29").innerHTML = assets.position29.rent.three;
				} else if (playerorder[currentuser].advertising.num == 3) {
					playerorder[currentuser].advertising.owned.forEach(function(asset) {
						asset.rent.current = "three";
					});
					
					/* Cards must be changed to account for the possibility of rolling mutliple times and landing on another ad space */
					document.getElementById("rent05").innerHTML = assets.position05.rent.four;
					document.getElementById("rent13").innerHTML = assets.position13.rent.four;
					document.getElementById("rent21").innerHTML = assets.position21.rent.four;
					document.getElementById("rent29").innerHTML = assets.position29.rent.four;
				} else if (playerorder[currentuser].advertising.num == 4) {
					playerorder[currentuser].advertising.owned.forEach(function(asset) {
						asset.rent.current = "four";
					});
				}
				
				setTimeout(function() {
					whoisnext();
				}, 825); /* 0.825 second delay */
			}
		});
	}, 250); /* 0.25 second delay */
}

/* Current player does not buy an asset */
function pass(card) {
	$("#earnings").animate( {
		top: "-500px"
	}, {
		duration: 750, /* 0.75 seconds */
		easing: "linear"
	});
	
	$("#tobuy").animate( {
		top: "-100%"
	}, {
		duration: 1000, /* 1 second */
		easing: "linear",
		complete: function() {
			document.getElementById(card).style.display = "none";
			
			setTimeout(function() {
				whoisnext();
			}, 825); /* 0.825 second delay */
		}
	});
}

/* Current player upgrades an asset (but not an advertisment asset, as these cannot be upgraded) */
function upgrade(assetnumber, card, oldrent, newrent, onboard) {
	if (assetnumber.rent.current !== "five") {
		moneysubtraction(playerorder[currentuser], assetnumber.upgrade);
		
		/* Update displayed money to match the current player's money value */
		document.getElementById("money-count1").innerHTML = playerorder[currentuser].money.toLocaleString('en');
		document.getElementById("money-count2").innerHTML = playerorder[currentuser].money.toLocaleString('en');
	}
	
	var x = document.getElementById(onboard);
	
	/* Display the identifiers */
	if (assetnumber.rent.current == "base") {
		assetnumber.rent.current = "one";

		document.getElementById(oldrent).innerHTML = assetnumber.rent.one;
		document.getElementById(newrent).innerHTML = assetnumber.rent.two;
		
		x.querySelector("#u1").style.display = "inline-block";
	} else if (assetnumber.rent.current == "one") {
		assetnumber.rent.current = "two";

		document.getElementById(oldrent).innerHTML = assetnumber.rent.two;
		document.getElementById(newrent).innerHTML = assetnumber.rent.three;
		
		x.querySelector("#u2").style.display = "inline-block";
	} else if (assetnumber.rent.current == "two") {
		assetnumber.rent.current = "three";

		document.getElementById(oldrent).innerHTML = assetnumber.rent.three;
		document.getElementById(newrent).innerHTML = assetnumber.rent.four;
		
		x.querySelector("#u3").style.display = "inline-block";
	} else if (assetnumber.rent.current == "three") {
		assetnumber.rent.current = "four";

		document.getElementById(oldrent).innerHTML = assetnumber.rent.four;
		document.getElementById(newrent).innerHTML = assetnumber.rent.five;
		
		x.querySelector("#u4").style.display = "inline-block";
	} else if (assetnumber.rent.current == "four") {
		assetnumber.rent.current = "five";

		document.getElementById(oldrent).innerHTML = assetnumber.rent.five;
		$("#" + card + " #costtoupgrade").css({"display": "none"});
		$("#" + card + " h3").css({"display": "none"});
		
		x.querySelector("#u5").style.display = "inline-block";
	}
	
	if (assetnumber.current == "five") {
		document.getElementById(card).onclick = function() { javascript:void(0); };
	}
}

/* Allowing an asset to be upgraded */
function addingupgrade(item, index) {
	var boardpos = currentcolor + (index + 1);
	
	var renting = item.card.replace("p", "rent");
	var olderrent = renting;
	var newerrent = "new" + renting;
	
	document.getElementById(item.card).onclick = function() { upgrade(item, item.card, olderrent, newerrent, boardpos) };
}

/* What happens after the current player moves */
function nextstep(player) {
	/* If the current player lands on a free space or not */
	if (player.position.num == 1 || player.position.num == 9 || player.position.num == 17) {
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
		setTimeout(function() {
			whoisnext();
		}, 825); /* 0.825 second delay */
	} else if (player.position.num == 25) {
		player.position.jail.currentlyin = true;
		player.position.num = 9;
		
		seeboard(player);
		
		setTimeout(function() {
			nextstep(player);
		}, 1250); /* 1.25 second delay */
	} else {
		prepquestions();
		
		document.getElementById("card").style.display = "block";
		$("#card").animate( {
			top: "10%"
		}, {
			duration: 825, /* 0.825 seconds */
			easing: "swing",
			complete: function() {
				document.getElementById("first").style.display = "none";
				document.getElementById("first").style.top = "1100px";
				document.getElementById("first").style.left = "2000px";
				
				document.getElementById("second").style.display = "none";
				document.getElementById("second").style.top = "1100px";
				document.getElementById("second").style.left = "2000px";
			}
		});
		
		/* Only display the owner of the space if there is a owner (do not display if it is unowned) */
		if (player.position.owner !== "unowned" && player.position.owner !== "grant") {
			$("#ownerpaper").animate( {
				top: "-25px"
			}, {
				duration: 900, /* 0.9 seconds */
				easing: "linear"
			});
		}
	}
}

/* Who will move next */
function whoisnext() {
	if (numofdoubles == 0) {
		/* Start next player's turn */
		changingturns();
	} else if (numofdoubles == 1 || numofdoubles == 2) {
		if (playerorder[currentuser].position.jail.currentlyin == false) {
			/* Move again since the current player rolled doubles */
			if (playerorder[currentuser].call == "Fortune") {
				fortune_move();
			} else {
				move(playerorder[currentuser]);
			}
		} else {
			/* Even though the current player rolled doubles, they cannot roll again because now they are in JAIL */
			changingturns();
		}
	}
}

/* Start next player's turn */
function changingturns() {
	if (bankrupt == false) {
		/* Make the last player land behind the next player */
		document.getElementById(playerorder[currentuser].id).style.zIndex = "10";
	
		/* Hide the last player's assets in the playerspace */
		playerorder[currentuser].assets.owned.forEach(function(item) { document.getElementById(item.card).style.display = "none"; });
		playerorder[currentuser].advertising.owned.forEach(function(item) { document.getElementById(item.card).style.display = "none"; });
	
		currentuser++;
		if (currentuser == playerorder.length) { /* > is not used since .length starts counting at 1 and currentuser starts at 0 */
			/* Start the session over */
			currentuser = 0;
			sessionnum++;
		}
		
		if (version == "multiplayer") {
			document.getElementById("playerheading").style.top = "-200px";
		}
		
		setTimeout(function() {
			if (playerorder[currentuser].call == "Fortune") {
				nextturn_fortune();
			} else {
				if (version == "singleplayer") {
					document.getElementById("actionwindow").style.bottom = "-400px";
				}
				
				nextturn(playerorder[currentuser]);
			}
		}, 750); /* 0.75 second delay */
	}
}

/* Roll the dice */
function rolldice() {
	document.getElementById("first").style.display = "block";
	document.getElementById("second").style.display = "block";
	
	document.getElementById("f1").style.display = "none";
	document.getElementById("f2").style.display = "none";
	document.getElementById("f3").style.display = "none";
	document.getElementById("f4").style.display = "none";
	document.getElementById("f5").style.display = "none";
	document.getElementById("f6").style.display = "none";
	
	document.getElementById("s1").style.display = "none";
	document.getElementById("s2").style.display = "none";
	document.getElementById("s3").style.display = "none";
	document.getElementById("s4").style.display = "none";
	document.getElementById("s5").style.display = "none";
	document.getElementById("s6").style.display = "none";
	
	/* Max 6, Min 1; Inclusive */
	die1 = Math.floor(Math.random() * 6) + 1;
	if (die1 == 1) {
		document.getElementById("f1").style.display = "block";
	} else if (die1 == 2) {
		document.getElementById("f2").style.display = "block";
	} else if (die1 == 3) {
		document.getElementById("f3").style.display = "block";
	} else if (die1 == 4) {
		document.getElementById("f4").style.display = "block";
	} else if (die1 == 5) {
		document.getElementById("f5").style.display = "block";
	} else if (die1 == 6) {
		document.getElementById("f6").style.display = "block";
	}
	$("#first").animate( {
		top: "100px",
		left: "475px"
	}, {
		duration: 825, /* 0.825 seconds */
		easing: "swing"
	});
	
	/* Max 6, Min 1; Inclusive */
	die2 = Math.floor(Math.random() * 6) + 1;
	if (die2 == 1) {
		document.getElementById("s1").style.display = "block";
	} else if (die2 == 2) {
		document.getElementById("s2").style.display = "block";
	} else if (die2 == 3) {
		document.getElementById("s3").style.display = "block";
	} else if (die2 == 4) {
		document.getElementById("s4").style.display = "block";
	} else if (die2 == 5) {
		document.getElementById("s5").style.display = "block";
	} else if (die2 == 6) {
		document.getElementById("s6").style.display = "block";
	}
	$("#second").animate( {
		top: "135px",
		left: "560px"
	}, {
		duration: 825, /* 0.825 seconds */
		easing: "swing"
	});
}

/* Checking if a certain asset in a certain color group */
function colorchecking(space) {
	var red = redassets.includes(space);
	var orange = orangeassets.includes(space);
	var yellow = yellowassets.includes(space);
	var lime = limeassets.includes(space);
	var green = greenassets.includes(space);
	var turquoise = turquoiseassets.includes(space);
	var blue = blueassets.includes(space);
	var violet = violetassets.includes(space);
	var advertising = advertisingassets.includes(space);
	
	var colorcheck = [red, orange, yellow, lime, green, turquoise, blue, violet, advertising];
	
	colornum = colorcheck.indexOf(true);
}
function setcolor() {
	switch (colornum) {
		case 0:
			currentcolor = "red";
			currentarraycolor = redassets;
			break;
		case 1:
			currentcolor = "orange";
			currentarraycolor = orangeassets;
			break;
		case 2:
			currentcolor = "yellow";
			currentarraycolor = yellowassets;
			break;
		case 3:
			currentcolor = "lime";
			currentarraycolor = limeassets;
			break;
		case 4:
			currentcolor = "green";
			currentarraycolor = greenassets;
			break;
		case 5:
			currentcolor = "turquoise";
			currentarraycolor = turquoiseassets;
			break;
		case 6:
			currentcolor = "blue";
			currentarraycolor = blueassets;
			break;
		case 7:
			currentcolor = "violet";
			currentarraycolor = violetassets;
	}
}

/* Check for any monopolies */
function monopolies(item, index, arr) {
	/* Do not test the first asset (array element) since there is nothing to compare to */
	if (index === 0) {
		return true;
	} else {
		/* Compare each asset (array element) owner to the owner of the previous asset (array element) */
		return (item.owner === arr[index - 1].owner);
	}
}

/* Reset the assets previously owned by a bankrupt player to be bought out again */
function resetting(item) {
	item.owner = "unowned";
	item.rent.current = "base";

	colorchecking(item);
	setcolor();

	var pos = currentarraycolor.indexOf(item) + 1;

	var onboard = currentcolor + pos;
	var x = document.getElementById(onboard);
	x.setAttribute("title", "");
	x.querySelector("#base").style.display = "none";
	x.querySelector("#u1").style.display = "none";
	x.querySelector("#u2").style.display = "none";
	x.querySelector("#u3").style.display = "none";
	x.querySelector("#u4").style.display = "none";
	x.querySelector("#u5").style.display = "none";
}

/* Show the playerspace */
function showplayerspace() {
	$("#board").animate( {
		top: "-2300px"
	}, {
		duration: 1000, /* 1 second */
		easing: "swing",
		complete: function() {
			document.getElementById("turnidentifier").style.display = "block";
				
			setTimeout(function() {
				document.getElementById("turnidentifier").style.display = "none";
					
				if (version == "multiplayer") {
					document.getElementById("playerheading").style.top = "0";
				}
					
				$("#playerspace").animate( {
					bottom: "0"
				}, {
					duration: 550, /* 0.55 seconds */
					easing: "linear",
					complete: function() {
						$("#playerspace #startingdice").animate( {
							top: "100px"
						}, {
							duration: 500, /* 0.5 seconds */
							easing: "swing"
						});
					}
				});
			}, 2000); /* 2 second delay */
		}
	});
}

/* Move the game pieces and board */
function seeboard(player) {
	arrayposition = player.position.num - 1;
	currentspace = gameboardarray[arrayposition];
	
	var sharedspace = player.position.num;
	var samespace = [];
	/* Find out what other player(s) are on the space (this will also add the current player to the array above) */
	playerorder.forEach(function(user) {
		if (user.position.num == sharedspace) {
			samespace.push(user);
		}
	});

	if (samespace.length == 1) {
		if (player.position.num == 9) {
			if (player.position.jail.currentlyin == false) {
				document.getElementById(player.id).style.top = piecepos[8].visiting.alone[0] + "px";
				document.getElementById(player.id).style.left = piecepos[8].visiting.alone[1] + "px";
			} else {
				document.getElementById(player.id).style.top = piecepos[8].jail.alone[0] + "px";
				document.getElementById(player.id).style.left = piecepos[8].jail.alone[1] + "px";
			}
		} else {
			document.getElementById(player.id).style.top = piecepos[arrayposition].alone[0] + "px";
			document.getElementById(player.id).style.left = piecepos[arrayposition].alone[1] + "px";
		}
	} else {
		if (player.position.num == 9) {
			jailspacing();
		} else {
			if (samespace.length >= 2) {
				document.getElementById(samespace[0].id).style.top = piecepos[arrayposition].one[0] + "px";
				document.getElementById(samespace[0].id).style.left = piecepos[arrayposition].one[1] + "px";
				
				document.getElementById(samespace[1].id).style.top = piecepos[arrayposition].two[0] + "px";
				document.getElementById(samespace[1].id).style.left = piecepos[arrayposition].two[1] + "px";
			}
			if (samespace.length >= 3) {
				document.getElementById(samespace[2].id).style.top = piecepos[arrayposition].three[0] + "px";
				document.getElementById(samespace[2].id).style.left = piecepos[arrayposition].three[1] + "px";
			}
			if (samespace.length >= 4) {
				document.getElementById(samespace[3].id).style.top = piecepos[arrayposition].four[0] + "px";
				document.getElementById(samespace[3].id).style.left = piecepos[arrayposition].four[1] + "px";
			}
			if (samespace.length >= 5) {
				document.getElementById(samespace[4].id).style.top = piecepos[arrayposition].five[0] + "px";
				document.getElementById(samespace[4].id).style.left = piecepos[arrayposition].five[1] + "px";
			}
			if (samespace.length == 6) {
				document.getElementById(samespace[5].id).style.top = piecepos[arrayposition].six[0] + "px";
				document.getElementById(samespace[5].id).style.left = piecepos[arrayposition].six[1] + "px";
			}
		}
	}

	/* What happens when the player(s) land or are moved to the JAIL/Just Visiting corner */
	function jailspacing() {
		var onlyvisiting = [];
		var behindbars = [];
		samespace.forEach(function(user) {
			if (user.position.jail.currentlyin == false) {
				onlyvisiting.push(user);
			} else {
				behindbars.push(user);
			}
		});

		jailplacement(onlyvisiting, piecepos[8].visiting);
		jailplacement(behindbars, piecepos[8].jail);

		function jailplacement(type, placement) {
			if (type.length == 1) {
				document.getElementById(type[0].id).style.top = placement.alone[0] + "px";
				document.getElementById(type[0].id).style.left = placement.alone[1] + "px";
			} else {
				if (type.length >= 2) {
						document.getElementById(type[0].id).style.top = placement.one[0] + "px";
						document.getElementById(type[0].id).style.left = placement.one[1] + "px";

						document.getElementById(type[1].id).style.top = placement.two[0] + "px";
						document.getElementById(type[1].id).style.left = placement.two[1] + "px";
				}
				if (type.length >= 3) {
						document.getElementById(type[2].id).style.top = placement.three[0] + "px";
						document.getElementById(type[2].id).style.left = placement.three[1] + "px";
				}
				if (type.length >= 4) {
						document.getElementById(type[3].id).style.top = placement.four[0] + "px";
						document.getElementById(type[3].id).style.left = placement.four[1] + "px";
				}
				if (type.length >= 5) {
						document.getElementById(type[4].id).style.top = placement.five[0] + "px";
						document.getElementById(type[4].id).style.left = placement.five[1] + "px";
				}
				if (type.length == 6) {
						document.getElementById(type[5].id).style.top = placement.six[0] + "px";
						document.getElementById(type[5].id).style.left = placement.six[1] + "px";
				}
			}
		}
	}

	/* Move the board to make the player(s) visible */
	$("#board").animate( {
		top: viewboard[arrayposition][0] + "px",
		right: viewboard[arrayposition][1] + "px"
	}, {
		duration: 500, /* 0.5 seconds */
		easing: "swing"
	});
}
