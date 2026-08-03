const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87CEEB);

const camera = new THREE.PerspectiveCamera(
60,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({
antialias:true
});

renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

document.getElementById("loading").remove();

const light = new THREE.HemisphereLight(0xffffff,0x444444,2);
scene.add(light);

const ground = new THREE.Mesh(
new THREE.PlaneGeometry(300,300),
new THREE.MeshLambertMaterial({
color:0x33aa33
})
);

ground.rotation.x = -Math.PI/2;
scene.add(ground);

const road = new THREE.Mesh(
new THREE.BoxGeometry(8,0.05,300),
new THREE.MeshLambertMaterial({
color:0x444444
})
);

road.position.y=0.03;
scene.add(road);

const car = new THREE.Mesh(
new THREE.BoxGeometry(2,1,4),
new THREE.MeshLambertMaterial({
color:0xff0000
})
);

car.position.y=0.6;
scene.add(car);

camera.position.set(0,5,10);

function animate(){

requestAnimationFrame(animate);

camera.position.x=car.position.x;
camera.position.z=car.position.z+10;
camera.lookAt(car.position);

renderer.render(scene,camera);

}

animate();

window.addEventListener("resize",()=>{

camera.aspect=window.innerWidth/window.innerHeight;
camera.updateProjectionMatrix();

renderer.setSize(window.innerWidth,window.innerHeight);

});