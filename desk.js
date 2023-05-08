var status = Boolean;
var objects = [];
function preload(){
    img = loadImage("desk.png");
}
function draw(){
    image(img, 0,0,500,500);
    if(status != ""){
        for ( i = 0; i < objects.length; i++) {
            var percent = Math.floor(objects[i].confidence * 100);
            fill(red);
            text(objects[i].label +" "+ percent + "%");
            noFill();
            stroke(red);
            rect(objects[i].width, objects[i].height, objects[i].x, objects[i].y);
        }
    }
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
    objects = results;
}