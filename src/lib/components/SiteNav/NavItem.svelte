<script lang="ts">
  import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip/index.js';
  import type { Icon } from 'lucide-svelte';
  import type { ComponentType } from 'svelte';

  type Props = {
    url: string,
    icon: ComponentType<Icon>,
    srDescription: string,
    content: string
  };

  let { url, link, icon, srDescription, content }: Props = $props();

</script>

<Tooltip>
  <TooltipTrigger asChild let:builder>
    <a href={url}
       class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
       use:builder.action
       {...builder}
    >
      <svelte:component this={icon} class="h-5 w-5 text-primary dark:text-primary-dark" />
      <span class="sr-only">{srDescription}</span>
    </a>
  </TooltipTrigger>
  <TooltipContent side={"right"}>{content}</TooltipContent>
</Tooltip>