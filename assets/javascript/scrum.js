function seeboard(current, identification) {
	arrayposition = current.position.num - 1;
	currentspace = gameboardarray[arrayposition];

	if (current.position.num == 1) {
		document.getElementById(identification).style.top = "1900px";
		document.getElementById(identification).style.left = "1950px";
		
		$("#board").animate( {
			top: "-1600px",
			right: "100px"
		}, {
			duration: 500, /* 0.5 seconds */
			easing: "swing"
		});
	} else if (current.position.num == 2) {
		document.getElementById(identification).style.top = "1900px";
		document.getElementById(identification).style.left = "1625px";
		
		$("#board").animate( {
			top: "-1600px",
			right: "100px"
		}, {
			duration: 500, /* 0.5 seconds */
			easing: "swing"
		});
	} else if (current.position.num == 3) {
		document.getElementById(identification).style.top = "1900px";
		document.getElementById(identification).style.left = "1425px";
		
		$("#board").animate( {
			top: "-1600px",
			right: "100px"
		}, {
			duration: 500, /* 0.5 seconds */
			easing: "swing"
		});
	} else if (current.position.num == 4) {
		document.getElementById(identification).style.top = "1900px";
		document.getElementById(identification).style.left = "1225px";
		
		$("#board").animate( {
			top: "-1600px",
			right: "-200px"
		}, {
			duration: 500, /* 0.5 seconds */
			easing: "swing"
		});
	} else if (current.position.num == 5) {
		document.getElementById(identification).style.top = "1900px";
		document.getElementById(identification).style.left = "1000px";
		
		$("#board").animate( {
			top: "-1600px",
			right: "-400px"
		}, {
			duration: 500, /* 0.5 seconds */
			easing: "swing"
		});
	} else if (current.position.num == 6) {
		document.getElementById(identification).style.top = "1900px";
		document.getElementById(identification).style.left = "825px";
		
		$("#board").animate( {
			top: "-1600px",
			right: "-600px"
		}, {
			duration: 500, /* 0.5 seconds */
			easing: "swing"
		});
	} else if (current.position.num == 7) {
		document.getElementById(identification).style.top = "1900px";
		document.getElementById(identification).style.left = "625px";
		
		$("#board").animate( {
			top: "-1600px",
			right: "-600px"
		}, {
			duration: 500, /* 0.5 seconds */
			easing: "swing"
		});
	} else if (current.position.num == 8) {
		document.getElementById(identification).style.top = "1900px";
		document.getElementById(identification).style.left = "425px";
		
		$("#board").animate( {
			top: "-1600px",
			right: "-600px"
		}, {
			duration: 500, /* 0.5 seconds */
			easing: "swing"
		});
	} else if (current.position.num == 9) {
		if (current.position.jail.currentlyin == false) {
			document.getElementById(identification).style.top = "1975px";
			document.getElementById(identification).style.left = "100px";
		} else if (current.position.jail.currentlyin == true) {
			document.getElementById(identification).style.top = "1825px";
			document.getElementById(identification).style.left = "175px";
		}
		
		$("#board").animate( {
			top: "-1600px",
			right: "-900px"
		}, {
			duration: 500, /* 0.5 seconds */
			easing: "swing"
		});
	} else if (current.position.num == 10) {
		document.getElementById(identification).style.top = "1575px";
		document.getElementById(identification).style.left = "100px";
		
		$("#board").animate( {
			top: "-1200px",
			right: "-900px"
		}, {
			duration: 500, /* 0.5 seconds */
			easing: "swing"
		});
	} else if (current.position.num == 11) {
		document.getElementById(identification).style.top = "1375px";
		document.getElementById(identification).style.left = "100px";
		
		$("#board").animate( {
			top: "-1200px",
			right: "-900px"
		}, {
			duration: 500, /* 0.5 seconds */
			easing: "swing"
		});
	} else if (current.position.num == 12) {
		document.getElementById(identification).style.top = "1175px";
		document.getElementById(identification).style.left = "100px";
		
		$("#board").animate( {
			top: "-1000px",
			right: "-900px"
		}, {
			duration: 500, /* 0.5 seconds */
			easing: "swing"
		});
	} else if (current.position.num == 13) {
		document.getElementById(identification).style.top = "975px";
		document.getElementById(identification).style.left = "100px";
		
		$("#board").animate( {
			top: "-900px",
			right: "-900px"
		}, {
			duration: 500, /* 0.5 seconds */
			easing: "swing"
		});
	} else if (current.position.num == 14) {
		document.getElementById(identification).style.top = "775px";
		document.getElementById(identification).style.left = "100px";
		
		$("#board").animate( {
			top: "-700px",
			right: "-900px"
		}, {
			duration: 500, /* 0.5 seconds */
			easing: "swing"
		});
	} else if (current.position.num == 15) {
		document.getElementById(identification).style.top = "575px";
		document.getElementById(identification).style.left = "100px";
		
		$("#board").animate( {
			top: "-300px",
			right: "-900px"
		}, {
			duration: 500, /* 0.5 seconds */
			easing: "swing"
		});
	} else if (current.position.num == 16) {
		document.getElementById(identification).style.top = "375px";
		document.getElementById(identification).style.left = "100px";
		
		$("#board").animate( {
			top: "0",
			right: "-900px"
		}, {
			duration: 500, /* 0.5 seconds */
			easing: "swing"
		});
	} else if (current.position.num == 17) {
		document.getElementById(identification).style.top = "50px";
		document.getElementById(identification).style.left = "100px";
		
		$("#board").animate( {
			top: "100px",
			right: "-900px"
		}, {
			duration: 500, /* 0.5 seconds */
			easing: "swing"
		});
	} else if (current.position.num == 18) {
		document.getElementById(identification).style.top = "50px";
		document.getElementById(identification).style.left = "425px";
		
		$("#board").animate( {
			top: "100px",
			right: "-600px"
		}, {
			duration: 500, /* 0.5 seconds */
			easing: "swing"
		});
	} else if (current.position.num == 19) {
		document.getElementById(identification).style.top = "50px";
		document.getElementById(identification).style.left = "625px";
		
		$("#board").animate( {
			top: "100px",
			right: "-600px"
		}, {
			duration: 500, /* 0.5 seconds */
			easing: "swing"
		});
	} else if (current.position.num == 20) {
		document.getElementById(identification).style.top = "50px";
		document.getElementById(identification).style.left = "825px";
		
		$("#board").animate( {
			top: "100px",
			right: "-600px"
		}, {
			duration: 500, /* 0.5 seconds */
			easing: "swing"
		});
	} else if (current.position.num == 21) {
		document.getElementById(identification).style.top = "50px";
		document.getElementById(identification).style.left = "1000px";
		
		$("#board").animate( {
			top: "100px",
			right: "-400px"
		}, {
			duration: 500, /* 0.5 seconds */
			easing: "swing"
		});
	} else if (current.position.num == 22) {
		document.getElementById(identification).style.top = "50px";
		document.getElementById(identification).style.left = "1225px";
		
		$("#board").animate( {
			top: "100px",
			right: "-200px"
		}, {
			duration: 500, /* 0.5 seconds */
			easing: "swing"
		});
	} else if (current.position.num == 23) {
		document.getElementById(identification).style.top = "50px";
		document.getElementById(identification).style.left = "1425px";
		
		$("#board").animate( {
			top: "100px",
			right: "100px"
		}, {
			duration: 500, /* 0.5 seconds */
			easing: "swing"
		});
	} else if (current.position.num == 24) {
		document.getElementById(identification).style.top = "50px";
		document.getElementById(identification).style.left = "1625px";
		
		$("#board").animate( {
			top: "100px",
			right: "100px"
		}, {
			duration: 500, /* 0.5 seconds */
			easing: "swing"
		});
	} else if (current.position.num == 25) {
		document.getElementById(identification).style.top = "50px";
		document.getElementById(identification).style.left = "1950px";
		
		$("#board").animate( {
			top: "100px",
			right: "100px"
		}, {
			duration: 500, /* 0.5 seconds */
			easing: "swing",
			complete: function() {
				setTimeout(function() {
					document.getElementById(identification).style.top = "1825px";
					document.getElementById(identification).style.left = "175px";
					
					$("#board").animate( {
						top: "-1600px",
						right: "-900px"
					}, {
						duration: 500, /* 0.5 seconds */
						easing: "swing"
					});
				}, 1250); /* 1.25 second delay */
			}
		});
	} else if (current.position.num == 26) {
		document.getElementById(identification).style.top = "375px";
		document.getElementById(identification).style.left = "1950px";
		
		$("#board").animate( {
			top: "0",
			right: "100px"
		}, {
			duration: 500, /* 0.5 seconds */
			easing: "swing"
		});
	} else if (current.position.num == 27) {
		document.getElementById(identification).style.top = "575px";
		document.getElementById(identification).style.left = "1950px";
		
		$("#board").animate( {
			top: "-300px",
			right: "100px"
		}, {
			duration: 500, /* 0.5 seconds */
			easing: "swing"
		});
	} else if (current.position.num == 28) {
		document.getElementById(identification).style.top = "775px";
		document.getElementById(identification).style.left = "1950px";
		
		$("#board").animate( {
			top: "-700px",
			right: "100px"
		}, {
			duration: 500, /* 0.5 seconds */
			easing: "swing"
		});
	} else if (current.position.num == 29) {
		document.getElementById(identification).style.top = "975px";
		document.getElementById(identification).style.left = "1950px";
		
		$("#board").animate( {
			top: "-1000px",
			right: "100px"
		}, {
			duration: 500, /* 0.5 seconds */
			easing: "swing"
		});
	} else if (current.position.num == 30) {
		document.getElementById(identification).style.top = "1175px";
		document.getElementById(identification).style.left = "1950px";
		
		$("#board").animate( {
			top: "-1000px",
			right: "100px"
		}, {
			duration: 500, /* 0.5 seconds */
			easing: "swing"
		});
	} else if (current.position.num == 31) {
		document.getElementById(identification).style.top = "1375px";
		document.getElementById(identification).style.left = "1950px";
		
		$("#board").animate( {
			top: "-1200px",
			right: "100px"
		}, {
			duration: 500, /* 0.5 seconds */
			easing: "swing"
		});
	} else if (current.position.num == 32) {
		document.getElementById(identification).style.top = "1575px";
		document.getElementById(identification).style.left = "1950px";
		
		$("#board").animate( {
			top: "-1200px",
			right: "100px"
		}, {
			duration: 500, /* 0.5 seconds */
			easing: "swing"
		});
	}
}