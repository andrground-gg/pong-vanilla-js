function Ball(){
	this.x = canvas.width / 2;
	this.y = canvas.height / 2;
	this.velX = 1;
	this.velY = 0;
	this.width = 15;
	this.height = 15;
	
	this.draw = function(){
		ctx.fillStyle = "white";
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	
	this.update = function(){
		this.x+=this.velX;
		this.y+=this.velY;
		
		if(this.x <= player1.x + player1.width && this.x + this.width / 2 >= player1.x && (this.y >= player1.y && this.y <= player1.y + player1.height || this.y + this.height >= player1.y && this.y + this.height <= player1.y + player1.height)){				
			this.velY = ((this.y + this.height / 2) - (player1.y + player1.height / 2)) / player1.height;	
			this.velX *= -1.2;		
		}
		else if(this.x + this.width >= player2.x && this.x + this.width / 2 <= player2.x + player2.width && (this.y >= player2.y && this.y <= player2.y + player2.height || this.y + this.height >= player2.y && this.y + this.height <= player2.y + player2.height)){				
			this.velY = ((this.y + this.height / 2) - (player2.y + player2.height / 2)) / player2.height;
			this.velX *= -1.2;			
		}
		else if(this.y + this.height >= canvas.height || this.y <= 0){
			this.velY *= -1;
		}
		else if(this.x + this.width / 2 <= 0 || this.x + this.width / 2 >= canvas.width){
			this.x + this.width / 2 <= 0 ? score2++ : score1++;
			this.x = canvas.width / 2;
			this.y = canvas.height / 2;
			this.velX /= Math.abs(this.velX) * -1;
			this.velY = 0;
		}		
	}
}