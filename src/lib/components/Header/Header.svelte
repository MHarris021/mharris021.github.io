<script lang="ts">

  import { ToggleMode } from '$lib/components/ToggleMode';
  import { MobileNav } from '$lib/components/MobileNav';
  import type { NavItemProp } from '$lib/components/types';
  import { BreadCrumbs } from '$lib/components/BreadCrumbs';
  import { Separator } from '$lib/components/ui/separator';
  import { Github } from 'lucide-svelte';
  import { IconToolTip } from '$lib/components/ToolTips';
  import { ChangeLogButton } from '$lib/components/ChangeLog';

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
  <div class="relative h-5 items-center ml-auto flex-1 md:grow-0 flex flex-row space-x-4">
    <Separator orientation="vertical" class="absolute hidden md:flex inset-y-0 left-0" />
    <ToggleMode />
    <Separator orientation="vertical" class="bg-accent" />
    <IconToolTip
      url="https://github.com/mharris021/mharris021.github.io" target="_blank" rel="noopener noreferrer" title="Github"
      class="text-primary dark:text-primary-dark"
      srDesc="Github" side="bottom" icon={Github} />
    <Separator orientation="vertical" class="text-primary dark:text-primary-dark" />
    <ChangeLogButton title="Change Log" srDesc="Change Log" />
  </div>
</header>

