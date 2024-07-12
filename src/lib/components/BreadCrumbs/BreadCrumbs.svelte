<script lang="ts">

  import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
  } from '$lib/components/ui/breadcrumb';
  import { getBreadCrumbsState } from '$lib/components/BreadCrumbs/BreadCrumbsState.svelte';


  let breadCrumbState = getBreadCrumbsState();

  $inspect(breadCrumbState, 'breadCrumbState');

  let { items, displayLength } = breadCrumbState;

</script>

<Breadcrumb class="hidden md:flex">
  <BreadcrumbList>
    {#if items.length > 0}
      <BreadcrumbItem>
        <BreadcrumbLink href={items[0].href}>
          {items[0].label}
        </BreadcrumbLink>
      </BreadcrumbItem>
      {#if items.length > 1}
        <BreadcrumbSeparator />
        {#if (items.length > displayLength)}
          <BreadcrumbItem>
            <BreadcrumbEllipsis />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {#each items.slice(-displayLength + 1) as item }
            <BreadcrumbItem>
              {#if item.href}
                <BreadcrumbLink href={item.href}>
                  {item.label}
                </BreadcrumbLink>
                <BreadcrumbSeparator />
              {:else}
                <BreadcrumbPage>
                  {item.label}
                </BreadcrumbPage>
              {/if}
            </BreadcrumbItem>
          {/each}
        {:else}
          {#each items.slice(1) as item }
            <BreadcrumbItem>
              {#if item.href}
                <BreadcrumbLink href={item.href}>
                  {item.label}
                </BreadcrumbLink>
                <BreadcrumbSeparator />
              {:else}
                <BreadcrumbPage>
                  {item.label}
                </BreadcrumbPage>
              {/if}
            </BreadcrumbItem>
          {/each}
        {/if}
      {/if}
    {/if}
  </BreadcrumbList>
</Breadcrumb>
