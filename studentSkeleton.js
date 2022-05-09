function setup() {
	createCanvas(windowWidth, windowHeight);
	background('#b2fcff');
	frameRate(30);
}

let wave = function(xp){
	this.xp1 = //fill in the blank//
	this.yp1 = //fill in the blank//
	this.yp2 = //fill in the blank//
}


function moveWave( wave ){
	wave.xp1 +=  //fill in the blank//;
	if( wave.xp1 > windowWidth){ //windowWidht means that is goes beyond our screen
		wave.xp1 = //fill in the blank//;
		wave.yp2 =//fill in the blank//;
	}
	wave.yp2 += //fill in the blank//;
}


function drawWave( x1, y1, y2){
	// fill in the color of the backWave
	triangle(//fill in the blank//);
	fill('#90e2fd');
	triangle(x1, y1, x1+25,  y2+10, x1+50,y1); //this the white part of the wave
}


let rectTrash = function(){
	this.xp = /*fill in the x position*/,
	this.yp = /*fill in the y position*/,
	this.width = /*fill in the width*/,
	this.height = /*fill in the height*/,
	this.color = /*fill in the hex code for the color*/
}

function drawRectTrash( trash ){
	stroke(0);
	strokeWeight(2);
	fill(/*fill in how to access color in trash*/);
	rect(/*fill in how to access x, y, width, height in trash*/);
}

function rectTrashMove( trash ){
	trash.xp = /*fill in x displacement per frame*/;
	trash.yp = /*fill in y displacement per frame*/;
}


let waves = [];
waves[0] = new wave(-50);
waves[1] = new wave(-100);

let rectTrashes = [];
for(let i = 0; i < //fill in the blank// ; i++){ how many pieces of trash do you want to form
	rectTrashes[i] = new rectTrash();
}

class Fish {
	constructor(){
	this.xp = //fill in the blank//
	this.yp = //fill in the blank//
}
}

let fishes = [];
for(let i = 0; i < 100; i++){
	fishes[i] = new Fish();
}

function drawFish(xp,yp){
	fill(255,215,0)
	noStroke();
	//fill in the blank// draw an elipse ( a circle )
	//ellipse(x,y,width,h) --> fish body 
	//fill in the blank// draw a triangle
	//triangle( x & y of first point , x & y of second point, x & y of third point) fish tail
}



function draw() {
	background('#b2fcff');
	fill('#90e2fd');
	noStroke();
	rect(0, 200, windowWidth, windowHeight);
	for(var i = 0; i < waves.length; i++){
		drawWave( waves[i].xp1, waves[i].yp1, waves[i].yp2);
		moveWave(waves[i]);
	}
	for(var j = 0; j < rectTrashes.length; j++){
		drawRectTrash(rectTrashes[j]);
		rectTrashMove(rectTrashes[j]);
	}

	for(let i = 0; i < fishes.length; i++){
			drawFish(fishes[i].x, fishes[i].y)
			fishes[i].x -= 5;
			if(fishes[i].x <= 0){
				fishes[i].x = windowWidth;
			}
	}
}