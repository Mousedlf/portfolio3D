import './style.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {OrbitControls, TextureHelper} from "three/addons";
import { gsap } from "gsap";


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

const geometryB = new THREE.BoxGeometry(15, 15,15);
const materialB = new THREE.MeshBasicMaterial({color: 0x0000FF});
const cubeB = new THREE.Mesh(geometryB, materialB);
cubeB.position.set(-120,60,0)

scene.add(cubeY, cubeV, cubeB);

//tableau ici
const cameraPositions = [
    {x: -100, y: 60, z: 50},
{x: -20, y: 0, z: 50},
{x: -80, y: 10, z: 50}
]



//-----------------------



// HTML Elements --------------------------------------------------------------------------------------------------
const chevronR = document.querySelector('#chevron-right')
const chevronL = document.querySelector('#chevron-left')



chevronR.onclick = function() {

    const currentCameraPosition = camera.position.clone()

    cameraPositions.forEach((e)=>{
        if(e === "lala"){
            console.log(e)

        }
    })

    //const nextCameraPosition =

    gsap.to(camera.position, {x:80, y:10, duration: 1})

}

chevronL.onclick = function() {

    const test= camera.position.clone()
    console.log(test)
    console.log(cameraPositions.indexOf("lala"))

    gsap.to(camera.position, {x:-100, y:60, duration: 1})


}


showElem(cameraPositions, 0);

function showElem(cameraPositions, index) {
    if (cameraPositions[index] !== undefined) {

        chevronR.addEventListener('click', function() {
            let current = this;
            nextElem(cameraPositions, index, current);
        });
        chevronL.addEventListener('click', function() {
            let current = this;
            prevElem(cameraPositions, index, current);
        });
    } else {
        index = 0;
        showElem(cameraPositions, index);
    }
}

function nextElem(cameraPositions, index, current) {
    let currentElem = current.parentElement;
    index++;
    const test= camera.position.clone()
    console.log(test)
    console.log(index)

}

function prevElem(cameraPositions, index, current) {
    let currentElem = current.parentElement;
    index--;
    const test= camera.position.clone()
    console.log(test)
    console.log(index)
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
