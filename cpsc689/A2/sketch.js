let controlPoints = []; // array to hold the points
let selectedPoint = null; // variable to hold the currently selected point
let selectedId = null;

function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent("canvas-container");
    // add a right-click menu to delete points
    document.addEventListener("contextmenu", function (event) {
        event.preventDefault();
        let x = mouseX;
        let y = mouseY;
        for (let i = controlPoints.length - 1; i >= 0; i--) {
            let d = dist(x, y, controlPoints[i].x, controlPoints[i].y);
            if (d < 5) {
                controlPoints.splice(i, 1);
                if (selectedId === i) {
                    selectedId = null;
                    let wDiv = document.getElementById("wDiv");
                    wDiv.hidden = true;        
                }
                break;
            }
        }
    });
}

function deBoor(t, k, knots, draw = false) {
    let n = controlPoints.length - 1;
    let d = [];

    // Find the index i such that knots[i] <= t < knots[i+1]
    let i = k - 1;
    while (i < n && knots[i + 1] <= t) {
        i++;
    }

    if (draw) {
        noFill();
        stroke(120, 120, 10);
        beginShape();
    }
    // Initialize d[j] for j = i-k+1, ..., i
    for (let j = i - k + 1; j <= i; j++) {
        d[j] = controlPoints[j].copy();
        d[j].x *= d[j].z;
        d[j].y *= d[j].z;
        if (draw) {
            vertex(d[j].x / d[j].z, d[j].y / d[j].z); //drawing geometry fashion in each step.
        }
    }
    if (draw) {
        endShape();
    }

    // Compute the curve point recursively using the De Boor algorithm
    for (let r = 1; r <= k; r++) {
        if (draw) {
            noFill();
            stroke(120, 120, 10);
            beginShape();
        }
        for (let j = i; j > i - k + r; j--) {
            let alpha = (t - knots[j]) / (knots[j + k - r] - knots[j]);
            d[j] = p5.Vector.lerp(d[j - 1], d[j], alpha);
            if (draw) {
                vertex(d[j].x / d[j].z, d[j].y / d[j].z);
            }
        }
        if (draw) {
            endShape();
        }
    }

    return d[i];
}


function draw() {
    // update variables
    let k = parseInt(document.getElementById("degree")?.value);
    let uSlider = document.getElementById("u");
    u = parseFloat(uSlider.value);

    let uValueSpan = document.getElementById("uValue");
    uValueSpan.innerHTML = u.toFixed(2);

    let wSlider = document.getElementById("w");
    const w = parseFloat(wSlider.value);
    if (selectedId) {
        controlPoints[selectedId].z = w;
    }
    let wValueSpan = document.getElementById("wValue");
    wValueSpan.innerHTML = w.toFixed(2);

    let geometryFashion = document.getElementById("geometry").checked;


    background(30);

    // Draw control points
    for (let i = 0; i < controlPoints.length; i++) {
        if (i === selectedId) {
            fill(255, 0, 0);
            stroke(255, 0, 0);
        } else {
            fill(255);
            stroke(255);
        }
        ellipse(controlPoints[i].x, controlPoints[i].y, 10);
    }


    // Draw B-spline curve
    if (controlPoints.length >= k) {

        // Compute knot vector
        let knots = [];
        for (let i = 0; i < k + controlPoints.length; i++) {
            if (i < k) {
                knots.push(0);
            } else if (i >= controlPoints.length) {
                knots.push(1);
            } else {
                knots.push((i - k + 1) / (controlPoints.length - k + 1));
            }
        }

        const uPoint = deBoor(u, k, knots, geometryFashion);
        fill(10, 130, 10);
        stroke(10, 130, 10);
        ellipse(uPoint.x / uPoint.z, uPoint.y / uPoint.z, 10);

        noFill();
        stroke(255);
        // Evaluate curve at each point on the canvas
        let tStep = 0.01;
        beginShape();
        for (let t = 0; t <= 1; t += tStep) {
            let P = deBoor(t, k, knots);
            vertex(P.x / P.z, P.y / P.z); // NURBS projection to 2D
        }
        let P = deBoor(1, k, knots); // Adding last point (skipped in for)
        vertex(P.x / P.z, P.y / P.z);
        endShape();
    }
}


function mousePressed() {
    if (mouseX < 0 || mouseY < 0 || mouseX > width || mouseY > height) {
        return; // ignore click if outside of canvas
    }
    // check if the user clicked on an existing point
    for (let i = 0; i < controlPoints.length; i++) {
        let d = dist(mouseX, mouseY, controlPoints[i].x, controlPoints[i].y);
        if (d < 5) {
            // if so, select the point and exit the function
            selectedPoint = controlPoints[i];
            selectedId = i;
            let wSlider = document.getElementById("w");
            wSlider.value = selectedPoint.z;
            let wValueSpan = document.getElementById("wValue");
            wValueSpan.innerHTML = selectedPoint.z.toFixed(2);
            let wDiv = document.getElementById("wDiv");
            wDiv.hidden = false;
            return;
        }
    }
    // if not, add a new point
    controlPoints.push(createVector(mouseX, mouseY, 1.0));
}



function mouseReleased() {
    selectedPoint = null;
}

function mouseDragged() {
    if (selectedPoint) {
        selectedPoint.x = mouseX;
        selectedPoint.y = mouseY;
    }
}
