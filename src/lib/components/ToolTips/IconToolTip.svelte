<script lang="ts">
  import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
  import type { Component } from 'svelte';
  import type { Icon } from 'lucide-svelte';

  type Props = {
    url: string;
    icon: Component<Icon>;
    title: string;
    srDesc: string;
    side: 'top' | 'right' | 'bottom' | 'left';
    target: '_blank' | '_self' | '_top' | '_parent' | undefined;
  };

  let { url, target = '_self', icon, title, srDesc, side, ...rest }: Props = $props();

</script>

<Tooltip>
  <TooltipTrigger asChild let:builder>
    <a href={url}
       target={target}
       use:builder.action
       {...builder}
       {...rest}
    >
      <svelte:component this={icon} class="h-5 w-5 text-primary dark:text-primary-dark" />
      <span class="sr-only">{srDesc}</span>
    </a>
  </TooltipTrigger>
  <TooltipContent side={side}>{title}</TooltipContent>
</Tooltip>