<script lang="ts">
  export let center: Boolean;
</script>

<div class="h-[calc(100svh-2.5rem)]" class:m-auto={center}>
  <slot />
</div>
