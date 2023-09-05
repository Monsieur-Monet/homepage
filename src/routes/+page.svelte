<script>
    import Text from "$lib/text.svelte";
    import "../app.css";
    import Container from "../lib/container.svelte";
    import Header from "../lib/header.svelte";
</script>

<Container>
    <Header />
    <Text>
        Hey, ich bin Timo und Frontend Entwickler. Ich liebe neue Technologien
        und bin immer auf der Suche nach neuen Herausforderungen. Meine
        Leidenschaft ist es, komplexe Probleme zu lösen und dabei die
        bestmögliche User Experience zu schaffen.
    </Text>
</Container>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>
