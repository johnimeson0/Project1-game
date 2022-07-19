//console.log('hi');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


const cWidth = canvas.width;
const cHeight = canvas.height;

const player = new Component(75, 125, 'purple', 650, 645, ctx);

let game;

  const startBtn = document.getElementById('start');
  startBtn.addEventListener('click', () => {
    console.log("click")
      if (!game){
          game = new Game(ctx, cWidth, cHeight, player);
          game.start();    
      } else if (game && !game.isRunning) {
          game.reset();
      }

  });

   document.addEventListener('keydown', (e) => {
    console.log('eventListener keydown is working')
    switch(e.code){
        case 'ArrowUp':
            console.log(e.code)
            player.speedY -= 2;
            break;
        case 'ArrowDown':
            console.log(e.code)

            player.speedY += 2;
            break;
        case 'ArrowLeft':
            console.log(e.code)

            player.speedX-= 3;
            break;
        case 'ArrowRight':
            console.log(e.code)

            player.speedX += 3;
            break;
    }
});  


 document.addEventListener('keyup', (e) => {
    console.log('eventListener keyup is working')
    if (player.speedX > 0){
        player.speedX = 0;
    } else if (player.speedX < 0){
        player.speedX = 0;
    } else if (player.speedY > 0){
        player.speedY -= 1
    } else if (player.speedY < 0){
        player.speedY += 1
    } else ((player.speedX === 0)(player.speedY) === 0); 
    player.speedX = 0;
    //player.speedY = 0;
}); 
