<script lang="ts">
  import { page } from "$app/stores";
  import Icon from "$lib/Icon.svelte";

  let path: String;

  function getPath(currentPath: string | String) {
    path = currentPath;
  }

  $: getPath($page.url.pathname);
</script>

<div class="flex gap-4">
  <div>
    <a class="text-white" class:active={path === "/"} href="/"> Home </a>
  </div>
  <div>
    <a class="text-white" class:active={path === "/contact"} href="/contact"> Contact </a>
  </div>
  <Icon />
</div>

<style lang="scss">
  .active {
    color: theme("colors.primary");
    font-weight: bold;
  }
</style>
