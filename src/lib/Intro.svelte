<script>
    import Arrow from "$lib/Arrow.svelte";
    import Svg from "$lib/Svg.svelte";
    import {onMount} from "svelte";

    const imgUrl = new URL("/src/assets/intro.jpg", import.meta.url).href;

    function scrollIntoView({target}) {
        const el = document.querySelector(target.getAttribute('href'));
        if (!el) return;
        el.scrollIntoView({
            behavior: 'smooth',
            block: 'end'

        });
        console.log(el)
    }

    onMount(() => {
        let count = 0
        let wordsArray = ["Hi", "Salut", "Hey", "Hello"];
        setInterval(function () {
            if (count < 4) {
                document.getElementById("greeting").innerHTML = wordsArray.at(count)
                count++

                if (count === 4) {
                    count = 0;
                }
            }
        }, 2000)
    })
</script>


<div class="h-[100svh] w-full relative bg-black">
  <div id="greeting"
       class="fixed left-10 top-1/2 -translate-y-1/2 text-white text-[5rem] md:text-[10rem] font-mono mix-blend-difference">
    Hello
  </div>
  <img class="h-full w-full object-cover" src={imgUrl} alt="Timo"/>
  <a href="#after-intro" class="absolute block h-20 w-32 bottom-0 left-1/2 -translate-x-1/2 text-white" type="button"
     on:click|preventDefault={scrollIntoView}>
    <Arrow/>
  </a>
</div>

<!-- Photo by <a href="https://unsplash.com/@kirp?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">AndrewKliatskyi</a> on <ahref="https://unsplash.com/photos/ZYuB4x5hA1Q?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> -->
