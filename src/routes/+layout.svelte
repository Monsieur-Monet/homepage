<script>
    import Header from "$lib/Header.svelte";
    import Spacing from "$lib/Spacing.svelte";
    import Container from "$lib/Container.svelte";
</script>
<Container>
  <Header/>
  <Spacing/>
  <slot/>
</Container>
