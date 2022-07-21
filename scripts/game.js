
class Game {
    constructor(ctx, width, height, player){
        this.frames = 0;
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.obstacles = [];
        this.copstacles = [];
        this.winningObstacle = [];
        this.interval = null;
        this.isRunning = false;
    };

    start(){
        //console.log('start is working')
        this.interval = setInterval(this.updateGameArea, 1000 / 60);
        this.isRunning = true;
    };

    reset = () => {
       // console.log('reset is working')
       let playerPossible = [400, 550, 700, 850]
        this.player.x = playerPossible[Math.floor(Math.random() * playerPossible.length)];
        this.player.y = 645;
        this.frames = 0;
        this.player.speedX = 0;
        this.player.speedY = 0;
        this.obstacles = [];
        this.copstacles = [];
        this.start();
    };

    clear(){
        //console.log('clear is working')
        this.ctx.clearRect(0, 0, this.width, this.height)
    };

    stop(){
        //console.log('stop is working')
        clearInterval(this.interval)
        this.isRunning = false
    };

    updateObstacles() {
       // console.log('updateObstacles is working')
        for (let i = 0; i < this.obstacles.length; i++){
            this.obstacles[i].y += 1
            this.obstacles[i].drawChar()
        }


        this.frames += 1;

        if(this.frames % 290 === 0){
            let x = this.width;

            let minHeight = 125;

            let maxHeight = 125;

            let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight) 
            
            // let minGap = 400;
            
            // let maxGap = 600;
            
            // let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap); 
            let possible = [425, 575, 725, 850]

            this.obstacles.push(new Component(75, height, 'purple', possible[Math.floor(Math.random() * possible.length)], -100, this.ctx, '../docs/assets/images/player1crop.png'));

            this.obstacles.push(new Component(75, height, 'red', possible[Math.floor(Math.random() * possible.length)], -100, this.ctx, '../docs/assets/images/player1crop.png'));

            /* this.obstacles.push(new Component(75, height, 'aquamarine', 800, 0, this.ctx)); */

            this.obstacles.push(new Component(75, height, 'aquamarine', possible[Math.floor(Math.random() * possible.length)], -100, this.ctx, '../docs/assets/images/player1crop.png'));


        }
        for (let i = 0; i < this.copstacles.length; i++){
           console.log('updateObstacles is working');
            this.copstacles[i].y -= 1;
            this.copstacles[i].drawChar();
        }
        if(this.frames % 3600 === 0){
    
        this.copstacles.push(new Component(75, 125, 'red', 550, 800, this.ctx, '../docs/assets/images/player1crop.png' ));
        this.copstacles.push(new Component(75, 125, 'blue', 700, 800, this.ctx, '../docs/assets/images/player1crop.png'));
        this.copstacles.push(new Component(75, 125, 'red', 850, 800, this.ctx, '../docs/assets/images/player1crop.png'));
        this.copstacles.push(new Component(75, 125, 'blue', 400, 800, this.ctx, '../docs/assets/images/player1crop.png'));
       }
    //     for (let i = 0; i < this.winningObstacle.length; i++){
    //        console.log('winningObstacle is working');
    //         this.winningObstacle[i].y -= 1;
    //         this.winningObstacle[i].drawChar();
    //     }
    //     if(this.frames % 3600 === 0){
    //     this.copstacles.push(new Component(75, 125, 'red', 550, 800, this.ctx));
    //     this.copstacles.push(new Component(75, 125, 'blue', 700, 800, this.ctx));
    //     this.copstacles.push(new Component(75, 125, 'red', 850, 800, this.ctx));
    //     this.copstacles.push(new Component(75, 125, 'blue', 400, 800, this.ctx));
    //    }
        
    };

    draw() {
       
        this.ctx.fillStyle = '#232526';
        this.ctx.fillRect(350, 0, 650, 1400)
        // ctx.clearRect(45, 45, 60, 60)
        // ctx.strokeRect(50, 50, 50, 50)
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 15
        this.ctx.setLineDash([50, 100]);
        this.ctx.moveTo(685, this.frames * 7.5);
        this.ctx.lineTo(685, this.height) 
        this.ctx.moveTo(685, this.frames * 7.5);
        this.ctx.lineTo(685, 0); 
        this.ctx.moveTo(825, this.frames * 7.5);
        this.ctx.lineTo(825, this.height) 
        this.ctx.moveTo(825, this.frames * 7.5);
        this.ctx.lineTo(825, 0); 
        this.ctx.moveTo(545, this.frames * 7.5);
        this.ctx.lineTo(545, this.height) 
        this.ctx.moveTo(545, this.frames * 7.5);
        this.ctx.lineTo(545, 0); 
        this.ctx.stroke();
        this.ctx.closePath();
    
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'orange';
        this.ctx.lineWidth = 15;
        this.ctx.setLineDash([30, 0]);
        this.ctx.moveTo(405, this.frames %= this.height * 5);
        this.ctx.lineTo(405, this.height); 
        this.ctx.moveTo(405, this.frames %= this.height * 5);
        this.ctx.lineTo(405, 0); 
        this.ctx.moveTo(375, this.frames %= this.height * 5);
        this.ctx.lineTo(375, this.height); 
        this.ctx.moveTo(375, this.frames %= this.height * 5);
        this.ctx.lineTo(375, 0);
        this.ctx.stroke()
        this.ctx.closePath()
        };
    
    updateLineSpeed(){
    
    }

    // updateCopstacles() {
    //     // console.log('updateObstacles is working')

    // }

    checkGameOver = () => {
       // console.log('checkGameOver is working')
        const crashed = this.obstacles.some((obstacle, copstacle) => {
            return this.player.crashWith((obstacle) || (copstacle))      //some accepts the function and checks if anything inside the array fulfills condition
        });  

        if(crashed) {
            this.stop()
            this.ctx.font = '50px comic-sans'
            this.ctx.fillStyle = `${this.player.color}`
            this.ctx.fillText('Damn you suck lol', this.player.x, this.player.y)
        }

    };

    score(){
      //  console.log('score is working')
        const points = Math.floor(this.frames )
        this.ctx.font = '24px comic-sans';
        this.ctx.fillStyle = 'gray';
        this.ctx.fillText(`Score: ${points}`, 850, 50);
    };
        
    updateGameArea = () => {
       // console.log('updateGameArea is working')
        this.clear();
        this.draw();
        this.updateObstacles();
        //this.updateCopstacles();
        this.player.newPosition();
        this.player.drawChar();
        this.checkGameOver();
        this.score()
    };
};