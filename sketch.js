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

wave.prototype.move = function(){
	this.xp1 += 5;
	if(this.xp1 > windowWidth){
		this.xp1 = -50;
		this.yp2 = 180;
	}
	this.yp2 += Math.random()*2-1;
}
wave.prototype.draw = function(){
	fill('#ffffff');
	triangle(this.xp1, this.yp1, this.xp1+25,this.yp2, this.xp1+50, this.yp1);
	fill('#90e2fd');
	triangle(this.xp1, this.yp1, this.xp1+25, this.yp2+10, this.xp1+50, this.yp1);
}


let rectTrash = function(){
	this.xp = Math.random()*1350+150;
	this.yp = Math.random()*100+225;
	this.width = Math.random()*10+5;
	this.height = Math.random()*20+5;
	this.color = {r: Math.random()*255, g:Math.random()*255, b:Math.random()*255};
}

rectTrash.prototype.draw = function(){
	stroke(0);
	strokeWeight(2);
	fill(this.color.r, this.color.g, this.color.b);
	rect(this.xp, this.yp, this.width, this.height);
	rectMode(CORNER);
}

rectTrash.prototype.move = function(){
	this.xp += Math.random()*1-0.5;
	this.yp += Math.random()*1-0.5;
}

let waves = [];
waves[0] = new wave(-50);
waves[1] = new wave(-100);

let rectTrashes = [];
for(let i = 0; i < 30; i++){
	rectTrashes[i] = new rectTrash();
}

function draw() {
	background('#b2fcff');
	fill('#90e2fd');
	noStroke();
	rect(0, 200, windowWidth, windowHeight);
	for(var i = 0; i < waves.length; i++){
		waves[i].draw();
		waves[i].move();
	}
	for(var j = 0; j < rectTrashes.length; j++){
		rectTrashes[j].draw();
		rectTrashes[j].move();
	}
}