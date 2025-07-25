<template>
    <div ref="containerRef" class="w-full h-full relative">
        <canvas ref="canvasRef" class="pointer-events-none absolute z-1" :width="canvasSize.width"
            :height="canvasSize.height" />
        <div class="absolute top-0 left-0 w-full h-full z-2">
            <slot>

            </slot>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, toRefs, computed } from "vue";

interface FlickeringGridProps {
    squareSize?: number;
    gridGap?: number;
    flickerChance?: number;
    color?: string;
    width?: number;
    height?: number;
    class?: string;
    maxOpacity?: number;
}

const props = withDefaults(defineProps<FlickeringGridProps>(), {
    squareSize: 4,
    gridGap: 6,
    flickerChance: 0.3,
    color: "rgb(0, 0, 0)",
    maxOpacity: 0.3,
});

const { squareSize, gridGap, flickerChance, color, maxOpacity, width, height } = toRefs(props);

const containerRef = ref<HTMLDivElement>();
const canvasRef = ref<HTMLCanvasElement>();
const context = ref<CanvasRenderingContext2D>();

const isInView = ref(false);
const canvasSize = ref({ width: 0, height: 0 });

// 生成一个介于 150 到 220 之间的随机数，确保颜色不太深也不太亮
function getRandomPaleValue() {

    return Math.floor(Math.random() * 71) + 150;
}

const computedColor = () => {
    // if (!context.value) return "rgba(255, 0, 0,";

    // const hex = color.value.replace(/^#/, "");
    // // console.log(color.value);
    // const bigint = Number.parseInt(hex, 16);
    // const r = (bigint >> 16) & 255;
    // const g = (bigint >> 8) & 255;
    // const b = bigint & 255;


    // 随机生成 RGB 值
    const r = getRandomPaleValue();
    const g = getRandomPaleValue();
    const b = getRandomPaleValue();
    return `rgba(${r}, ${g}, ${b},`;
};

// 存储当前颜色
const currentColor = ref<string>(computedColor());

function setupCanvas(
    canvas: HTMLCanvasElement,
    width: number,
    height: number,
): {
    cols: number;
    rows: number;
    squares: Float32Array;
    dpr: number;
} {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const cols = Math.floor(width / (squareSize.value + gridGap.value));
    const rows = Math.floor(height / (squareSize.value + gridGap.value));

    const squares = new Float32Array(cols * rows);
    for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity.value;
    }
    return { cols, rows, squares, dpr };
}

function updateSquares(squares: Float32Array, deltaTime: number) {
    for (let i = 0; i < squares.length; i++) {
        if (Math.random() < flickerChance.value * deltaTime) {
            squares[i] = Math.random() * maxOpacity.value;
        }
    }
}

function drawGrid(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    cols: number,
    rows: number,
    squares: Float32Array,
    dpr: number,
) {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "transparent";
    ctx.fillRect(0, 0, width, height);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            const opacity = squares[i * rows + j];
            ctx.fillStyle = `${currentColor.value}${opacity})`;
            ctx.fillRect(
                i * (squareSize.value + gridGap.value) * dpr,
                j * (squareSize.value + gridGap.value) * dpr,
                squareSize.value * dpr,
                squareSize.value * dpr,
            );
        }
    }
}

const gridParams = ref<ReturnType<typeof setupCanvas>>();

function updateCanvasSize() {
    const newWidth = width.value || containerRef.value!.clientWidth;
    const newHeight = height.value || containerRef.value!.clientHeight;
    console.log(newWidth, newHeight);

    canvasSize.value = { width: newWidth, height: newHeight };
    gridParams.value = setupCanvas(canvasRef.value!, newWidth, newHeight);
}

let animationFrameId: number | undefined;
let resizeObserver: ResizeObserver | undefined;
let intersectionObserver: IntersectionObserver | undefined;
let lastTime = 0;

function animate(time: number) {
    if (!isInView.value) return;

    const deltaTime = (time - lastTime) / 1000;
    lastTime = time;

    updateSquares(gridParams.value!.squares, deltaTime);
    drawGrid(
        context.value!,
        canvasRef.value!.width,
        canvasRef.value!.height,
        gridParams.value!.cols,
        gridParams.value!.rows,
        gridParams.value!.squares,
        gridParams.value!.dpr,
    );
    animationFrameId = requestAnimationFrame(animate);
}

onMounted(() => {
    if (!canvasRef.value || !containerRef.value) return;
    context.value = canvasRef.value.getContext("2d")!;
    if (!context.value) return;

    updateCanvasSize();

    resizeObserver = new ResizeObserver(() => {
        updateCanvasSize();
    });
    intersectionObserver = new IntersectionObserver(
        ([entry]) => {
            isInView.value = entry!.isIntersecting;
            animationFrameId = requestAnimationFrame(animate);
        },
        { threshold: 0 },
    );

    resizeObserver.observe(containerRef.value);
    intersectionObserver.observe(canvasRef.value);

    // 1.5s后插槽加载完毕重新更新容器大小
    setTimeout(() => {
        const article = document.querySelector("article")
        containerRef.value!.style.height = `${article?.clientHeight || 0}px`;
        updateCanvasSize();
    }, 1500);

    // 每1秒更换一次颜色
    setInterval(() => {
        currentColor.value = computedColor();
    }, 888);
});

onBeforeUnmount(() => {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
    resizeObserver?.disconnect();
    intersectionObserver?.disconnect();
});
</script>