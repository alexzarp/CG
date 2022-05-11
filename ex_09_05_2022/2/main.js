var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var geometry1 = new THREE.BoxGeometry(1, 1, 1);
var geometry2 = new THREE.SphereGeometry(1, 32, 16); // (radius, widthSegments, heightSegments)
var geometry3 = new THREE.SphereGeometry(1, 32, 16);

var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
var material1 = new THREE.MeshBasicMaterial({color: 0xff0000});
var material2 = new THREE.MeshBasicMaterial({color: 0x0000ff});
var material3 = new THREE.MeshBasicMaterial({color: 0xfea000});

var cube = new THREE.Mesh(geometry, material);
var cube1 = new THREE.Mesh(geometry1, material1);
var sphere2 = new THREE.Mesh(geometry2, material2);
var sphere3 = new THREE.Mesh(geometry3, material3);

scene.add(cube);
scene.add(cube1);
scene.add(sphere2);
scene.add(sphere3);

camera.position.z = 5;

cube.position.x = 2;
cube.position.y = 2;

cube1.position.x = -2;
cube1.position.y = -2;

sphere2.position.x = 2;
sphere2.position.y = -2;

sphere3.position.x = -2;
sphere3.position.y = 2;

var animate = function() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();

function onKeyDown(event) {
    var keyCode = event.which;
    var speed = 0.1;

    console.log('keyCode', keyCode);

    if (keyCode == 87) {
        cube.position.y += speed;
        cube1.position.y -= speed;
    } else if (keyCode == 83) {
        cube.position.y -= speed;
        cube1.position.y += speed;
    } else if (keyCode == 65) {
        cube.position.x -= speed;
        cube1.position.y += speed;
    } else if (keyCode == 68) {
        cube.position.x += speed;
        cube1.position.y -= speed;
    } else if (keyCode == 32) {
        cube.position.set(0, 0, 0);
        cube1.position.set(0, 0, 0);
    }

    if (keyCode == 38) {
        sphere2.position.y += speed;
        sphere3.position.y -= speed;
    } else if (keyCode == 40) {
        sphere2.position.y -= speed;
        sphere3.position.y += speed;
    } else if (keyCode == 37) {
        sphere2.position.x -= speed;
        sphere3.position.y += speed;
    } else if (keyCode == 39) {
        sphere2.position.x += speed;
        sphere3.position.y -= speed;
    } else if (keyCode == 32) {
        sphere2.position.set(0, 0, 0);
        sphere3.position.set(0, 0, 0);
    }
};

document.addEventListener("keydown", onKeyDown, false);