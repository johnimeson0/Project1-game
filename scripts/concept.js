//racing game
//main menu, 3 difficuties/cars to choose from
//road and cars move along y axis in center of canvas, road has 3 lanes
//obstacle cars aligned 2 in all lanes, leaving one space for driver to weave inbetween
//obstacle speed is slow, while the road passing is fast and incrimentally speeds up
// every 30 seconds(adjustable) or so, increases difficulty in waves
// "by john imeson" will be a discreet button that will select "john" difficulty, where player drives my g35. medium difficulty

/*
START MENU: 3 difficulties, 3 cars. EASY: maybe a bmw f30 M3. MAYBE if i can find the time, each difficulty will be set in the 
country of the cars origin, so if i decide on an M3 for easy it would be set in germany. MEDIUM: a kouki s14, if setting is 
an option, tokyo. HARD: dodge challenger hellcat, if setting is an option, somewhere in like texas or some yee yee place.

all difficulties will effect movement across the x axis, as well as movement across the y axis. for instance, easy will have 
great x and y axis movement with almost no hindering. medium will have fair y axis movement, worse than easy but not horrible,
but have good x axis movement. hard will have amazing y axis movement, but have poor x axis movement. //these all represent
the handling and acceleration of the cars that are selected for each difficulty. f30 m3 has great acceleration and great handling,
s14 is very lightweight but not too powerful so its handling is great but acceleration isn't anything stunning, while the 
challenger hellcat has insane acceleration, but weighs over 4500 pounds, so it is practically only good for going in a straight
line (at least in this game).

I would like for movement across the y axis to vary per car, but be incrimentally slowed down and lightly reversed when the upArrow 
is let off, x axis movement will vary per car, but will add "speed" to the movement incrimentally and (depending on the car) almost
completely stop when the key is let off. for the hardest difficulty x movement will be harder to control, having to use 
the opposite directional key to stop moving and will be slower than the others. medium will have great handling, however 
you will have to use the opposite directional key to halt x axis movement, it will just incriment a lot quicker than the hard 
difficulty. easy will be practically analogue, x axis movement will stop when let off the key, y axis movement will act the same
way as the other difficulties, but be quite quicker than medium.
*/

/* 
WAVE 1 (start), RUSH HOUR: road will progressively move faster down the y axis, giving the illusion that the player's car is 
accelerating. obstacles (other cars) will appear 1 or 2 for each line, with 3 lanes in the road, progressively going 
faster down the y axis to further the illusion of player's acceleration (will start quite slow, and pick up to a medium/fair pace)
*/

/*
WAVE 2, BRAKE CHECK: road narrows to 2 lanes, obstacles are now going faster down the y axis, 1 or 2 at a time.
player should be dodging each obstacle. 
thinking of this as similar to guitar hero (in that it is somewhat a quicktime stage), but opposite in the way that obstacles(cars)
will mark the opposite direction of where the player should go.
*/

/*
WAVE 3, ROAD RAGE: forward obstacles are now fixed in one spot, throwing projectiles at the player. the road will continue to
run down the y axis, making it appear as though the player and obstacles are going the same speed, however the obstacles
will be fixed along the top of the y axis and center of x axis. player must weave to avoid projectiles.
*/

/*
WAVE 4(finish), PURSUIT: police appear behind the player at the very bottom of the y axis,
 center of x with one obstacle (police vehicle) per lane. player must avoid the same obstacles in wave 1, but this time if player
 is too slow and the rear pursuing obstacles (police) make contact with the player, the player loses. if the player makes it to 
 the safe point (underground garage), the player wins and is able to play again in a different difficulty/car
*/

//Actual functionality / logic:

//Start screen - function:
/*
-three buttons, all call start function for corresponding difficulty. "easy" "medium" "hard"

-one button, calls start function for "john" difficulty. "by John Imeson"
*/

//Start screen - cosmetic
/*
- three images, left right and center with styled buttons in lower center of each.

- "by John Imeson" button to be discreet, look like normal text, in bottom right of canvas

- big logo, upper center "name of game"
*/

// General game - function
/*
- background incriments speed down y axis upon start

- obstacles increment speed down y axis upon start

- obstacles have random placement along the bounds of the "road" and within "lanes" **get position of these**

- player speed controls similar to week 2 day 4 example, margin set thin around either end of "road"

- if player has a collision with obstacle, end game **crashWith(obstacle) function**

- start button should check if game exists/is running, if game does not exist**if !(game) function**, 
if game exists and is running clear the start buttons from the canvas, if game exists and is not running redraw start buttons and 
game.reset, as well as **checkGameOver function**

- if collision occurs with finish line/point/obstacle, 

- **updateGameArena function)
*/ 