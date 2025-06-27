import * as THREE from 'three';
import bk from './sky/skyhsky_bk.png'
import ft from './sky/skyhsky_ft.png'
import lf from './sky/skyhsky_lf.png'
import rt from './sky/skyhsky_rt.png'
import up from './sky/skyhsky_up.png'
import dn from './sky/skyhsky_dn.png'
// 天空盒位置 右、左、上、下、前、后
// const urls = [rt, lf, dn, up, ft, bk]
const urls = [rt, lf, dn, up, ft, bk]
// 使用CubeTextureLoader加载纹理
const cubeTextureLoader = new THREE.CubeTextureLoader()
const texture = cubeTextureLoader.load(urls)
// 天空盒材质
const material = new THREE.MeshBasicMaterial({
    // 修改此处，使用 envMap 而非 map
    envMap: texture,
    side: THREE.BackSide
})
// 创建天空盒几何体
const geometry = new THREE.BoxGeometry(2000, 2000, 2000)

const mesh = new THREE.Mesh(geometry, material);

export default mesh as any;