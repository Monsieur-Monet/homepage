<script lang="ts">
    import {page} from '$app/stores';
    import Icon from "$lib/Icon.svelte";

    let path;
    function getPath(currentPath) {
        path = currentPath;
    }

    $: getPath($page.url.pathname);
</script>

<div class="flex gap-4">
  <div>
    <a class:active={path==='/'} href="/">
      Home
    </a>
  </div>
  <div>
    <a class:active={path==='/about'} href="/about">
      About
    </a>
  </div>
  <div>
    <a class:active={path==='/contact'} href="/contact">
      Contact
    </a>
  </div>
  <Icon/>
</div>

<style lang="scss">
  .active {
    color: theme("colors.primary");
    font-weight: bold;
  }
</style>

