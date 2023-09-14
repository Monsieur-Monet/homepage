<script lang="ts">
  import "../app.css";
  import { page } from "$app/stores";
  import Intro from "$lib/Intro.svelte";
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
  import Container from "$lib/Container.svelte";
  import Spacing from "$lib/Spacing.svelte";

  let path : String;

  function getPath(currentPath : String) {
    path = currentPath;
  }

  $: getPath($page.url.pathname);
</script>

<Header />
{#if path === "/"}
  <Intro />
{/if}
<Container>
  <Spacing />
  <slot />
</Container>
<Footer />
<div id="after-intro" />
