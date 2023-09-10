<script lang="ts">
    export let variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" = "h1";
    export let align: "left" | "center" | "right" = "left";

</script>

{#if variant === "h1"}
  <h1 class="text-4xl font-mono"
      class:text-left={align === 'left'}
      class:text-center={align === 'center'}
      class:text-right={align === 'right'}>
    <slot/>
  </h1>
{:else if variant === "h2"}
  <h2 class="text-3xl font-mono"
      class:text-left={align === 'left'}
      class:text-center={align === 'center'}
      class:text-right={align === 'right'}>
    <slot/>
  </h2>
{:else if variant === "h3"}
  <h3 class="text-2xl font-mono"
      class:text-left={align === 'left'}
      class:text-center={align === 'center'}
      class:text-right={align === 'right'}>
    <slot/>
  </h3>
{:else if variant === "h4"}
  <h4 class="text-xl font-mono"
      class:text-left={align === 'left'}
      class:text-center={align === 'center'}
      class:text-right={align === 'right'}>
    <slot/>
  </h4>
{:else if variant === "h5"}
  <h5 class="text-lg font-mono"
      class:text-left={align === 'left'}
      class:text-center={align === 'center'}
      class:text-right={align === 'right'}>
    <slot/>
  </h5>
{:else if variant === "h6"}
  <h6 class="text-base font-mono text-{align}"
      class:text-left={align === 'left'}
      class:text-center={align === 'center'}
      class:text-right={align === 'right'}>
    <slot/>
  </h6>
{/if}
