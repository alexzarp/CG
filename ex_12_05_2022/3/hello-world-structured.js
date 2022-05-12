var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({color: 0xff0000});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

cube.rotation.x = 5.0;
cube.rotation.y = 3.0;
cube.position.x = 2.0;

var velocityup = new THREE.Vector3(0, 0.1, 0);
var velocitydown = new THREE.Vector3(0, -0.1, 0);
var velocityleft = new THREE.Vector3(-0.1, 0, 0);
var velocityright = new THREE.Vector3(0.1, 0, 0); // direita

velocity = velocityup;

var animate = function() {
    requestAnimationFrame(animate);

    cube.position.add(velocity);

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