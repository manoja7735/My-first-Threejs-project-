import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GUI } from 'lil-gui';


// Creating a scene 
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x202020);

// Here the camera 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 50, 50);

// WebGL renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
// controls.autoRotate = true;

// Plane Geometry
const planeGeometry = new THREE.PlaneGeometry(100, 100);
const planematerial = new THREE.MeshBasicMaterial({
    color: 0x006400,
    side: THREE.DoubleSide
});
const plane = new THREE.Mesh(planeGeometry, planematerial);
plane.rotateX(-90);
// plane.rotation.y = 90;
// plane.position.z = 0;
plane.position.set(0, 0, 0);
scene.add(plane);


// Box Geometry
const boxWidth = 10, boxHeight = 10, boxDepth = 10;
const boxGeometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
const material = new THREE.MeshBasicMaterial({
    color: 0x116ffc
});

const cube = new THREE.Mesh(boxGeometry, material);
cube.position.y = 10;
scene.add(cube);


// Animate Function 
function animate() {
    requestAnimationFrame(animate);
    // cube.rotation.x += 0.5;
    // plane.rotation.z += 10;
    controls.update(); // Update OrbitControls
    renderer.render(scene, camera);
}
animate();