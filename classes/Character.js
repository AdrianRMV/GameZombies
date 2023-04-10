class Character {
    constructor(img) {
        this.img = img;
        this.w = 100;
        this.h = 100;
        this.x = 100;
        this.y = height - this.h * 2;
        this.initialY = this.y;
        this.jumping = false;
        this.jumpSpeed = 15;
        this.gravity = 0.5;
        this.velY = 0;
    }

    draw() {
        image(this.img, this.x, this.y, this.w, this.h);

        if (this.jumping) {
            this.velY -= this.gravity;
            this.y -= this.velY;

            if (this.y >= this.initialY) {
                this.y = this.initialY;
                this.jumping = false;
                this.velY = 0;
            }
        }
    }

    jump() {
        if (!this.jumping) {
            this.jumping = true;
            this.velY = this.jumpSpeed;
        }
    }
}
