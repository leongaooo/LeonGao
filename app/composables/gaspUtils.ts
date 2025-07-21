import { gsap } from 'gsap'; // 引入 gsap 库

// 项目首页Gasp动画函数
export const useProjectIndexGasp = () => {
    const title = document.querySelector('.title');
    if (title) {
        // 初始动画，从左侧 200px 位置开始，透明度为 0，持续 1 秒，缓动效果为 power2.out
        gsap.from(title, {
            x: -200, // 从左侧 200px 位置开始
            delay: 1,
            opacity: 0, // 初始透明度为 0
            duration: 1, // 动画持续时间为 1 秒
            ease: 'power2.out' // 动画缓动效果
        });
    }
    // 选择所有的 card 元素
    const cards = document.querySelectorAll('.card');
    if (cards) {
        cards.forEach((card, index) => {
            // 对每个 card 元素添加从下到上浮动出现且带淡入效果的动画
            gsap.from(card, {
                y: 100, // 从下方 100px 位置开始
                opacity: 0, // 初始透明度为 0
                duration: 1, // 动画持续时间为 1 秒
                ease: 'power2.out', // 动画缓动效果
                delay: index * 0.2 // 每个元素延迟 0.2 秒依次出现
            });
        });
    }
}