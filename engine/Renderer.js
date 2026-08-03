import * as THREE from "../build/three.module.js";

export default class Renderer {

    constructor() {

        this.renderer = new THREE.WebGLRenderer({
            antialias: true
        });

        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        this.renderer.shadowMap.enabled = true;

        document.body.appendChild(this.renderer.domElement);
    }

    render(scene, camera) {
        this.renderer.render(scene, camera);
    }

    resize(camera) {

        camera.aspect =
            window.innerWidth / window.innerHeight;

        camera.updateProjectionMatrix();

        this.renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );
    }
}
