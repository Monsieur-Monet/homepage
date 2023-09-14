<script lang="ts">
  import { page } from "$app/stores";
  import Container from "$lib/Container.svelte";
  import Footer from "$lib/Footer.svelte";
  import Header from "$lib/Header.svelte";
  import Intro from "$lib/Intro.svelte";
  import "../app.css";

  let path: String;

  let afterIntro: HTMLDivElement;

  function getPath(currentPath: String) {
    path = currentPath;
  }

  $: getPath($page.url.pathname);
</script>

<Header />
{#if path === "/"}
  <Intro {afterIntro} />
{/if}
<Container>
  <slot />
</Container>
<Footer />
<div bind:this={afterIntro} />
