// uno.config.ts
import { defineConfig } from 'unocss'
import { presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
    ],
    shortcuts: {
        // 自定义快捷方式
    },
    theme: {
        // 主题配置
        colors: {
            // 自定义颜色
        }
    }
})
