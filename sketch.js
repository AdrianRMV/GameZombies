let bgImg;
let charImg;
let enemyImg;
let bg1;
let bg2;
let char;
let game;
let enemies = [];

function preload() {
    bgImg = loadImage('assets/bg.jpg');
    charImg = loadImage('assets/character.png');
    enemyImg = loadImage('assets/zombie.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    bg1 = new Bg(bgImg, 0);
    bg2 = new Bg(bgImg, width);
    char = new Character(charImg);
    game = new Game();
    frameRate(60);
}

function draw() {
    bg1.draw();
    bg2.draw();

    if (!game.gameOver) {
        bg1.scroll();
        bg2.scroll();
    }

    char.draw();

    if (random() < 0.005) {
        enemies.push(new Enemy(enemyImg));
    }

    if (!game.gameOver) {
        for (let i = enemies.length - 1; i >= 0; i--) {
            enemies[i].draw();
            enemies[i].update();

            if (enemies[i].offscreen()) {
                if (enemies[i].x < char.x) {
                    game.score += 10;
                }
                enemies.splice(i, 1);
            } else if (colisiones(char, enemies[i])) {
                game.lives--;
                enemies.splice(i, 1);

                if (game.lives === 0) {
                    game.gameOver = true;
                }
            }
        }
    } else {
        game.displayGameOver();
    }

    game.displayLives();

    game.displayScore();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        char.jump();
    }
}
