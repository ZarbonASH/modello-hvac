// Inizializza scena, camera e renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Aggiungi una luce
const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

// Carica il modello GLTF/GLB
const loader = new THREE.GLTFLoader();
loader.load(
  'hvac_unit.glb', 
  function (gltf) {
    scene.add(gltf.scene);
    camera.position.z = 5;
  },
  undefined,
  function (error) {
    console.error('Errore nel caricamento del modello', error);
  }
);

// Animazione
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
