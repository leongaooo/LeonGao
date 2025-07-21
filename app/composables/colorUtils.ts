// 使用可变化的颜色
export function useColorChanger() {
    const color = ref('');
    // 删除原有的颜色数组
    // 修改为使用色相值来动态生成颜色
    let hue = 0;

    const changeColor = () => {
        // 使用 HSL 颜色模式，色相值每 500ms 增加 1 度
        color.value = `hsl(${hue}, 100%, 50%)`;
        hue = (hue + 1) % 360;
    };

    onMounted(() => {
        const intervalId = setInterval(changeColor, 500);

        onUnmounted(() => {
            clearInterval(intervalId);
        });
    });

    return {
        color
    };
}