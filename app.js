import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";
import { ARButton } from "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/webxr/ARButton.js";

let camera, scene, renderer;
let cube;

init();
animate();

function init() {

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(
70,
window.innerWidth / window.innerHeight,
0.01,
20
);

renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.xr.enabled = true;

document.body.appendChild(renderer.domElement);

document.body.appendChild(
ARButton.createButton(renderer, { requiredFeatures: ["hit-test"] })
);

const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);

scene.add(light);

const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);

const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });

cube = new THREE.Mesh(geometry, material);

cube.position.set(0, 0, -1);

scene.add(cube);

}

function animate() {

renderer.setAnimationLoop(render);

}

function render() {

cube.rotation.y += 0.01;

renderer.render(scene, camera);

}