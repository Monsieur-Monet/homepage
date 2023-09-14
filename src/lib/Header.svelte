<script lang="ts">
  import Headline from "./Headline.svelte";
  import Navigation from "$lib/Navigation.svelte";
  import { page } from "$app/stores";

  let path: String;

  function getPath(currentPath: string | String) {
    path = currentPath;
  }

  $: getPath($page.url.pathname);
</script>

<div
  class="flex justify-between h-20 p-4 z-10 items-center top-0 w-full container mx-auto left-1/2 -translate-x-1/2 fixed"
  class:bg-background={path !== "/"}
>
  <Headline variant="h2">Timo Scheer</Headline>
  <div class="flex gap-4">
    <Navigation />
  </div>
</div>
