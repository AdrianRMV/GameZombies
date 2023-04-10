class Bg {
    constructor(img, x) {
        this.img = img;
        this.x = x;
        this.y = 0;
        this.w = width;
        this.h = height;
        this.speed = 8;
    }

    draw() {
        image(this.img, this.x, this.y, this.w, this.h);
    }

    scroll() {
        this.x -= this.speed;
        if (this.x <= -width) {
            this.x = width;
        }
    }
}
