<script lang="ts">
  import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip/index.js';
  import type { NavItemProp } from '$lib/components/types';

  type Props = {
    navItem: NavItemProp;
  };

  let { navItem }: Props = $props();

  // $inspect(navItem, 'navItem');

  let { url, icon, title, srDesc } = navItem;

</script>

<Tooltip>
  <TooltipTrigger asChild let:builder>
    <a href={url}
       class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
       use:builder.action
       {...builder}
    >
      <svelte:component this={icon} class="h-5 w-5 text-primary dark:text-primary-dark" />
      <span class="sr-only">{srDesc}</span>
    </a>
  </TooltipTrigger>
  <TooltipContent side={"right"}>{title}</TooltipContent>
</Tooltip>