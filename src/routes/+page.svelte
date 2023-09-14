<script>
    import ContentArea from "$lib/ContentArea.svelte";
    const imgUrlTimo = new URL("/src/assets/timo.jpg", import.meta.url).href;
</script>

<ContentArea center={false}>
    <div class="relative w-full h-full">
                <div class="absolute top-2/4 lg:top-1/2 -translate-y-1/3 lg:-translate-y-1/2 md:left-1/2 flex gap-12 flex-col lg:flex-row">
                    <img
                        src={imgUrlTimo}
                        alt="Timo"
                        class="h-32 w-32 lg:h-64 lg:w-64 rounded-3xl"
                    />
                    <p class="text-white">
                        Hi, my name is Timo and I'm a front-end developer. I'm
                        passionate about creating beautiful and user-friendly
                        websites and web applications.
                    </p>
                </div>
    </div>
</ContentArea>
