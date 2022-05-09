// 	VARIABLES
let seaLevel = 200;
let winWidth = window.innerWidth;
let winHeight = window.innerHeight;
let oceanColor = /*hexcode*/;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(oceanColor);
	frameRate(30);
}


////////////////////////
// WAVES (SAMPLE OBJECT)
////////////////////////
/**
 * Wave constructor
 * 	 	   			*	<- (xp2, yp2)
 * 		  		   ***
 *  	 		  *****
 * (xp1, yp2) -> ******* <- (xp3, yp3)
 * @param {*} xp - x coordinate that the wave will spawn in
 */
let wave = function(xp) {
	this.xp1 = xp;
	this.yp1 = seaLevel; // y coordinate that the wave will spawn in
	this.yp2 = seaLevel - 20; // y -coordinate of the peak of the wave
}

function drawWave( x1, y1, y2) {
	fill('#ffffff');
	triangle(x1, y1, x1 + 25, y2, x1 + 50, y1); // the white wave in the back
	fill(waterColor);
	triangle(x1, y1, x1 + 25,  y2 + 10, x1 + 50,y1); // the blue wave in the front
}

function moveWave(wave){
	wave.xp1 +=  5;	// move to the right
	wave.yp2 += Math.random()*2 -1; // move randomly up and down

	if( wave.xp1 > windowWidth){ // restart at spawn when it passes the width of the screen
		wave.xp1 = -50;
		wave.yp2 = seaLevel - 20;
	}
}

waves1 = new wave(-50); // instatiate wave 1
waves2 = new wave(-100); // instatiate wave 2


/////////////////////
// RECTTRASH (PART 2)
/////////////////////

let rectTrash = function() {
	this.xp = /*fill in the blank*/,
	this.yp = /*fill in the blank*/,
	this.width = /*fill in the blank*/,
	this.height = /*fill in the blank*/,
	this.color = /*fill in the blank*/
}

let rectTrashes = [];
for(let i = 0; i < /*number of trash*/; i++){
	rectTrashes[i] = new rectTrash();
}


function drawRectTrash(trash){
	stroke(0);
	strokeWeight(2);
	fill(/*fill in the blank*/); // color
	rect(/*fill in the blank*/); // x, y, width, height
}

function rectTrashMove(trash){
	trash.xp += /*fill in the blank*/, // x displacement per frame
	trash.yp += /*fill in the blank*/, // y displacement per frame
}


/////////////////////
// FISH (PART 3)
/////////////////////

let Fish = function() {
	this.xp = /*fill in the blank*/,
	this.yp = /*fill in the blank*/
}

function drawFish(xp,yp){
	fill(255,215,0)
	noStroke();
	//fill in the blank// draw an elipse ( a circle )
	//ellipse(x,y,width,h) --> fish body 
	//fill in the blank// draw a triangle
	//triangle( x & y of first point , x & y of second point, x & y of third point) fish tail
}

function fishMove(fish){
	fish.xp -= 5;
	if(fish.xp <= -30){
		fish.xp = windowWidth + Math.random() * 100;
	}
}

let fishes = [];
for(let i = 0; i < 100; i++){
	fishes[i] = new Fish();
}

function draw() {
	////////////////////////////
	// SETUP BACKGROUND (STEP 1)
	////////////////////////////
	background(/*fill in the blank*/); // background (sky) color
	fill(/*fill in the blank*/); // ocean color
	noStroke();
	rect(/*fill in the blank*/); // ocean


	drawWave(waves1.xp1, waves1.yp1, waves1.yp2);
	moveWave(waves1);
	drawWave(waves2.xp1, waves2.yp1, waves2.yp2);
	moveWave(waves2);

	for(var j = 0; j < rectTrashes.length; j++){
		drawRectTrash(rectTrashes[j]);
		rectTrashMove(rectTrashes[j]);
	}

	for(let i = 0; i < fishes.length; i++){
		drawFish(fishes[i].xp, fishes[i].yp);
		fishMove(fish[i]);
	}
}
