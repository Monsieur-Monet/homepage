<script lang="ts">
    export let cols: "2" | "3" | "4" | "5" = "2";
</script>

{#if cols === "2"}
    <div class="grid grid-cols-2 gap-4">
        <slot />
    </div>
{:else if cols === "3"}
    <div class="grid grid-cols-3 gap-4">
        <slot />
    </div>
{:else if cols === "4"}
    <div class="grid grid-cols-4 gap-4">
        <slot />
    </div>
{:else if cols === "5"}
    <div class="grid grid-cols-5 gap-4">
        <slot />
    </div>
{/if}
