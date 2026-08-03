import * as THREE from "./build/three.module.js";
import Renderer from "./engine/Renderer.js";

const renderer = new Renderer();

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87CEEB);

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0,5,8);

const light = new THREE.HemisphereLight(
    0xffffff,
    0x666666,
    2
);

scene.add(light);

const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(100,100),
    new THREE.MeshStandardMaterial({
        color:0x33aa33
    })
);

ground.rotation.x = -Math.PI/2;

scene.add(ground);

function animate(){

    requestAnimationFrame(animate);

    renderer.render(scene,camera);

}

animate();

window.addEventListener("resize",()=>{

    renderer.resize(camera);

});
