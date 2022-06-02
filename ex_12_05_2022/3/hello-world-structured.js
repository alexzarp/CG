var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var cubes = new THREE.Group();

// for (let i = 0; i < 10; i++) {
//     var cube = new THREE.Mesh(geometry, material);
//     // cube.position.x += i;
//     cubes.add(cube);
// }
// -------------------------------------
var material = new THREE.MeshBasicMaterial({color: 0x836FFF});
var geometry = new THREE.BoxGeometry(4, 2, 1);

var car = new THREE.Mesh(geometry, material);
cubes.add(car);

var material = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
var geometry = new THREE.BoxGeometry(1, 5, 1);

var wheel = new THREE.Mesh(geometry, material);
cubes.add(wheel);
// -------------------------------------

wheel.scale.y = 0.2;
wheel.position.y = -1.1;
wheel.position.x = 1.3;
wheel.position.z = 0.1;

for (let i = 0; i < 4; i++) {
    
}

// wheel.rotation.z = 80;
// wheel.rotation.y = 50;
// wheel.position.x = 30;

scene.add(cubes);

camera.position.z = 5;

// cube.rotation.x = 5.0;
// cube.rotation.y = 3.0;
// cube.position.x = 2.0;

var velocityup = new THREE.Vector3(0, 0.1, 0);
var velocitydown = new THREE.Vector3(0, -0.1, 0);
var velocityleft = new THREE.Vector3(-0.1, 0, 0);
var velocityright = new THREE.Vector3(0.1, 0, 0); // direita

velocity = velocityup;

var animate = function() {
    requestAnimationFrame(animate);

    // cubes.rotation.z += 0.1;
    // cubes.rotation.y += 0.05;

    renderer.render(scene, camera);
};

animate();

function onKeyDown(event) {
    var keyCode = event.which;

    console.log('keyCode', keyCode);

    if (keyCode == 38) { // up
        velocity = velocityup;
    } else if (keyCode == 40) { // down
        velocity = velocitydown;
    } else if (keyCode == 37) { // esquerda
        velocity = velocityleft;
    } else if (keyCode == 39) { // doreita
        velocity = velocityright;
    }
};

document.addEventListener("keydown", onKeyDown, false);