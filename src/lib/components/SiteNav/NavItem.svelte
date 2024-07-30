<script lang="ts">
  import type { NavItemProp } from '$lib/components/types';
  import { IconToolTip } from '$lib/components/ToolTips';

  type Props = {
    navItem: NavItemProp;
  };

  let { navItem }: Props = $props();

  // $inspect(navItem, 'navItem');

</script>

<IconToolTip {...navItem} side="right"
             class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8" />