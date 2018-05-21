var circle = {
	x: 0,
	y: 200,
	diameter: 50
}


var r = 218
var g = 160
var b = 221

function setup() {
	createCanvas(windowWidth, windowHeight)

	//background
	// background(250, 250, 100)
}

function draw() {
	//background
	background(r, g, b)
	//ellipse
	// noStroke()
	fill(250, 200, 200)
	ellipse(circle.x, circle.y, circle.diameter, circle.diameter)
	// ellipse(circleX, 200, 80, 80)

	circle.x = circle.x + 1
	//rectangle
	// fill(200, 250, 200)
	// rect(400, 100, 50, 50 )
}

function mousePressed() {
	background(250, 250, 100)
}
