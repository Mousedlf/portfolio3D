import './style.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


//scene setup
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


const chevronR = document.querySelector('#chevron-right')
const chevronL = document.querySelector('#chevron-left')


chevronR.onclick = function(){console.log("click")}


let mixer

// const loader = new GLTFLoader();
//
// loader.load( 'duck.glb', function ( gltf ) {
//
//     gltf.scene.scale.set(4,4,4)
//     gltf.scene.position.set(-50,0,0)
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

//const clock = new THREE.Clock()

function animate(){
    requestAnimationFrame(animate);


    //   const delta = clock.getDelta()
    //    if (mixer){
    //        mixer.update(delta)
    //    }


    renderer.render(scene, camera);
}
animate()
