function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(110, 65);

    canvas = createCanvas(550, 420);
    canvas.position(710, -10);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("poseNet Is Initialised! ")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}

function draw() {
    background("grey");
}