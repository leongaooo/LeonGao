<!-- 组件说明 -->
<script setup lang='ts'>
// const { color } = useColorChanger()
</script>

<template>
    <article class="max-w-[800px] w-full m-auto p-3 relative" >
        <h1>Leon Gao</h1>
        <img class="absolute w-500px h-500px top-0px left-55px z--5 opacity-20" src="https://cdn.pixabay.com/animation/2024/02/22/07/04/07-04-49-688_512.gif" alt="设置背景图"/>
        <p>
            Hello! I'm Leon Gao, my Chinese name is 高立民.
            <span>你好！我叫Leon Gao, 中文名叫高立民。</span>
        </p>
        <p>
            Currently, I am focusing on the Web3D field, while also interested in GIS geographic development. In my spare time, I make efforts to learn English and study full-stack development.
            <span>目前我侧重于Web3D领域，同时对GIS地理开发感兴趣，业余时间会努力学英语，和全栈开发的学习。</span>
        </p>
        <p>
            Since I got into Web development in 2021, I haven't changed my career path or inner passion. This is driven by the thriving front-end community and the continuous evolution of HTTP. We've witnessed an expanding range of possibilities within browsers—technologies like WebAssembly, WebRTC, and WebGL are truly exciting. Although my technical expertise isn't yet profound, my enthusiasm for this field has never waned and will persist indefinitely. In the meantime, I hope to connect with like-minded peers to grow together.
            <span>我从2021年接触Web开发至今，一直没有改变职业方向和内心的热爱，这取决于繁荣的前端社区和HTTP的进一步发展，我们发现在浏览器里面可以做的事情越来越多，Web Assembly, WebRTC, WebGL, 这些技术概念真令人激动，虽然我的技术层次并不深，但是我内心对于这个领域的热情从未减弱，并且会一直持续下去，在此期间也希望可以认识志同道合的朋友，一起进步。</span>
        </p>

        <h3>Find me on</h3>
        <BriefAlink href="#">
            <template #icon>
                <img src="/assets/icon/wechat.ico" alt="Wechat">
            </template>
            Mintopia_
        </BriefAlink>
        <BriefAlink href="https://x.com/Min_topia">
            <template #icon>
                <img src="/assets/icon/Twitter.ico" alt="Twitter">
            </template>
            Twitter
        </BriefAlink>
        <BriefAlink href="https://github.com/leongaooo">
            <template #icon>
                <img style=" filter: drop-shadow(2px 4px 6px black);" src="/assets/icon/github.svg" alt="GitHub">
            </template>
            GitHub
        </BriefAlink>
        <BriefAlink href="https://juejin.cn/user/3976252950591149/columns">
            <template #icon>
                <img src="/assets/icon/juejin.png" alt="JueJin">
            </template>
            JueJin
        </BriefAlink>
        <BriefAlink href="https://blog.csdn.net/g18204746769?spm=1000.2115.3001.5343">
            <template #icon>
                <img src="/assets/icon/CSDN.ico" alt="CSDN">
            </template>
            CSDN
        </BriefAlink>
        <h3>Technology stack</h3>
        <p>
            Full-Stack:
            <BriefAlink href="https://nuxt.com/">
                <template #icon>
                    <img src="/assets/icon/Nuxt.png" alt="Nuxt">
                </template>
                Nuxt
            </BriefAlink>
            <BriefAlink href="https://nodejs.org/en">
                <template #icon>
                    <img src="/assets/icon/Node.png" alt="Node">
                </template>
                Node
            </BriefAlink>
        </p>
        <p>
            Web:
            <BriefAlink href="https://vuejs.org/">
                <template #icon>
                    <img src="/assets/icon/vue.svg" alt="Vue">
                </template>
                Vue
            </BriefAlink>
            <BriefAlink href="https://vite.dev/">
                <template #icon>
                    <img src="/assets/icon/Vite.svg" alt="Vite">
                </template>
                Vite
            </BriefAlink>
            <BriefAlink href="https://eslint.org/">
                <template #icon>
                    <img src="/assets/icon/Eslint.ico" alt="Eslint">
                </template>
                Eslint
            </BriefAlink>
            <BriefAlink href="https://unocss.dev/">
                <template #icon>
                    <img src="/assets/icon/Unocss.ico" alt="Unocss">
                </template>
                Unocss
            </BriefAlink>
            <BriefAlink href="https://element-plus.org/zh-CN/">
                <template #icon>
                    <img src="/assets/icon/Elplus.svg" alt="ElPlus">
                </template>
                ElPlus
            </BriefAlink>
            <BriefAlink href="https://echarts.apache.org/examples/zh/index.html">
                <template #icon>
                    <img src="/assets/icon/echarts.png" alt="Echats">
                </template>
                Echats
            </BriefAlink>
            <BriefAlink href="https://antv.antgroup.com/">
                <template #icon>
                    <img src="/assets/icon/antv.png" alt="AntV">
                </template>
                AntV
            </BriefAlink>
        </p>
        <p>
            Render：
            <BriefAlink href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API">
                <template #icon>
                    <img src="/assets/icon/MDN.ico" alt="Canvas">
                </template>
                Canvas
            </BriefAlink>
            <BriefAlink href="https://threejs.org/">
                <template #icon>
                    <img src="/assets/icon/Three.ico" alt="Three">
                </template>
                Three
            </BriefAlink>
            <BriefAlink href="https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute">
                <template #icon>
                    <img src="/assets/icon/MDN.ico" alt="Svg">
                </template>
                Svg
            </BriefAlink>
        </p>
        <p>
            Animate:
            <BriefAlink href="https://animate.style/">
                <template #icon>
                    <img src="/assets/icon/animate.ico" alt="animate">
                </template>
                Animate
            </BriefAlink>
            <BriefAlink href="https://gsap.com/">
                <template #icon>
                    <img src="/assets/icon/gsap.webp" alt="Gsap">
                </template>
                Gsap
            </BriefAlink>
            <BriefAlink href="https://developer.mozilla.org/en-US/docs/Web/API/CSS">
                <template #icon>
                    <img src="/assets/icon/MDN.ico" alt="Css3">
                </template>
                Css3
            </BriefAlink>
        </p>
        <p>
            Mobile:
            <BriefAlink href="https://doc.dcloud.net.cn/uni-app-x/">
                <template #icon>
                    <img src="/assets/icon/uniapp.ico" alt="Uniapp">
                </template>
                Uniapp
            </BriefAlink>
            <BriefAlink href="https://mp.weixin.qq.com/?token=&lang=zh_CN">
                <template #icon>
                    <img src="/assets/icon/wechat.ico" alt="小程序开发">
                </template>
                小程序开发
            </BriefAlink>
        </p>
        <p>
            Test:
            <BriefAlink href="https://vitest.dev/">
                <template #icon>
                    <img src="/assets/icon/Vitest.svg" alt="Vitest">
                </template>
                Vitest
            </BriefAlink>
        </p>
        <p>
            Deploy:
            <BriefAlink href="https://vercel.com/">
                <template #icon>
                    <img src="/assets/icon/vercel.png" alt="Vercel">
                </template>
                Vercel
            </BriefAlink>
        </p>
        <br />
        <span class="text-sm op50" data-immersive-translate-walked="a2a8dff1-2ed6-4514-8b07-7065b7319dc8" data-immersive-translate-paragraph="1"><a target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/" style="color: inherit;" data-immersive-translate-walked="a2a8dff1-2ed6-4514-8b07-7065b7319dc8">CC BY-NC-SA 4.0</a> 2025-PRESENT © Leon Gao</span>
    </article>
</template>

<style scoped lang='scss'>
p {
    mix-blend-mode: difference;
    span {
        display: block;
        color: #999999;
        font-size: 14px;
        mix-blend-mode: difference;
    }
}
</style>