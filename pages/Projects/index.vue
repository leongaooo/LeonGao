<!-- 组件说明 -->
<script setup lang='ts'>
import mountain from '@/assets/img/mountain.jpg'
import key from '@/assets/img/sky.png'

// 显示隐藏内容区, 避免动画未到展示时刻，静态dom的显示
const hideDom = ref(false)

const menuList = [
    {
        name: '地形山脉',
        path: 'mountainousTerrain',
        img: mountain,
    },
    {
        name: '天空盒UV动画',
        path: 'skyuv',
        img: key,
    }
]

onMounted(() => {
    hideDom.value = true
    // 执行首页Gasp动画
    useProjectIndexGasp()
})
</script>

<template>
    <article class="max-w-[800px] w-full m-auto p-3 relative opacity-0" :style="{ opacity: hideDom ? 1 : 0 }">
        <h1 class="title">My Projects</h1>
        <div class="flex flex-wrap gap-15px">
            <NuxtLink class="w-100% sm:w-30% decoration-none" :to="`/projects/three/${item.path}`"
                v-for="item in menuList" :key="item.path">
                <div class="card rounded-md">
                    <img :src="item.img" alt="" class="w-full  h-[80px] sm:h-[150px] object-c rounded">
                    <span class="text-center text-#fff m-r-1 font-500">{{ item.name }}</span>
                </div>
            </NuxtLink>
        </div>
    </article>
</template>

<style scoped lang='scss'>
.card {
    --borderWidth: 3px;
    position: relative;
    border-radius: var(--borderWidth);
}

.card:after {
    content: '';
    position: absolute;
    top: calc(-1 * var(--borderWidth));
    left: calc(-1 * var(--borderWidth));
    height: calc(100% + var(--borderWidth) * 2);
    width: calc(100% + var(--borderWidth) * 2);
    background: linear-gradient(60deg, #f79533, #f36f552c, #ef4e7c, #a166ab44, #5073b8, #1098ad60, #07b39b, #6fba8252);
    border-radius: calc(2 * var(--borderWidth));
    z-index: -1;
    animation: animatedgradient 3s ease alternate infinite;
    background-size: 300% 300%;
}

@keyframes animatedgradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}
</style>
