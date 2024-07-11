<script lang="ts">
  import Sun from 'lucide-svelte/icons/sun';
  import Moon from 'lucide-svelte/icons/moon';

  import { mode, toggleMode } from 'mode-watcher';
  import { Switch } from '$lib/components/ui/switch';

  $inspect($mode, 'mode');

</script>

<div class="flex items-center space-x-3">
  <Sun
    class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
  />
  <Switch on:click={toggleMode} />

  <Moon
    class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
  />
  <span class="sr-only">Toggle theme</span>
</div>