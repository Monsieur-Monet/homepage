<script lang="ts">
  export let center : Boolean;
</script>

<div class="h-[100svh]" class:m-auto={center}>
  <slot />
</div>
