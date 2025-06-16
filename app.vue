<script setup lang="ts">
// 预加载字体文件
useHead({
  link: [
    {
      rel: "preload",
      href: "/assets/font/Merienda_woff2/Merienda-Regular.woff2",
      as: "font",
      type: "font/woff2",
      crossorigin: 'anonymous',
    },
  ],
});
</script>

<template>
  <div>
    <Brief />
  </div>
</template>
