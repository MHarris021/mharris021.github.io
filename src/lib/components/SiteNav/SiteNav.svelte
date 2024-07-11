<script lang="ts">
  import NavItem from '$lib/components/SiteNav/NavItem.svelte';
  import type { NavItemProp } from '$lib/components/types';
  import { Separator } from '$lib/components/ui/separator';

  type Props = {
    navItems: NavItemProp[];
  };

  let { navItems }: Props = $props();
  let separatedItems: NavItemProp[] = [];
  let mainItems: NavItemProp[] = [];
  navItems.forEach((navItem, i) => {
    if (navItem.separated) {
      separatedItems.push(navItem);
    } else {
      mainItems.push(navItem);
    }
  });
</script>

<aside
  class="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background dark:bg-background-dark dark:border-background-dark sm:flex">
  <nav class="flex flex-col flex-1 items-center gap-4 sm:py-5">
    {#each mainItems as navItem (navItem.url)}
      <NavItem {navItem} />
    {/each}
  </nav>
  <Separator class="my-4 justify-end" />
  <nav class="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
    {#each separatedItems as navItem (navItem.url)}
      <NavItem {navItem} />
    {/each}
  </nav>
</aside>