/*
The Meteor game is comprised of two key elements.

The first is the spaceship. It is comprised of the following;
  1. Triangle that makes up the body of the ship
  2. Dots that represent lasers
  3. A script that accelerates the ship "forward" using the UP key, and rotates using the LEFT and RIGHT keys. It cannot accelerate backwards.
  4. A script that fires "lasers" to splits the meteors upon collision using SPACEBAR.
  5. A script that "destroys" the ship when it collides with a meteor (it just says "oops!" in console for now).
  
The second element is the meteor. It is comprised of the following:
  1. A rock shape
  2. A script that splits the rock into two smaller rocks when colliding with lasers
  3. A script that creates the "oops!" message when colliding with the space ship
  4. Random X/Y spawn and direction
  
Improvements: 
  1. Add sound bites for lasers shooting and meteors exploding
  2. Add lives count
  3. Add spaceship explosion when colliding with meteors and reduce lives count by 1
  4. Implement game over state when lives count reaches zero
  5. Create more detailed spaceship, perhaps one that looks like an X-Wing from Star Wars
  6. Create a detailed background, with a field of stars and a planet in the background
*/

/*
The Space Invader game is comprised of five key elements.

1. The Start Screen
  a. The start screen is comprised of text, describing how to play the game.
  
2. The Defense Turret
  a. The turret moves along the bottom of the canvas's X axis using the LEFT and RIGHT arrow keys.
  b. The turret fires bullets using SPACEBAR.
  
3. Turret Bullets
  a. The bullets are fired out of the Turret using SPACEBAR, moving at a constant speed upwards (negative Y speed).
  b. The bullets collide with the invaders, destroying them.
  
4. Space Invaders
  a. The Invaders spawn from the top of the canvas along a random X axis and move at a constant speed towards the bottom of the screen (positive Y speed).
  b. If the Invader hits a bullet, it despawns.
  c. If the Invader reaches the bottom of the canvas, it reduces the Lives count by 1.
  
5. Lives
  a. Lives are represented by a counter of three hearts at the top left of the canvas.
  b. An Invader reaching the bottom of the canvas reduces the Lives count by 1.
  c. Reaching zero Lives (hearts) results in a game over screen, which is a variation of the Start Screen.
  
  Improvements: 
  1. Create more detailed sprites for Turret and Invaders, making the Turret look more like a laser gun and the Invaders look more like UFOs/aliens
  2. Add sound bites for Turret shooting, Invader exploding, and Invader hitting bottom of canvas
  3. Adjust Invader speed to be a little bit slower
  4. Implement a way to regain lives depending on how many invaders are hit
  5. Create a detailed background, perhaps of a city skyline
  6. Create new classes of Invaders that have different movement behaviors, perhaps some moving diagonally or in loop-de-loops
  
*/

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
