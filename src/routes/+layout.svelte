<script lang="ts">
  import '../app.css';
  import { ModeWatcher } from 'mode-watcher';
  import { SiteNav } from '$lib/components/SiteNav';
  import { Header } from '$lib/components/Header';
  import {
    BookOpen,
    BrainCircuit,
    Contact,
    Fingerprint,
    FolderKanban,
    GitFork,
    Home,
    MessageCircleMore,
    Settings
  } from 'lucide-svelte';
  import type { NavItemProp } from '$lib/components/types';
  import { setBreadCrumbsState } from '$lib/components/BreadCrumbs';
  import { ChangeLog, setChangeLogState } from '$lib/components/ChangeLog';

  let navItems: NavItemProp[] = [
    { url: '/', icon: Home, srDesc: 'Home', title: 'Home' },
    { url: '/about', icon: Fingerprint, srDesc: 'About', title: 'About' },
    { url: '/blog', icon: BookOpen, srDesc: 'Blog', title: 'Blog' },
    { url: '/contact', icon: Contact, srDesc: 'Contact', title: 'Contact' },
    { url: '/projects', icon: FolderKanban, srDesc: 'Projects', title: 'Projects' },
    { url: '/repos', icon: GitFork, srDesc: 'Repos', title: 'Repos' },
    { url: '/settings', icon: Settings, srDesc: 'Settings', title: 'Settings', separated: true },
    { url: '/skills', icon: BrainCircuit, srDesc: 'Skills', title: 'Skills' },
    { url: '/social', icon: MessageCircleMore, srDesc: 'Social', title: 'Social' }
  ];

  let breadCrumbsState = setBreadCrumbsState();
  $inspect(breadCrumbsState, 'breadCrumbsState root layout');

  let changeLogState = setChangeLogState('Stuff goes here');
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
      <ChangeLog />
    </main>
  </div>
</div>