<script>
    import "../app.css";
    import Container from "./container.svelte";
    import Header from "./header.svelte";
</script>

<Container>
    <Header />
</Container>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>
