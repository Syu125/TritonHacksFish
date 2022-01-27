// 	VARIABLES
let seaLevel = 200;
let winWidth = window.innerWidth;
let winHeight = window.innerHeight;


function setup() {
	createCanvas(windowWidth, windowHeight);
	background('#b2fcff');
	frameRate(30);
}

// CONSTRUCTORS
let wave = function(xp){
	this.xp1 = xp;
	this.yp1 = seaLevel;
	this.yp2 = seaLevel - 20;
}

let rectTrash = function(){
	this.xp = winWidth / 2 + Math.random() * 1400 - 700;
	this.yp = seaLevel + Math.random() * 100 + 25;
	this.width = Math.random() * 10 + 5;
	this.height = Math.random() * 20 + 5;
	this.red =  Math.random() * 255;
	this.green = Math.random() * 255;
	this.blue = Math.random() * 255;
}

let Fish = function(){
	this.x = winWidth / 2 + Math.random() * 500 - 250;
	this.y = seaLevel + Math.random() * 650 + 25;
}

// MOVEMENTS
function waveMove( wave ){
	wave.xp1 +=  5;
	if( wave.xp1 > windowWidth){
		wave.xp1 = -50;
		wave.yp2 = seaLevel - 20;
	}
	wave.yp2 += Math.random()*2 -1;
}

function rectTrashMove( trash ){
	trash.xp += Math.random()*1-0.5;
	trash.yp += Math.random()*1-0.5;
}

function fishMove( fish ){
	fish.x -= 5;
	if(fish.x <= -30){
		fish.x = windowWidth + Math.random()*100;
	}
}

// DRAWS
function drawRectTrash( trash ){
	stroke(0);
	strokeWeight(2);
	fill(trash.red, trash.green, trash.blue);
	rect(trash.xp, trash.yp, trash.width, trash.height);
}

function drawWave( x1, y1, y2){
	fill('#ffffff');
	triangle(x1, y1, x1 + 25, y2, x1 + 50, y1);
	fill('#90e2fd');
	triangle(x1, y1, x1 + 25,  y2 + 10, x1 + 50, y1);
}

function drawFish(x,y){
	fill(255,215,0)
	ellipse(x,y,20,20); // (x,y,width,h) fish body 
	triangle(x + 20, y - 15, x + 20, y + 15, x + 10, y); // ( x1, y1, x2, y2, x3, y3) fish tail
}

// INITIATORS
waves1 = new wave(-50);
waves2 = new wave(-100);

let rectTrashes = [];
for(let i = 0; i < 100; i++){
	rectTrashes[i] = new rectTrash();
}

let fishes = [];
for(let i = 0; i < 10; i++){
	fishes[i] = new Fish();
}

function draw() {
	background('#b2fcff');
	fill('#90e2fd');
	noStroke();
	rect(0, seaLevel, windowWidth, windowHeight);
	
	// DRAWING & MOVING
	waveMove(waves1);
	drawWave(waves1.xp1, waves1.yp1, waves1.yp2);
	
	waveMove(waves2);
	drawWave(waves2.xp1, waves2.yp1, waves2.yp2);
	

	for(var j = 0; j < rectTrashes.length; j++){
		rectTrashMove(rectTrashes[j]);
		drawRectTrash(rectTrashes[j]);
	}
	for(let i = 0; i < fishes.length; i++){
		fishMove(fishes[i]);
		drawFish(fishes[i].x, fishes[i].y);
	}
}