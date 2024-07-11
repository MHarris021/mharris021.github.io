<script lang="ts">
  import { BookOpen, BrainCircuit, Fingerprint, FolderKanban, Home, Settings } from 'lucide-svelte';
  import NavItem from '$lib/components/SiteNav/NavItem.svelte';
</script>

<aside
  class="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background dark:bg-background-dark dark:border-background-dark sm:flex">
  <nav class="flex flex-col items-center gap-4 sm:py-5">
    <NavItem url={'/'} icon={Home} srDescription="Home" content="Home" />
    <NavItem url={'/bio'} icon={Fingerprint} srDescription="Bio" content="Bio" />
    <NavItem url="/blog" icon={BookOpen} srDescription="Blog" content="Blog" />
    <NavItem url="/projects" icon={FolderKanban} srDescription="Projects" content="Projects" />
    <NavItem url="/skills" icon={BrainCircuit} srDescription="Skills" content="Skills" />

  </nav>
  <nav class="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
    <NavItem url={'/settings'} icon={Settings} srDescription="Settings" content="Settings" />
  </nav>
</aside>