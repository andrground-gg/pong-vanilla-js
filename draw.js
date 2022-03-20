const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
var score1 = 0;
var score2 = 0;

(function setup(){
	player1 = new Player();
	player2 = new Player();
	ball = new Ball();
	player1.x = canvas.width / 20;
	player2.x = canvas.width - player1.x - player2.width;
	
	window.setInterval(()=>{
		ctx.clearRect(0,0, canvas.width, canvas.height);
		
		ctx.beginPath();
		ctx.strokeStyle = "white";
		ctx.lineWidth = '5';
		ctx.setLineDash([15, 10]);
		ctx.moveTo(canvas.width / 2, 0);
		ctx.lineTo(canvas.width / 2, canvas.height);
		ctx.stroke();		
		
		ctx.fillStyle = "white";	
		ctx.font = "80px Verdana";			
		ctx.fillText(score1, canvas.width / 4, canvas.height / 3);
		ctx.fillText(score2, canvas.width - canvas.width / 4 - ctx.measureText(score2).width, canvas.height / 3);	
		
		window.onkeydown = function(evt){
			if(evt.code == 'KeyW' || evt.code == 'KeyS')
				player1.move(evt.code);
			else if (evt.code == 'ArrowUp' || evt.code == 'ArrowDown')
				player2.move(evt.code);
		}
		
		ball.draw();
		ball.update();
		player1.draw();
		player2.draw();		
	}, 1);
}());


