function Player(){
	this.vel = 15;
	this.width = 20;
	this.height = canvas.height / 6;
	this.x;
	this.y = canvas.height / 2 - this.height / 2;
	
	this.draw = function(){
		ctx.fillStyle = "white";
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	
	this.move = function(direction){
		if((direction == 'KeyW' || direction == 'ArrowUp')
			&& this.y + this.height / 2 > canvas.height / 10)
			this.y -= this.vel;
		else if((direction == 'KeyS' || direction == 'ArrowDown')
			&& this.y + this.height / 2 < canvas.height - canvas.height / 10)
			this.y += this.vel;
	}
}