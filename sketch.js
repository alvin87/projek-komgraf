let gantiWarna = false;
function setup() {
  createCanvas(500, 500, WEBGL);
}

function setup() {
  createCanvas(600, 400, WEBGL);

  describe('A white torus on a gray background.');
}
function draw() {
  background(400);

  // Enable orbiting with the mouse.
  orbitControl();
  //mengatur warna / pencahayaan
  if (gantiWarna === true) {
    let colors = color('orange');
    ambientLight(colors);
  }
  // Draw the torus.
  // Set its radius to 20 and tubeRadius to 15.
  torus(100, 50);
}
// membuat fungsi agar sphere bisa berubah warna
function doubleClicked() {
  gantiWarna = true;
}