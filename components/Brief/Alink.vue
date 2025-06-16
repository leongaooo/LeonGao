<!-- A标签跳转组件 -->
<script setup lang="ts">
defineProps({
    /** 跳转链接 */
    href: {
        type: String,
    }
})
</script>
<template>
    <a :href="href" target="_blank" >
        <slot name="icon" />
        <slot />
    </a>
</template>

<style scoped lang='scss'>
a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    font-size: 14px;
    padding: 2px 6px; // 添加内边距，使标签有卡片感
    margin-right: 6px;
    border-radius: 4px; // 圆角边框
    background-color: #f8f9fa; // 背景颜色
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12); // 轻微阴影
    text-decoration: none;
    transition: background-color 0.3s ease; // 添加过渡效果

    :deep(img) {
        width: 16px;
        height: 16px;
    }

    &:hover {
        background-color: #e2e6ea; // 鼠标悬停时的背景颜色变化
    }
}
</style>