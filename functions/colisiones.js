function colisiones(char, enemy) {
    return (
        char.x < enemy.x + enemy.w &&
        char.x + char.w > enemy.x &&
        char.y < enemy.y + enemy.h &&
        char.y + char.h > enemy.y
    );
}
