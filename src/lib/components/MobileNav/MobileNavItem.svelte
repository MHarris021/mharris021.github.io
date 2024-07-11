<script lang="ts">
  import type { NavItemProp } from '$lib/components/types';

  type Props = {
    navItem: NavItemProp;
  };

  let { navItem }: Props = $props();

  // $inspect(navItem, 'navItem');

  let { url, icon, title } = navItem;
</script>

<a
  href={url}
  class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
>
  <svelte:component this={icon} class="h-5 w-5" />
  <span>{title}</span>
</a>