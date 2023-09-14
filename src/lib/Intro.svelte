<script lang="ts">
    import Arrow from "$lib/Arrow.svelte";
    import { onMount } from "svelte";

    export let afterIntro: HTMLDivElement;

    const imgUrlIntro = new URL("/src/assets/intro.jpg", import.meta.url).href;
    const imgUrlTimo = new URL("/src/assets/timo.jpg", import.meta.url).href;

    const greetings = ["Hi", "Salut", "Hey", "Hello"] as const;
    let count = 0;
    let headerPosY = 0;
    let header: HTMLDivElement;
    let greetingOpacity: 0 | 1 = 1;

    function scrollIntoView() {
        console.log(afterIntro);
        afterIntro.scrollIntoView({ behavior: "smooth" });
    }

    function scroll() {
        headerPosY = window.scrollY;
    }

    onMount(() => {
        setInterval(function () {
            greetingOpacity = 0;
            setTimeout(function () {
                greetingOpacity = 1;
                count = count === 3 ? 0 : count + 1;
            }, 500);
        }, 5000);
    });
</script>

<svelte:window on:scroll={scroll} />
<svelte:body class="bg-primary" />
<div class="h-[100svh] w-full bg-background" />
<div
    class="h-[100svh] w-full fixed top-0 left-0 z-0 overflow-hidden"
    style="opacity: {1 -
        Math.min(
            headerPosY / header?.getBoundingClientRect().height,
            1
        )}; top: {Math.min(
        headerPosY,
        header?.getBoundingClientRect().height
    )}px"
    bind:this={header}
>
    <div class="h-full">
        <img
            class="h-full w-full object-cover blur"
            src={imgUrlIntro}
            alt="Intro Pic"
        />
        <div class="overlay" />
    </div>
    <a
        href="#after-intro"
        class="absolute block h-20 w-32 bottom-0 left-1/2 -translate-x-1/2 text-white"
        type="button"
        on:click|preventDefault={scrollIntoView}
    >
        <Arrow />
    </a>
</div>

<div class="fixed top-1/4 md:top-1/2 -translate-y-1/2 w-full z-10">
    <div class="container mx-auto px-4">
        <div class="flex gap-4 md:gap-8 flex-col md:flex-row items-start">
            <div
                style="opacity: {greetingOpacity};"
                class="text-white text-[5rem] md:text-[10rem] font-mono mix-blend-difference transition-opacity"
            >
                {greetings[count]}<span class="text-primary">.</span>
            </div>
        </div>
    </div>
</div>

<!-- Photo by <a href="https://unsplash.com/@kirp?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">AndrewKliatskyi</a> on <ahref="https://unsplash.com/photos/ZYuB4x5hA1Q?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> -->
<style lang="scss">
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgb(31, 34, 51);
        background: linear-gradient(
            180deg,
            rgba(31, 34, 51, 1) 0%,
            rgba(0, 212, 255, 0) 100%
        );
    }
</style>
