var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);

var material = new THREE.MeshBasicMaterial({color: 0x00ff00});

var cube = new THREE.Mesh(geometry, material);

scene.add(cube);

var animate = function() {
    requestAnimationFrame(animate);

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();

function onKeyDown(event) {
    var keyCode = event.which;

    console.log('keyCode', keyCode);

    if (keyCode == 13) {
        let color_ = (Math.floor(Math.random() * 16777215)).toString(16);
        if (color_.length < 6) {
            for (let i = color_.length; i < 6; i++) {
                color_ = "0" + color_;
            }
        }
        color_ = "0x" + color_;
        material = new THREE.MeshBasicMaterial({color: color_});
        cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        cube.position.x = Math.floor(Math.random() * 100);
        cube.position.y = Math.floor(Math.random() * 100);
    }
};

document.addEventListener("keydown", onKeyDown, false);