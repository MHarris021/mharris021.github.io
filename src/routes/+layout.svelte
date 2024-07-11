<script lang="ts">
  import '../app.css';
  import { ModeWatcher } from 'mode-watcher';
  import { ToggleMode } from '$lib/components/toggleMode/index.js';
</script>

<ModeWatcher />

<slot name="header">
  <ToggleMode />
</slot>

<slot></slot>
