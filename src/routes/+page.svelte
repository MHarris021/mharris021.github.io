<script lang="ts">

  import { getBreadCrumbsState } from '$lib/components/BreadCrumbs';
  import { onMount } from 'svelte';

  const breadCrumbState = getBreadCrumbsState();
  onMount(() => {
    breadCrumbState.add({ label: 'Home', href: '/' });
  });

</script>


<title>Techno-Wizardry</title>
<div class="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
  <h1 class="text-4xl font-bold">Welcome to the World of the Techno-Wizard</h1>

  <p>That's me, Michael Harris</p>
</div>
