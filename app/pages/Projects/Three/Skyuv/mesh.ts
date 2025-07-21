import * as THREE from 'three';
import Sky from './sky.png'

const geometry = new THREE.PlaneGeometry(2000, 1000);

const loader = new THREE.TextureLoader();
const texture = loader.load(Sky);
texture.colorSpace = THREE.SRGBColorSpace;
texture.wrapT = THREE.RepeatWrapping;

const material = new THREE.MeshBasicMaterial(({
    map: texture,
    side: THREE.DoubleSide
}));

const mesh = new THREE.Mesh(geometry, material);


console.log(mesh);

export default mesh as any;