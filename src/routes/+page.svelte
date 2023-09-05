<script>
    import GridItem from "$lib/GridItem.svelte";
    import Grid from "$lib/Grid.svelte";
    import Text from "$lib/Text.svelte";
    import "../app.css";
    import Container from "../lib/Container.svelte";
    import Header from "../lib/Header.svelte";
</script>

<Container>
    <Header />
    <Grid cols="3">
        <GridItem span="2">
            <Text>
                Hey, ich bin Timo und Frontend Entwickler. Ich liebe neue
                Technologien und bin immer auf der Suche nach neuen
                Herausforderungen. Meine Leidenschaft ist es, komplexe Probleme
                zu lösen und dabei die bestmögliche User Experience zu schaffen.
                Ich bin ein Teamplayer und mag es, mit anderen
                zusammenzuarbeiten. Ich bin ein sehr neugieriger Mensch und
                lerne gerne neue Dinge. Ich bin sehr selbstkritisch und versuche
                immer, mich zu verbessern. Ich bin ein sehr kreativer Mensch und
                liebe es zu zeichnen.
                <br /> <br />
                Dieser dumme Text ist nur hier, um die Seite zu füllen. Ich habe
                keine Ahnung, was ich sonst schreiben soll.
            </Text>
        </GridItem>
        <GridItem span="1">Tolle Scheiße hier</GridItem>
    </Grid>
</Container>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>
