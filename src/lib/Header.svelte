<script>
  import Headline from "./Headline.svelte";
  import Navigation from "$lib/Navigation.svelte";
</script>

<div
  class="flex justify-between h-20 py-4 items-center top-0 w-full container mx-auto px-4 left-1/2 -translate-x-1/2 fixed"
>
  <Headline variant="h2">Timo Scheer</Headline>
  <div class="flex gap-4">
    <Navigation />
  </div>
</div>
