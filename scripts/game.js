class Game {
    constructor(ctx, width, height, player){
        this.frames = 0;
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.obstacles = [];
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
        this.player.x = 0;
        this.player.y = 110;
        this.frames = 0;
        this.player.speedX = 0;
        this.player.speedY = 0;
        this.obstacles = [];
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

        if(this.frames % 270 === 0){
            let x = this.width;

            let minHeight = 125;

            let maxHeight = 125;

            let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight) 
            
            // let minGap = 400;
            
            // let maxGap = 600;
            
            // let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap); 
            let possible = [550, 700, 850]

            this.obstacles.push(new Component(75, height, 'purple', possible[Math.floor(Math.random() * possible.length)], 0, this.ctx));

            /* this.obstacles.push(new Component(75, height, 'aquamarine', 800, 0, this.ctx)); */

            this.obstacles.push(new Component(75, height, 'aquamarine', possible[Math.floor(Math.random() * possible.length)], 0, this.ctx));


        }
    };

    checkGameOver = () => {
       // console.log('checkGameOver is working')
        const crashed = this.obstacles.some((obstacle) => {
            return this.player.crashWith(obstacle)      //some accepts the function and checks if anything inside the array fulfills condition
        });  

        if(crashed) {
            this.stop()
            this.ctx.font = '50px comic-sans'
            this.ctx.fillStyle = 'orange'
            this.ctx.fillText('Damn you suck lol', 300, 250)
        }
    };

    score(){
      //  console.log('score is working')
        const points = Math.floor(this.frames / 10)
        this.ctx.font = '24px comic-sans';
        this.ctx.fillStyle = 'orange';
        this.ctx.fillText(`Score: ${points}`, 850, 50);
    };

    updateGameArea = () => {
       // console.log('updateGameArea is working')
        this.clear();
        this.updateObstacles();
        this.checkGameOver();
        this.player.newPosition();
        this.player.drawChar();
        this.score()
    };
};