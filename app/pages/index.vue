<!-- 组件说明 -->
<script setup lang="ts">
import gsap from "gsap";

// 是否显示动画节点
const isShowDom = ref(false);
// 网格大小
const gridOptions = reactive({
  squareSize: 5,
  gridGap: 5,
});

onMounted(() => {
  setTimeout(() => {
    isShowDom.value = true;
    // 绑定页面滚动动画特效
    nextTick(() => {
      // 对scroll-animation类名的所有元素做滚动到该元素时显示，并有随机移动动效
      const scrollAnimation = document.querySelectorAll(".scroll-animation");

      // 创建Intersection Observer实例来检测元素是否进入视口
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // 元素进入视口时执行动画
              const element = entry.target;

              // 随机生成动画参数
              const randomY = Math.floor(Math.random() * 100) + 50; // 50-150px的随机Y偏移
              const randomX = Math.floor(Math.random() * 100) - 50; // -50到50px的随机X偏移
              const randomDuration = Math.random() * 0.5 + 0.8; // 0.8-1.3秒的随机持续时间
              const randomDelay = Math.random() * 0.3; // 0-0.3秒的随机延迟

              // 应用动画
              gsap.from(element, {
                y: randomY,
                x: randomX,
                opacity: 0,
                duration: randomDuration,
                ease: "power2.out",
                delay: randomDelay,
              });

              // 动画执行后取消观察，避免重复触发
              observer.unobserve(element);
            }
          });
        },
        {
          threshold: 0.1, // 当元素10%进入视口时触发
        }
      );

      // 观察所有.scroll-animation元素
      scrollAnimation.forEach((item) => {
        observer.observe(item);
      });
    });
  }, 1000);
});
</script>

