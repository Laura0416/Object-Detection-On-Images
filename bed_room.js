status="";
img="";

function preload(){
    img = loadImage("roombed.jpg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("statusButton").innerHTML = "Detecting Objects";
}

function modelLoaded(){
    console.log("model Loaded");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results);
    }
}

function draw(){
    image(img, 0,0,640,420);
}