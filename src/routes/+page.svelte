<script>
    import ContentArea from "$lib/ContentArea.svelte";
    import Grid from "$lib/Grid.svelte";
    import GridItem from "$lib/GridItem.svelte";
    const imgUrlTimo = new URL("/src/assets/timo.jpg", import.meta.url).href;
</script>

<ContentArea center>
    <div class="mt-[40rem]">
        <Grid>
            <GridItem />
            <GridItem>
                <div class="flex gap-12">
                    <img
                        src={imgUrlTimo}
                        alt="Timo"
                        class="h-32 w-32 md:h-64 md:w-64 rounded-3xl"
                    />
                    <p class="text-white">
                        Hi, my name is Timo and I'm a front-end developer. I'm
                        passionate about creating beautiful and user-friendly
                        websites and web applications.
                    </p>
                </div>
            </GridItem>
        </Grid>
    </div>
</ContentArea>
