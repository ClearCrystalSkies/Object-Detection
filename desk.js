var status = Boolean;
function preload(){
    img = loadImage("desk.png");
}
function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Model is loading...";
}
function draw(){
    image(img, 0,0,500,500);
}
function back(){
    window.location = "index.html";
}
function modelLoaded(){
    console.log("Model has been loaded!");
    document.getElementById("status").innerHTML = "Detecting objects...";
    status = true;
    objectDetector.detect(gotResults);
}
function gotResults(error, results){
    if (error){
        console.log(error);
    } else{
        console.log(results);
    }
}