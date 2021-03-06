nose_x = "";
nose_y = "";
function preload() {
    clown_nose_img = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}
function setup() {
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', getPoses);
}
function draw() {
    image(video, 0, 0, 640, 480);
    /*circle(nose_x, nose_y, 30);
    fill("red");
    stroke("black");
    strokeWeight(2);*/

    image(clown_nose_img, nose_x, nose_y, 50, 50);
}

function modelLoaded() {
    console.log("PoseNet is Initialized");
}
function getPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x - 25;
        nose_y = results[0].pose.nose.y - 20;
        console.log("nose' x position is " + nose_x);
        console.log("nose' y position is " + nose_y)
    }
    else {
        console.log("Error!")
    }
}
function take_snapshot() {
    save("myImage.png");
}