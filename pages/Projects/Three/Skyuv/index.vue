<!-- 组件说明 -->
<script setup lang="ts">
import mesh from "./mesh";

// 场景容器
const terrainWrap = ref();

onMounted(() => {
    // 控制初始化对象
    const { scene, camera, renderer, controls, render, AxesHelper, dispose } =
        useInitialThree(
            (deltaTime: number) => {
                // 模拟天空盒动画，这种动画最好的效果是首位相间的图
                // 让偏移速度减慢5倍，将每次偏移量除以5
                mesh.material.map.offset.y -= 0.01 / 5;
            },
            null,
            {
                controls: true,
                axesHelper: false,
            }
        );
    // 添加物体
    scene.add(mesh);
    if (terrainWrap.value) {
        terrainWrap.value.append(renderer.domElement);
    }
    // 重新设置视角
    camera.position.set(7, 262, 224);
    camera.lookAt(0, 0, 0);
    // controls!.addEventListener('change', () => {
    //     console.log(camera.position);
    // })
    render();
    // 卸载组件销毁内容
    onUnmounted(() => {
        dispose()
    })
});
</script>

<template>
    <div ref="terrainWrap"></div>
</template>

<style scoped lang="scss"></style>
