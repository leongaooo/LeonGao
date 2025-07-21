<!-- 组件说明 -->
<script setup lang='ts'>
import mesh, { updatePosition } from './mesh';

// 场景容器
const terrainWrap = ref()

onMounted(() => {
    // 控制初始化对象
    const {
        scene,
        camera,
        renderer,
        controls,
        render,
        AxesHelper
    } = useInitialThree((deltaTime: number) => {
        // 执行噪声变化
        updatePosition()
        // 执行旋转
        mesh.rotateZ(0.001)
    }, null, {
        controls: true,
        axesHelper: false
    })
    // 添加物体
    scene.add(mesh);
    if (terrainWrap.value) {
        terrainWrap.value.append(renderer.domElement);
    }
    render();
})

</script>

<template>
    <div ref="terrainWrap">
    </div>
</template>

<style scoped lang='scss'></style>
