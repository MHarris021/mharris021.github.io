<script lang="ts">

  import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
  import { BookOpenText } from 'lucide-svelte';
  import { getChangeLogState } from './ChangeLogState.svelte';

  let changeLogState = getChangeLogState();

  type Props = {
    title: string;
    srDesc: string;
    side: 'top' | 'right' | 'bottom' | 'left' | undefined;
  };

  let { title, srDesc, side = 'bottom', ...rest }: Props = $props();

  $inspect(changeLogState.open, 'changeLogState.open');
</script>

<Tooltip>
  <TooltipTrigger asChild let:builder>
    <a href={""} use:builder.action {...builder} {...rest} onclick={(event) => {
       event.preventDefault();
       changeLogState.toggle();
      }}
    >
      <BookOpenText class="h-5 w-5 text-primary dark:text-primary-dark" />
      <span class="sr-only">{srDesc}</span>
    </a>
  </TooltipTrigger>
  <TooltipContent side={side}>{title}</TooltipContent>
</Tooltip>