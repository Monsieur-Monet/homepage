<script>
    import Header from "$lib/Header.svelte";
    import Spacing from "$lib/Spacing.svelte";
    import Container from "$lib/Container.svelte";
    import Footer from "$lib/Footer.svelte";
    import "../app.css";
</script>
<Header/>
<Container>
  <Spacing/>
    <slot/>
</Container>
<Footer/>

