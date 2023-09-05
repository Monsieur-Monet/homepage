<script lang="ts">
    export let variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" = "h1";
</script>

{#if variant === "h1"}
    <h1 class="text-4xl font-mono">
        <slot />
    </h1>
{:else if variant === "h2"}
    <h2 class="text-3xl font-mono">
        <slot />
    </h2>
{:else if variant === "h3"}
    <h3 class="text-2xl font-mono">
        <slot />
    </h3>
{:else if variant === "h4"}
    <h4 class="text-xl font-mono">
        <slot />
    </h4>
{:else if variant === "h5"}
    <h5 class="text-lg font-mono">
        <slot />
    </h5>
{:else if variant === "h6"}
    <h6 class="text-base font-mono">
        <slot />
    </h6>
{/if}