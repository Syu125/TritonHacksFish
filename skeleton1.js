function setup() {
	createCanvas(windowWidth, windowHeight);
	background('#b2fcff');
	frameRate(30);
}

let wave = function(xp){
	this.xp1 = xp;
	this.yp1 = 200;
	this.yp2 = 180;
}

// wave.prototype.move = function(){
// 	this.xp1 += 5;
// 	if(this.xp1 > windowWidth){
// 		this.xp1 = -50;
// 		this.yp2 = 180;
// 	}
// 	this.yp2 += Math.random()*2-1;
// }

function moveWave( wave ){
	wave.xp1 +=  5;
	if( wave.xp1 > windowWidth){
		wave.xp1 = -50;
		wave.yp2 = 180;
	}
	wave.yp2 += Math.random()*2 -1;
}

// wave.prototype.draw = function(){
// 	fill('#ffffff');
// 	triangle(this.xp1, this.yp1, this.xp1+25,this.yp2, this.xp1+50, this.yp1);
// 	fill('#90e2fd');
// 	triangle(this.xp1, this.yp1, this.xp1+25, this.yp2+10, this.xp1+50, this.yp1);
// }


function drawWave( x1, y1, y2){
	fill('#ffffff');
	triangle(x1, y1, x1+25,y2, x1+50, y1);
	fill('#90e2fd');
	triangle(x1, y1, x1+25,  y2+10, x1+50,y1);
}


let rectTrash = function(){
	this.xp = Math.random()*1350+150;
	this.yp = Math.random()*100+225;
	this.width = Math.random()*10+5;
	this.height = Math.random()*20+5
	this.red =  Math.random()*255;
	this.green = Math.random()*255;
	this.blue = Math.random()*255;
	//this.color = {r: Math.random()*255, g:Math.random()*255, b:Math.random()*255};
}

// rectTrash.prototype.draw = function(){
// 	stroke(0);
// 	strokeWeight(2);
// 	fill(this.color.r, this.color.g, this.color.b);
// 	rect(this.xp, this.yp, this.width, this.height);
// 	rectMode(CORNER);
// }

function drawRectTrash( trash ){
	stroke(0);
	strokeWeight(2);
	fill(trash.red, trash.green, trash.blue);
	rect(trash.xp, trash.yp, trash.width, trash.height);
	rectMode(CORNER);
}

function rectTrashMove( trash ){
	trash.xp += Math.random()*1-0.5;
	trash.yp += Math.random()*1-0.5;
}

// rectTrash.prototype.move = function(){
// 	this.xp += Math.random()*1-0.5;
// 	this.yp += Math.random()*1-0.5;
// }

let waves = [];
waves[0] = new wave(-50);
waves[1] = new wave(-100);

let rectTrashes = [];
for(let i = 0; i < 1000; i++){
	rectTrashes[i] = new rectTrash();
}

class Fish {
	constructor(){
	this.x = Math.random()*1350+150;;
	this.y = Math.random()*1000+225 ;
}
}

let fishes = [];
for(let i = 0; i < 100; i++){
	fishes[i] = new Fish();
}

function drawFish(x,y){
	fill(255,215,0)
	noStroke();
	ellipse(x,y,20,20); 
	//ellipse(x,y,width,h) --> fish body 
	triangle(x+20, y-15, x+20, y+15,x+10,y);
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