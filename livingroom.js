LivRoStatus = "";

function preload(){
    loadImage = "";
}

function setup(){
    createCanvas(600, 400);
    canvas.center;

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("livRoStats").innerHTML = "Status: Detecting Objects"
}

function modelLoaded(){
    console.log("Model Loaded")
    LivRoStatus = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}