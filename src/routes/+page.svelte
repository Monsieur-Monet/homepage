<script>
    import "../app.css";
    import Container from "../lib/Container.svelte";
    import Header from "../lib/Header.svelte";
    import Spacing from "$lib/Spacing.svelte";
    import Headline from "$lib/Headline.svelte";

    const imgUrl = new URL("../assets/timo.jpg", import.meta.url).href;
</script>

<Container>
    <Header />
    <Spacing />
    <Headline center="true" variant="h1" >Hey, hier entsteht eine tolle Website 🚀</Headline>
</Container>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>
