let bgImg;
let charImg;
let enemyImg;
let bg1;
let bg2;
let char;
let game;
let enemies = [];
let backgroundMusic;
let gameOverSound;
let audioStarted = false;
let gameStarted = false;

function preload() {
    bgImg = loadImage('assets/bg.jpg');
    charImg = loadImage('assets/character.png');
    enemyImg = loadImage('assets/zombie.png');
    backgroundMusic = loadSound('assets/background_music.mp3');
    gameOverSound = loadSound('assets/game_over.mp3');
    backgroundMusic.setVolume(0.5);
    gameOverSound.setVolume(0.5);
}

function startAudio() {
    if (!audioStarted) {
        backgroundMusic.loop();
        audioStarted = true;
    }
}

function playGameOverSound() {
    if (!gameOverSound.isPlaying()) {
        gameOverSound.play();
    }
}

function stopBackgroundMusic() {
    if (backgroundMusic.isPlaying()) {
        backgroundMusic.stop();
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    bg1 = new Bg(bgImg, 0);
    bg2 = new Bg(bgImg, width);
    char = new Character(charImg);
    game = new Game();
    frameRate(60);
}

function displayStartMessage() {
    background(0);
    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER);
    text('Pulsa una tecla para empezar', width / 2, height / 2);
}

function draw() {
    bg1.draw();
    bg2.draw();

    if (!gameStarted) {
        displayStartMessage();
    } else {
        if (!game.gameOver) {
            bg1.scroll();
            bg2.scroll();
        }

        char.draw();

        if (random() < 0.005) {
            enemies.push(new Enemy(enemyImg));
        }

        if (game.lives <= 0) {
            stopBackgroundMusic();

            if (!gameOverSound.isPlaying()) {
                gameOverSound.play();
            }
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

        if (keyIsPressed && !audioStarted) {
            startAudio();
        }

        game.displayLives();

        game.displayScore();
    }
}

function keyPressed() {
    if (!gameStarted) {
        gameStarted = true;
    } else {
        if (keyCode === UP_ARROW) {
            char.jump();
        }
    }
}
