<script>
    import Headline from "./headline.svelte";
import Icon from "./icon.svelte";
    import MenuIcon from "./menu-icon.svelte";


</script>
<div class="flex justify-between h-20 py-4 items-center">
    <Headline variant="h2">Timo Scheer</Headline>
    <div class="flex gap-4">
        <div><Icon/></div>
        <div class="flex items-center"><MenuIcon/></div>
    </div>
</div>
