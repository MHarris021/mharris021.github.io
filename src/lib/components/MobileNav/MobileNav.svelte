<script lang="ts">
  import { Sheet, SheetTrigger } from '$lib/components/ui/sheet';
  import { Button } from '$lib/components/ui/button';
  import { PanelLeft } from 'lucide-svelte';
  import { SheetContent } from '$lib/components/ui/sheet/index.js';
  import MobileNavItem from '$lib/components/MobileNav/MobileNavItem.svelte';
  import type { NavItemProp } from '$lib/components/types';
  import { Separator } from '$lib/components/ui/separator';

  type Props = {
    navItems: NavItemProp[]
  };

  let { navItems }: Props = $props();

  $inspect(navItems, 'navItems');

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

<Sheet>
  <SheetTrigger asChild let:builder>
    <Button builders={[builder]} size="icon" variant="outline" class="sm:hidden">
      <PanelLeft class="h-5 w-5" />
      <span class="sr-only">Toggle Navigation</span>
    </Button>
  </SheetTrigger>
  <SheetContent side="left" class="sm:max-w-xs">
    <nav class="grid gap-6 text-lg font-medium">
      {#each mainItems as navItem, i}
        <MobileNavItem navItem={navItem} />
      {/each}
    </nav>
    <Separator class="my-4" />
    <nav class="grid gap-6 text-lg font-medium">
      {#each separatedItems as navItem, i}
        <MobileNavItem navItem={navItem} />
      {/each}
    </nav>
  </SheetContent>
</Sheet>