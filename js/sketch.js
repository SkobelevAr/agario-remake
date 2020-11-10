var blob;

var blobs = [];

function setup() {
    // createCanvas(800, 800);
    createCanvas(windowWidth-200, windowHeight-100);
    blob = new Blob(width/2, height/2, 24);
    for (var i = 0; i < 500; i++) {
        var x = random(-width, width*2);
        var y = random(-height, height*2);
        blobs[i] = new Blob(x, y, 16);
    }
}

function draw() {
    background(255);
    translate(width/2-blob.pos.x, height/2-blob.pos.y);
    blob.show();
    blob.update();
    for (var i=blobs.length-1; i >= 0; i--) {
        if (blob.eats(blobs[i])) {
            blobs.splice(i, 1);
        }
        blobs[i].show();
    }
}
