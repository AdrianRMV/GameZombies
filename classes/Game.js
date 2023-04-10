class Game {
    constructor() {
        this.score = 0;
        this.lives = 3;
        this.gameOver = false;
    }

    displayScore() {
        textSize(24);
        fill(255);
        text('Score: ' + this.score, 60, 40);
    }

    displayLives() {
        textSize(24);
        fill(255);
        text('Vidas: ' + this.lives, 60, 80);
    }

    displayGameOver() {
        textSize(48);
        fill(255, 0, 0);
        textAlign(CENTER, CENTER);
        text('Game Over', width / 2, height / 2);
    }
}
