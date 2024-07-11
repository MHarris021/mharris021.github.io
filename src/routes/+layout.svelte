<script lang="ts">
  import '../app.css';
  import { ModeWatcher } from 'mode-watcher';
  import { SiteNav } from '$lib/components/SiteNav';
  import { Header } from '$lib/components/Header';
  import { BookOpen, BrainCircuit, Fingerprint, FolderKanban, Home } from 'lucide-svelte';
  import type { NavItemProp } from '$lib/components/types';

  let navItems: NavItemProp[] = [
    { url: '/', icon: Home, srDesc: 'Home', title: 'Home' },
    { url: '/bio', icon: Fingerprint, srDesc: 'Bio', title: 'Bio' },
    { url: '/blog', icon: BookOpen, srDesc: 'Blog', title: 'Blog' },
    { url: '/projects', icon: FolderKanban, srDesc: 'Projects', title: 'Projects' },
    { url: '/skills', icon: BrainCircuit, srDesc: 'Skills', title: 'Skills' }
  ];
</script>

<ModeWatcher />
<div class="flex min-h-screen w-full flex-col bg-muted/40">
  <SiteNav navItems={navItems} />
  <div class="flex flex-col sm:gap-4 sm:pl-14">
    <Header navItems={navItems} />
    <main
      class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3"
    >
      <slot></slot>
    </main>
  </div>
</div>