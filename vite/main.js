import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const canvas = document.getElementById('canvas');


const scene = new THREE.Scene();
scene.background = new THREE.Color('#f0f0f0');

// camera

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

// object

const geomtry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial( { color: '#468585' , emmissive : '#468585' } );

const dodecahedron = new THREE.Mesh(geomtry , material);

const boxgeometry = new THREE.BoxGeometry(2,0.1,2);
const boxmaterial = new THREE.MeshStandardMaterial({color : '#b4b4b3' , emmissive : '#b4b4b3'}) ;

const box = new THREE.Mesh(boxgeometry,boxmaterial);
box.position.y =-1.5;
scene.add(dodecahedron);
scene.add(box);

//  add light
const light = new THREE.DirectionalLight( 0x006769 , 100);

light.position.set(1, 1, 1);
// light.target.position.set(0, 0, 0);
scene.add( light );
// scene.add( light.target );

// renderer

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// renderer.render(scene, camera);



// orbit controls
const controls = new OrbitControls(camera, canvas );
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.screenSpacePanning = false;
controls.enablepan = true;


// animation

function animate() {
  requestAnimationFrame(animate); 

  dodecahedron.rotation.x += 0.01;
  dodecahedron.rotation.y += 0.01;
  dodecahedron.rotation.z += 0.01;
  // box.rotation.x += 0.005;
  // box.rotation.y += 0.01;
  // box.rotation.z += 0.01; 
  
  controls.update();
  renderer.render(scene, camera);
}

animate()