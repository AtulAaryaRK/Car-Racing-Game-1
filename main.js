canvas = document.getElementById("myCanvas");
ctx =  canvas.getContext("2d");
carWidth = 100;
carHeight = 90;
carX = 50;
carY = 50;
carImg = "whiteCar.png";

function add() {
    car_img = new Image();
    car_img.onload = uploadCar_img;
    car_img.src = carImg;
}

function uploadCar_img() {
    ctx.drawImage(car_img, carX, carY,carWidth,carHeight);
}

window,addEventListener("keydown", my_Keydown);

function my_Keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);

    if (keypressed == "38") {
        up();
        console.log("up");
    }
    if (keypressed == "37") {
        left();
        console.log("left");
    }
    if (keypressed == "39") {
        right();
        console.log("right");
    }
    if (keypressed == "40") {
        down();
        console.log("down");
    }
}

function up() {
    if(carY >= 0) {
        carY -= 10;
        console.log("When up arrow pressed " + carX + " - " + carY);
        uploadCar_img();
    }
}

function down() {
    if(carY <= 500) {
        carY += 10;
        console.log("When down arrow pressed " + carX + " - " + carY);
        uploadCar_img();
    }
}

function right() {
    if(carX <= 700) {
        carX += 10;
        console.log("When right arrow pressed " + carX + " - " + carY);
        uploadCar_img();
    }
}

function left() {
    if(carX >= 0) {
        carX -= 10;
        console.log("When left arrow pressed " + carX + " - " + carY);
        uploadCar_img();
    }
}