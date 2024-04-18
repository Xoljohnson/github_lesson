let img;
function preload() {
  img = loadImage(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2DpStvkbaMI60CKoakggpu50Kmvs-2yH_PW6e0Gnh7nNUXNT_U_kFpns3QKfSeDKW74I:https://i.redd.it/vmbyuwcnw0y51.png&usqp=CAU"
  );
}

function setup() {
  createCanvas(400, 400, WEBGL);
}
function draw() {
  background(0);
  pointLight(250, 250, 550, frameCount % 400, -frameCount % 400, 90 * 2.5);
  noStroke();
  rotateY(frameCount * 0.03);
  specularMaterial(250);
  sphere(90);
  shininess(100);
  texture(img);
  describe("planet obama")
}
