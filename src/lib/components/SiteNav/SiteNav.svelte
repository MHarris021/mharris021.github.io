<script lang="ts">
  import { Settings } from 'lucide-svelte';
  import NavItem from '$lib/components/SiteNav/NavItem.svelte';
  import type { NavItemProp } from '$lib/components/types';

  type Props = {
    navItems: NavItemProp[];
  };

  let { navItems }: Props = $props();
</script>

<aside
  class="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background dark:bg-background-dark dark:border-background-dark sm:flex">
  <nav class="flex flex-col items-center gap-4 sm:py-5">
    {#each navItems as navItem (navItem.url)}
      <NavItem {navItem} />
    {/each}
  </nav>
  <nav class="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
    <NavItem navItem={{url: '/settings', icon: Settings, srDesc:'Settings', title:'Settings'}} />
  </nav>
</aside>