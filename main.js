function setup() {
    canvas = createCanvas(800, 700);
    canvas.center;
    background("white");
    canvas.mouseReleased(classifyCanvas);
}

function clear_sketch() {
    background("white");
}

function draw() {
    strokeWeight(document.getElementById("getWidth").value);
    stroke(document.getElementById("getColor").value);
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}
function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
    
}
