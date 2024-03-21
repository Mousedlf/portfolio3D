// import './style.css';
// import * as THREE from 'three';
// import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
//
//
// //scene setup
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1,100)
// const renderer = new THREE.WebGLRenderer({
//     canvas: document.querySelector('#bg'),
// });
//
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);
// camera.position.setX(-20)
// camera.position.setZ(50);
//
// renderer.render(scene, camera);
//
// // const geometry = new THREE.TorusGeometry(10,3,16,100);
// // const material = new THREE.MeshStandardMaterial({color: 0xffbb25 });
// // const torus = new THREE.Mesh(geometry, material);
// // torus.position.set(0,4,0)
// //scene.add(torus)
//
// const geometry = new THREE.PlaneGeometry(100,1, );
// const material = new  THREE.MeshStandardMaterial({color: 0xffffff, });
//
// const pointLight = new THREE.PointLight(0xffffff, 1000);
// pointLight.position.set(5,2,3)
//
// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// //scene.add(lightHelper, gridHelper)
//
//
// const ambientLight = new THREE.AmbientLight(0xffffff, 4)
// scene.add(ambientLight, pointLight)
//
// const controls = new OrbitControls(camera, renderer.domElement )
//
//
// function addStar(){
//     const geometry = new THREE.IcosahedronGeometry(0.5)
//     const material = new THREE.MeshStandardMaterial({color: 0x0000FF})
//     const star = new THREE.Mesh(geometry, material);
//
//     const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(150));
//     star.position.set(x,y,z);
//
//     scene.add(star)
// }
// Array(150).fill().forEach(addStar)
//
// const skyTexture = new THREE.TextureLoader().load('sky.jpg')
// scene.background = skyTexture;
//
//
//
// let mixer
//
// const loader = new GLTFLoader();
//
// loader.load( 'duck.glb', function ( gltf ) {
//
//     gltf.scene.scale.set(4,4,4)
//     gltf.scene.position.set(0,0,0)
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
//
// const clock = new THREE.Clock()
//
// function animate(){
//     requestAnimationFrame(animate);
//
//     // torus.rotation.x += 0.01;
//     // torus.rotation.y += 0.005;
//     // torus.rotation.z += 0.01;
//
//     //   const delta = clock.getDelta()
//     //    if (mixer){
//     //        mixer.update(delta)
//     //    }
//
//     controls.update()
//
//     renderer.render(scene, camera);
// }
// animate()