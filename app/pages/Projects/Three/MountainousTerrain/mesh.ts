import * as THREE from 'three';
// 导入噪声算法，平滑曲面
import { createNoise2D } from "simplex-noise";
const geometry = new THREE.PlaneGeometry(3000, 3000, 100, 100);

const noise2D = createNoise2D();

const positions = geometry.attributes.position;

for (let i = 0; i < positions.count; i++) {
    const x = positions.getX(i);
    const y = positions.getY(i);

    const z = noise2D(x / 300, y / 300) * 50;
    positions.setZ(i, z);
}

const material = new THREE.MeshBasicMaterial({
    color: new THREE.Color('orange'),
    wireframe: true
});

const mesh = new THREE.Mesh(geometry, material);
mesh.rotateX(- Math.PI / 2);
// 制作起伏动画
export function updatePosition() {
    const positions = geometry.attributes.position;

    for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);

        const z = noise2D(x / 300, y / 300) * 50;
        /**
         * 因为 Math.sin 是从 -1 到 1 变化的，所以 * 10 就是 -10 到 10 变化，这样就有 20 的高度波动。
            sin 的参数首先是传入时间，因为它是不断变化的，所以传入它就有 -1 到 1 的 sin 的不断变化。
            当然，它的值很大，我们要把它变小一点，乘以 0.002，这个值可以调。
         */
        const sinNum = Math.sin(Date.now() * 0.002 + x * 0.05) * 10;

        positions.setZ(i, z + sinNum);
    }
    positions.needsUpdate = true;
}

export default mesh;

