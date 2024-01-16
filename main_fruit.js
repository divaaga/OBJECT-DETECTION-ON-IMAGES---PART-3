var img = "";

function preload(){
    img = loadImage("fruit.png");
}

function setup() {
    canvas = createCanvas(660, 400);
    canvas.center(); objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";  
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}
function draw() {
    image(img, 0, 0, canvas.width, canvas.height);
    if (status != "") {
        for (i=0; i<objects.length; i++) {
            fill("red");
            textSize(20);
            percent = floor(objects[i].confidence * 100)
            text(objects[i].label + " " + percent + "%", objects[i].x + 10, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            document.getElementById("status").innerHTML = "Status : Objects Detected"; 
            document.getElementById("number").innerHTML = "2 objects detected";  
        }
    }
}

function back() {
    window.location = "index_home.html";
}