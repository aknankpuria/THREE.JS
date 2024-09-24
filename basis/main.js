import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const scene = new THREE.Scene();
scene.background = new THREE.Color('#f0f0f0');


// camera


const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;


// object

const geomtry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial( { color: '#468585' , emissive: '#468585' } );

const cube   = new THREE.Mesh(geomtry , material);

scene.add(cube);

//  add light

const light = new THREE.DirectionalLight( 0x9CDBA6, 10 );

light.position.set(1, 1, 1);

scene.add( light );

//  renderer

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


// animation

// renderer.render( scene, camera );

const animate = () => {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
}

animate();

