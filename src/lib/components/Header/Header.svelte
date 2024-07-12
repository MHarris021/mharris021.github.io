<script lang="ts">

  import { ToggleMode } from '$lib/components/ToggleMode';
  import { MobileNav } from '$lib/components/MobileNav';
  import type { NavItemProp } from '$lib/components/types';
  import { BreadCrumbs } from '$lib/components/BreadCrumbs';

  type Props = {
    navItems: NavItemProp[];
  };

  let { navItems }: Props = $props();

</script>

<header
  class="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6"
>
  <MobileNav navItems={navItems} />
  <BreadCrumbs />
  <div class="relative ml-auto flex-1 md:grow-0">
    <ToggleMode />
  </div>
</header>

