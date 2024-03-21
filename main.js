import './style.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {TextureHelper} from "three/addons";


//SCENE setup --------------------------------------------------------------------------------------------------
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1,100)
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setX(-20)
camera.position.setZ(50);

renderer.render(scene, camera);

const skyTexture = new THREE.TextureLoader().load('sky.jpg')
scene.background = skyTexture;

const ambientLight = new THREE.AmbientLight(0xffffff, 4)
scene.add(ambientLight)





// CUBES --------------------------------------------------------------------------------------------------
const geometryY = new THREE.BoxGeometry(15,15,15    );
const materialY = new THREE.MeshBasicMaterial({color: 0xffef00});
const cubeY = new THREE.Mesh(geometryY, materialY);
cubeY.position.set(-40,0,0)

const geometryV = new THREE.BoxGeometry(15, 15,15);
const materialV = new THREE.MeshBasicMaterial({color: 0x8a2be2});
const cubeV = new THREE.Mesh(geometryV, materialV);
cubeV.position.set(60,10,0)

scene.add(cubeY, cubeV);



// HTML Elements --------------------------------------------------------------------------------------------------
const chevronR = document.querySelector('#chevron-right')
const chevronL = document.querySelector('#chevron-left')

//const cameraCubeVPosition = new THREE.Vector2(-20,10)



chevronR.onclick = function() {
    const cameraCubeYPosition = new THREE.Vector2(80,10)
   // camera.position.lerp(cameraCubeYPosition, 0,1)

    camera.position.set(80,10)
}

chevronL.onclick = function() {
    const targetPosition = new THREE.Vector3(10, 10)
    //camera.position.lerp(targetPosition, 0,1)

    camera.position.set(-20,0)
}



// DUCK --------------------------------------------------------------------------------------------------

// let mixer
//
// const loader = new GLTFLoader();
//
// loader.load( 'duck.glb', function ( gltf ) {
//
//     gltf.scene.scale.set(10,10,10)
//     gltf.scene.position.set(-40,-10,0)
//
//     mixer = new THREE.AnimationMixer( gltf.scene );
//     const action = mixer.clipAction( gltf.animations[1] );
//     action.play();
//
//     scene.add( gltf.scene );
//
// }, undefined, function ( error ) {
//
//     console.error( error );
//
// } );

const clock = new THREE.Clock()

function animate(){
    requestAnimationFrame(animate);


    //   const delta = clock.getDelta()
    //    if (mixer){
    //        mixer.update(delta)
    //    }


    renderer.render(scene, camera);
}
animate()
