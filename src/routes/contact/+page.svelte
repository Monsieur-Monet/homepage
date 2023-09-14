<script>
  import { base } from "$app/paths";
  import ContentArea from "$lib/ContentArea.svelte";
  import Headline from "$lib/Headline.svelte";
  import Spacing from "$lib/Spacing.svelte";
</script>

<ContentArea center={false}>
  <Spacing />
  <Headline variant="h2">Contact Me</Headline>
  <p class="mt-10 text-white">
    If you want to contact me about anything you can write me an e-mail
  </p>
  <form
    class="flex mt-10 flex-col gap-4"
    action="https://api.staticforms.xyz/submit"
    method="post"
  >
    <input
      type="hidden"
      name="accessKey"
      value="203f6493-cde5-49d7-9bf2-e482923e9382"
    />
    <div class="flex flex-col gap-1">
      <label class="text-white" for="name"
        >Name<span class="text-primary">*</span></label
      >
      <input class="form-input" type="text" name="name" />
    </div>
    <div class="flex flex-col gap-1">
      <label class="text-white" for="email"
        >Email<span class="text-primary">*</span></label
      >
      <input class="form-input" type="email" name="email" />
    </div>
    <div class="flex flex-col gap-1">
      <label class="text-white" for="subject"
        >Subject<span class="text-primary">*</span></label
      >
      <input class="form-input" type="text" name="subject" />
    </div>
    <div class="flex flex-col gap-1">
      <label for="message" class="text-white"
        >Message<span class="text-primary">*</span></label
      >
      <textarea class="form-input resize-none h-40" name="message" />
    </div>
    <input type="hidden" name="redirectTo" value="https://www.tscheer.dev/success" />
    <input type="text" name="honeypot" style="display: none;" />
    <input class="button" type="submit" value="Submit" />
  </form>
</ContentArea>

<style lang="scss">
  .form-input {
    background-color: theme("colors.white");
    color: theme("colors.black");
    padding: 0.5rem;
    border-radius: 0.25rem;
  }

  .button {
    width: 5rem;
    margin-left: auto;
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
