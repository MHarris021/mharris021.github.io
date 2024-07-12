<script lang="ts">
  import { getBreadCrumbsState } from '$lib/components/BreadCrumbs';
  import { onMount } from 'svelte';

  let breadCrumbState = getBreadCrumbsState();

  $inspect(breadCrumbState, 'breadCrumbState about page');
  onMount(() => {
    breadCrumbState.add({ label: 'About', href: '/about' });
  });
  

</script>