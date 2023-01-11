status="";

function preload(){
    load_img=loadImage("dog_cat.jpg");
}

function setup(){
    canvas=createCanvas(500,300);
    canvas.position(200,200);
    object_detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model loaded");
    status=true;
    object_detector.detect(load_img, gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }else{
        console.log(results);
    }
}

function draw(){
    image(load_img,0,0,500,300);
    fill("red");
    text("Dog",100,75);
    textSize(18);
    noFill();
    stroke("red");
    rect(75,40,200,250);
    fill("red");
    text("Cat",300,70);
    noFill();
    stroke("red")
    rect(225,50,250,250);
}