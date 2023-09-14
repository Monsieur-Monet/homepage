<script>
    import ContentArea from "$lib/ContentArea.svelte";
    import Headline from "$lib/Headline.svelte";
    import Spacing from "$lib/Spacing.svelte";
</script>

<ContentArea center={true}>
    <Spacing />
    <Headline variant="h1">Thank you for your Message!</Headline>
    <Spacing />
    <div class="flex justify-center">
        <a class="button" href="/">Back to Landingpage</a>
    </div>
</ContentArea>

<style lang="scss">
    .button {
        margin: auto;
        background-color: theme("colors.primary");
        color: theme("colors.white");
        padding: 0.5rem;
        border-radius: 0.25rem;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        font-weight: bold;
        &:hover {
            background-color: theme("colors.white");
            color: theme("colors.primary");
        }
    }
</style>
