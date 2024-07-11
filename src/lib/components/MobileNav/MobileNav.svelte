<script lang="ts">
  import { Sheet, SheetTrigger } from '$lib/components/ui/sheet';
  import { Button } from '$lib/components/ui/button';
  import { PanelLeft } from 'lucide-svelte';
  import { SheetContent } from '$lib/components/ui/sheet/index.js';
  import MobileNavItem from '$lib/components/MobileNav/MobileNavItem.svelte';
  import type { NavItemProp } from '$lib/components/types';

  type Props = {
    navItems: NavItemProp[]
  };

  let { navItems }: Props = $props();

  $inspect(navItems, 'navItems');

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
      {#each navItems as navItem, i}
        <MobileNavItem navItem={navItem} />
      {/each}
    </nav>
  </SheetContent>
</Sheet>