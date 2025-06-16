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
  // Seo优化
  meta: [
    { name: 'keywords', content: '高立民,前端工程师,web前端开发,Web,Three.js,Render' },
    { name: 'description', content: '高立民是一位专业的前端工程师，擅长 web 前端开发，精通 Web 技术和 Three.js 渲染技术。' }
  ]
});
</script>

<template>
  <div>
    <Brief />
  </div>
</template>
