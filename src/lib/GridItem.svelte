<script lang="ts">
    export let span: "1" | "2" | "3" | "4" = "1";
</script>

{#if span === "1"}
    <div class="col-span-1">
        <slot />
    </div>
{:else if span === "2"}
    <div class="col-span-2">
        <slot />
    </div>
{:else if span === "3"}
    <div class="col-span-3">
        <slot />
    </div>
{:else if span === "4"}
    <div class="col-span-4">
        <slot />
    </div>
{/if}
