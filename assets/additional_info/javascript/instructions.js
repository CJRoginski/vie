
var pages = ["#info1", "#info2", "#info3", "#info4", "#info5"];
var current = 0; /* Current position in the pages array */

var animating = false; /* This is to make sure that it doesn't change the position of current while pages are animating */

document.addEventListener('keydown', function(key) {
	if (key.keyCode == 27) {
		close();
	} else if (key.keyCode == 37) {
		previous();
	} else if (key.keyCode == 39) {
		next();
	}
});

function next() {
	if (current !== 4 && animating == false) {
		current++;
		
		animating = true;
		$(pages[current]).animate( {
			right: "0"
		}, {
			duration: 1000, /* 1 second */
			easing: "swing",
			complete: function() {
				animating = false;
			}
		});
	}
}

function previous() {
	if (current !== 0 && animating == false) {
		animating = true;
		$(pages[current]).animate( {
			right: "-100%"
		}, {
			duration: 1000, /* 1 second */
			easing: "swing",
			complete: function() {
				animating = false;
				current--; /* This comes after the animation because the page on top must slide away first */
			}
		});
	}
}