<script>
    import Arrow from "$lib/Arrow.svelte";
    import { onMount } from "svelte";
    import Container from "./Container.svelte";

    const imgUrlIntro = new URL("/src/assets/intro.jpg", import.meta.url).href;
    const imgUrlTimo = new URL("/src/assets/timo.jpg", import.meta.url).href;

    function scrollIntoView({ target }) {
        const el = document.querySelector(target.getAttribute("href"));
        if (!el) return;
        el.scrollIntoView({
            behavior: "smooth",
            block: "end",
        });
        console.log(el);
    }

    onMount(() => {
        let count = 0;
        let wordsArray = ["Hi", "Salut", "Hey", "Hello"];
        setInterval(function () {
            if (count < 4) {
                document.getElementById("greeting").style.opacity = "0";
                setTimeout(function () {
                    document.getElementById("greeting").innerHTML =
                        wordsArray.at(count);
                    document.getElementById("greeting").style.opacity = "1";
                    count++;

                    if (count === 4) {
                        count = 0;
                    }
                }, 500);
            }
        }, 5000);
    });
</script>

<div class="h-[100svh] w-full relative bg-black">
    <div class="fixed top-1/2 -translate-y-1/2 w-full z-10">
        <div class="container mx-auto px-4">
            <div class="flex gap-4 md:gap-8 flex-col md:flex-row items-center">
                <div
                    id="greeting"
                    class="text-white text-[5rem] md:text-[10rem] font-mono mix-blend-difference transition-opacity"
                >
                    Hello
                </div>
            </div>
        </div>
    </div>
    <img
        class="h-full w-full object-cover blur"
        src={imgUrlIntro}
        alt="Intro Pic"
    />
    <a
        href="#after-intro"
        class="absolute block h-20 w-32 bottom-0 left-1/2 -translate-x-1/2 text-white"
        type="button"
        on:click|preventDefault={scrollIntoView}
    >
        <Arrow />
    </a>
</div>

<!-- Photo by <a href="https://unsplash.com/@kirp?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">AndrewKliatskyi</a> on <ahref="https://unsplash.com/photos/ZYuB4x5hA1Q?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> -->
