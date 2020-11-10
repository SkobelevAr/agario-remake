const scoreS = document.getElementById("scoreSpan");
// var c = random(1,5);
// console.log(c);
// scoreS.addEventListener("change", () => {
//     scoreS.innerHTML(score);
//     console.log(score);
// });

var score = 0;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(function() {
    document.getElementById("scoreSpan").innerHTML = score;
}, 10);

function Blob(x, y, r) {
    this.pos = createVector(x, y);
    this.r = r;
    this.velocity = 5.5;

    this.update = function() {
        var vel = createVector(mouseX-width/2, mouseY-height/2);
        vel.setMag(this.velocity);
        this.pos.add(vel);
    }

    this.eats = function(other) {
        var d = p5.Vector.dist(this.pos, other.pos);
        if(d < this.r-10 + other.r) {
            score += 10;
            console.log(score);
            console.log(this.velocity);
            this.r += 0.5;
            this.velocity -= 0.005;
            if(this.velocity <= 0.1) {
                this.velocity = 0.1;
            }
            return true;
        } else {
            return false;
        }
    }

    var c = getRandomInt(1, 5);
    if(c == 1) {
        c = "blue";
    }
    if(c == 2) {
        c = "red";
    }
    if(c == 3) {
        c = "green";
    }
    if(c == 4) {
        c = "magenta";
    }
    if(c == 5) {
        c = "yellow";
    }
    console.log(c);

    this.show = function() {
        if(r >= 23) {
            fill(c);
        } else {
            fill(0);
        }
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
    }
}