<template>
  <CommonFlickeringGrid
    :square-size="gridOptions.squareSize"
    :grid-gap="gridOptions.gridGap"
  >
    <article class="max-w-[800px] w-full m-auto p-3 relative top-0 left-0">
      <h1>Leon Gao</h1>
      <p>
        <CommonTextEffect
          :perSpeed="10"
          words="Hello! I'm Leon Gao, my Chinese name is 高立民."
        />
        <CommonTextEffect
          :perSpeed="30"
          words="Currently, I am focusing on the Web3D field, while also interested in GIS geographic development. In my spare time, I make efforts to learn English and study full-stack development."
        />
        <CommonTextEffect
          :perSpeed="100"
          words="Since I got into Web development in 2021, I haven't changed my career path or inner passion. This is driven by the thriving front-end community and the continuous evolution of HTTP. We've witnessed an expanding range of possibilities within browsers—technologies like WebAssembly, WebRTC, and WebGL are truly exciting. Although my technical expertise isn't yet profound, my enthusiasm for this field has never waned and will persist indefinitely. In the meantime, I hope to connect with like-minded peers to grow together."
        />
      </p>
      <template v-if="isShowDom">
        <p class="scroll-animation">
          <CommonTextEffect
            :duration="5"
            :perSpeed="50"
            words="你好！我叫Leon Gao, 中文名叫高立民。"
          />
          <CommonTextEffect
            :duration="6"
            :perSpeed="50"
            words="目前我侧重于Web3D领域，同时对GIS地理开发感兴趣，业余时间会努力学英语，和全栈开发的学习。"
          />
          <CommonTextEffect
            :duration="7"
            :perSpeed="50"
            words="我从2021年接触Web开发至今，一直没有改变职业方向和内心的热爱，这取决于繁荣的前端社区和HTTP的进一步发展，我们发现在浏览器里面可以做的事情越来越多，Web Assembly, WebRTC, WebGL, 这些技术概念真令人激动，虽然我的技术层次并不深，但是我内心对于这个领域的热情从未减弱，并且会一直持续下去，在此期间也希望可以认识志同道合的朋友，一起进步。"
          />
        </p>
        <h3 class="scroll-animation">Find me on</h3>
        <BriefAlink href="#" class="scroll-animation">
          <template #icon>
            <img src="/assets/icon/wechat.ico" alt="Wechat" />
          </template>
          Mintopia_
        </BriefAlink>
        <BriefAlink href="https://x.com/Leongaooo" class="scroll-animation">
          <template #icon>
            <img src="/assets/icon/Twitter.ico" alt="Twitter" />
          </template>
          Leongaooo
        </BriefAlink>
        <BriefAlink
          href="https://github.com/leongaooo"
          class="scroll-animation"
        >
          <template #icon>
            <img
              style="filter: drop-shadow(2px 4px 6px black)"
              src="/assets/icon/github.svg"
              alt="GitHub"
            />
          </template>
          leongaooo
        </BriefAlink>
        <BriefAlink
          href="https://juejin.cn/user/3976252950591149/columns"
          class="scroll-animation"
        >
          <template #icon>
            <img src="/assets/icon/juejin.png" alt="JueJin" />
          </template>
          JueJin
        </BriefAlink>
        <BriefAlink
          href="https://blog.csdn.net/g18204746769?spm=1000.2115.3001.5343"
          class="scroll-animation"
        >
          <template #icon>
            <img src="/assets/icon/CSDN.ico" alt="CSDN" />
          </template>
          CSDN
        </BriefAlink>
        <h3 class="scroll-animation">Technology stack</h3>
        <p class="scroll-animation">
          Full-Stack:
          <BriefAlink href="https://nuxt.com/">
            <template #icon>
              <img src="/assets/icon/Nuxt.png" alt="Nuxt" />
            </template>
            Nuxt
          </BriefAlink>
          <BriefAlink href="https://nodejs.org/en">
            <template #icon>
              <img src="/assets/icon/Node.png" alt="Node" />
            </template>
            Node
          </BriefAlink>
        </p>
        <p class="scroll-animation">
          Web:
          <BriefAlink href="https://vuejs.org/">
            <template #icon>
              <img src="/assets/icon/vue.svg" alt="Vue" />
            </template>
            Vue
          </BriefAlink>
          <BriefAlink href="https://vite.dev/">
            <template #icon>
              <img src="/assets/icon/Vite.svg" alt="Vite" />
            </template>
            Vite
          </BriefAlink>
          <BriefAlink href="https://eslint.org/">
            <template #icon>
              <img src="/assets/icon/Eslint.ico" alt="Eslint" />
            </template>
            Eslint
          </BriefAlink>
          <BriefAlink href="https://unocss.dev/">
            <template #icon>
              <img src="/assets/icon/Unocss.ico" alt="Unocss" />
            </template>
            Unocss
          </BriefAlink>
          <BriefAlink href="https://element-plus.org/zh-CN/">
            <template #icon>
              <img src="/assets/icon/Elplus.svg" alt="ElPlus" />
            </template>
            ElPlus
          </BriefAlink>
          <BriefAlink href="https://echarts.apache.org/examples/zh/index.html">
            <template #icon>
              <img src="/assets/icon/echarts.png" alt="Echats" />
            </template>
            Echats
          </BriefAlink>
          <BriefAlink href="https://antv.antgroup.com/">
            <template #icon>
              <img src="/assets/icon/antv.png" alt="AntV" />
            </template>
            AntV
          </BriefAlink>
        </p>
        <p class="scroll-animation">
          Render：
          <BriefAlink
            href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API"
          >
            <template #icon>
              <img src="/assets/icon/MDN.ico" alt="Canvas" />
            </template>
            Canvas
          </BriefAlink>
          <BriefAlink href="https://threejs.org/">
            <template #icon>
              <img src="/assets/icon/Three.ico" alt="Three" />
            </template>
            Three
          </BriefAlink>
          <BriefAlink
            href="https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute"
          >
            <template #icon>
              <img src="/assets/icon/MDN.ico" alt="Svg" />
            </template>
            Svg
          </BriefAlink>
        </p>
        <p class="scroll-animation">
          Animate:
          <BriefAlink href="https://animate.style/">
            <template #icon>
              <img src="/assets/icon/animate.ico" alt="animate" />
            </template>
            Animate
          </BriefAlink>
          <BriefAlink href="https://gsap.com/">
            <template #icon>
              <img src="/assets/icon/gsap.webp" alt="Gsap" />
            </template>
            Gsap
          </BriefAlink>
          <BriefAlink
            href="https://developer.mozilla.org/en-US/docs/Web/API/CSS"
          >
            <template #icon>
              <img src="/assets/icon/MDN.ico" alt="Css3" />
            </template>
            Css3
          </BriefAlink>
        </p>
        <p class="scroll-animation">
          Mobile:
          <BriefAlink href="https://doc.dcloud.net.cn/uni-app-x/">
            <template #icon>
              <img src="/assets/icon/uniapp.ico" alt="Uniapp" />
            </template>
            Uniapp
          </BriefAlink>
          <BriefAlink href="https://mp.weixin.qq.com/?token=&lang=zh_CN">
            <template #icon>
              <img src="/assets/icon/wechat.ico" alt="小程序开发" />
            </template>
            小程序开发
          </BriefAlink>
        </p>
        <p class="scroll-animation">
          Test:
          <BriefAlink href="https://vitest.dev/">
            <template #icon>
              <img src="/assets/icon/Vitest.svg" alt="Vitest" />
            </template>
            Vitest
          </BriefAlink>
        </p>
        <p class="scroll-animation">
          Deploy:
          <BriefAlink href="https://vercel.com/">
            <template #icon>
              <img src="/assets/icon/vercel.png" alt="Vercel" />
            </template>
            Vercel
          </BriefAlink>
        </p>
        <NuxtLink to="/projects" class="scroll-animation">
          <h3>Projects</h3>
        </NuxtLink>
        <br />
        <span
          class="text-sm op50 scroll-animation"
          data-immersive-translate-walked="a2a8dff1-2ed6-4514-8b07-7065b7319dc8"
          data-immersive-translate-paragraph="1"
          ><a
            target="_blank"
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            style="color: inherit"
            data-immersive-translate-walked="a2a8dff1-2ed6-4514-8b07-7065b7319dc8"
            >CC BY-NC-SA 4.0</a
          >
          2025-PRESENT © Leon Gao</span
        >
      </template>
    </article>
  </CommonFlickeringGrid>
</template>

<style scoped lang="scss">
p {
  mix-blend-mode: difference;

  span {
    display: block;
    color: #999999;
    font-size: 14px;
    mix-blend-mode: difference;
  }
}

/* 为 a 标签设置颜色，在亮色和暗色模式下都能明显显示 */
a {
  color: #0089a7;
  /* 基础颜色，亮色模式下明显 */

  @media (prefers-color-scheme: dark) {
    color: #0089a7;
    /* 暗色模式下调整为稍亮的蓝色，保证可读性 */
  }
}
</style>
