var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var geometry1 = new THREE.BoxGeometry(1, 1, 1);
var geometry2 = new THREE.BoxGeometry(1, 1, 1);
var geometry3 = new THREE.BoxGeometry(1, 1, 1);

var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
var material1 = new THREE.MeshBasicMaterial({color: 0xff0000});
var material2 = new THREE.MeshBasicMaterial({color: 0x0000ff});
var material3 = new THREE.MeshBasicMaterial({color: 0x0ea0ff});

var cube = new THREE.Mesh(geometry, material);
var cube1 = new THREE.Mesh(geometry1, material1);
var cube2 = new THREE.Mesh(geometry2, material2);
var cube3 = new THREE.Mesh(geometry3, material3);

scene.add(cube);
scene.add(cube1);
scene.add(cube2);
scene.add(cube3);

camera.position.z = 5;

cube.position.x = 2;
cube.position.y = 2;

cube1.position.x = -2;
cube1.position.y = -2;

cube2.position.x = 2;
cube2.position.y = -2;

cube3.position.x = -2;
cube3.position.y = 2;

var animate = function() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();
