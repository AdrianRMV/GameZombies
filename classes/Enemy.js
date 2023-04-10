class Enemy {
    constructor(img) {
        this.img = img;
        this.w = 50;
        this.h = 60;
        this.x = width;
        this.y = height - this.h * 3;
    }

    draw() {
        image(this.img, this.x, this.y, this.w, this.h);
    }

    update() {
        this.x -= 8;
    }

    offscreen() {
        return this.x < -this.w;
    }
}
