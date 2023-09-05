<script lang="ts">
    export let variant: "1/1" | "1/2" | "1/3" | "1/4" = "1/1";
</script>

{#if variant === "1/1"}
    <div class="grid grid-cols-2 gap-4">
        <slot />
    </div>
{:else if variant === "1/2"}
    <div class="grid grid-cols-3 gap-4">
        <slot />
    </div>
{:else if variant === "1/3"}
    <div class="grid grid-cols-4 gap-4">
        <slot />
    </div>
{:else if variant === "1/4"}
    <div class="grid grid-cols-5 gap-4">
        <slot />
    </div>
{/if}
