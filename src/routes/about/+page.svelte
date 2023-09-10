<script>
import Content from "$lib/Content.svelte";
import Headline from "$lib/Headline.svelte";
import Spacing from "$lib/Spacing.svelte";
import ContentArea from "$lib/ContentArea.svelte";

const imgUrl = new URL("/src/assets/timo.jpg", import.meta.url).href;
</script>
<ContentArea>
<Content>
  <Headline variant="h2">Über mich</Headline>
  <Spacing/>
  <div class="flex gap-8">
    <img class="rounded-full h-36 w-36" src={imgUrl} alt="Timo"/>
    <p>
      Ich bin Timo und arbeite als Softwareentwickler bei <a class="text-amber-700 hover:border-b-2 border-amber-700"
                                                             href="https://www.bytediver.com">Bytediver</a>.
      In meiner Freizeit beschäftige ich mich mit Webentwicklung.
    </p>
  </div>
</Content>
</ContentArea>
