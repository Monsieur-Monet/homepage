<script>
    import "../app.css";
    import Container from "./container.svelte";
</script>

<Container>
    <div>Hello World</div>
</Container>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>
