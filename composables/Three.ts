// Three Js 相关Hooks
import * as THREE from 'three';
import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js';

// 初始化钩子回调
interface InitialHooksOptions {
    /** 是否使用控制器，默认为 true */
    controls?: boolean;
    /** 是否打开辅助线，默认为 true */
    axesHelper?: boolean;
}

// 初始化ThreeJs Hooks
export function useInitialThree(
    preRenderCallback: (deltaTime: number) => void,
    postRenderCallback?: ((deltaTime: number) => void) | null,
    options: InitialHooksOptions = {
        controls: true,
        axesHelper: true,
    },
) {
    // 画布比例为屏幕宽高
    const width = window.innerWidth;
    const height = window.innerHeight;
    // 初始化场景对象
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
    // 设置相机位置
    camera.position.set(200, 200, 200);
    camera.lookAt(0, 0, 0);
    // 初始化渲染器
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    // 辅助对象
    let AxesHelper: any = null;
    if (options.axesHelper) {
        AxesHelper = new THREE.AxesHelper(200);
        scene.add(AxesHelper);
    }
    // 打开鼠标辅助
    let controls: any = null;
    if (options.controls) {
        controls = new OrbitControls(camera, renderer.domElement);
    }
    let previousTime = Date.now();
    // 关键帧动画id
    let animationId: any
    // 渲染函数
    function render(FrameRequestCallback?: number) {
        const currentTime = Date.now();
        const deltaTime = (currentTime - previousTime) / 1000;
        previousTime = currentTime;

        preRenderCallback?.(deltaTime);
        renderer.render(scene, camera);
        postRenderCallback?.(deltaTime);

        animationId = requestAnimationFrame(render);
    }

    // 销毁当前组件函数
    function dispose() {
        // 销毁渲染器
        renderer.dispose();
        // 清除场景中的所有对象
        scene.clear();

        // 销毁控制器
        if (controls) {
            controls.dispose();
            controls = null;
        }

        // 销毁辅助线
        if (AxesHelper) {
            AxesHelper.geometry.dispose();
            AxesHelper.material.dispose();
            scene.remove(AxesHelper);
            AxesHelper = null;
        }

        if (animationId) {
            // 取消动画帧请求
            cancelAnimationFrame(animationId);
        }
    }

    return {
        /** 场景 */
        scene,
        /** 相机 */
        camera,
        /** 渲染器 */
        renderer,
        /** 控制器 */
        controls,
        /** 辅助线 */
        AxesHelper,
        /** 渲染函数 */
        render,
        /** ThreeJs对象 */
        THREE,
        /** 销毁函数 */
        dispose,
    };
}
