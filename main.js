nose_x = "";
nose_y = "";
function preload() {
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
}
function modelLoaded() {
    console.log("PoseNet is Initialized");
}
function getPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
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