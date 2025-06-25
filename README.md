# 🚀 Nuxt 项目: Leon Gao 的前端世界

## 🌟 项目概述
本项目是由前端工程师 Leon Gao 打造的 Nuxt 应用，融合了 Three.js 进行 3D 场景渲染，结合 GSAP 实现炫酷动画效果，为用户带来沉浸式的前端体验。项目集成了多种现代前端技术，旨在展示专业的 Web 开发能力。

## 💻 技术栈
![Nuxt](https://img.shields.io/badge/Nuxt-3.17.5-00DC82?style=for-the-badge&logo=nuxt.js) ![Vue](https://img.shields.io/badge/Vue-3.5.16-4FC08D?style=for-the-badge&logo=vue.js) ![Three.js](https://img.shields.io/badge/Three.js-0.177.0-000000?style=for-the-badge&logo=three.js) ![GSAP](https://img.shields.io/badge/GSAP-3.13.0-88CE02?style=for-the-badge&logo=greensock) ![UnoCSS](https://img.shields.io/badge/UnoCSS-66.3.1-333333?style=for-the-badge)
- **Nuxt 3**: 用于构建高性能的 SSR 应用。
- **Vue 3**: 作为核心框架，实现组件化开发。
- **Three.js**: 强大的 3D 渲染库，用于创建地形山脉和天空盒 UV 动画等 3D 场景。
- **GSAP**: 专业的动画库，为页面元素添加流畅的动画效果。
- **UnoCSS**: 原子化 CSS 框架，快速实现样式设计。

### 3D 场景展示
- **地形山脉**：使用 `Three.js` 和 `simplex-noise` 生成平滑的 3D 地形。
- **天空盒 UV 动画**：实现动态的天空效果，增强场景的真实感。

### 动画效果
- 使用 `GSAP` 为项目首页标题添加从左侧淡入的动画效果。

## 📂 项目结构
```
├── .gitignore
├── README.md
├── app.vue
├── assets/
│   ├── css/
│   ├── font/
│   ├── icon/
│   └── img/
├── components/
│   └── Brief/
├── composables/
│   ├── Three.ts
│   ├── colorUtils.ts
│   └── gaspUtils.ts
├── nuxt.config.ts
├── package.json
├── pages/
│   ├── Projects/
│   └── index.vue
├── pnpm - lock.yaml
├── public/
├── server/
├── tsconfig.json
├── uno.config.ts
└── utils/
```
## 🙌 贡献指南
```
如果你想为这个项目做出贡献，请遵循以下步骤：
1. Fork 本仓库。
2. 创建你的特性分支 ( git checkout -b feature/AmazingFeature )。
3. 提交你的更改 ( git commit -m 'Add some AmazingFeature' )。
4. 将你的分支推送到远程仓库 ( git push origin feature/AmazingFeature )。
5. 打开一个 Pull Request。
```