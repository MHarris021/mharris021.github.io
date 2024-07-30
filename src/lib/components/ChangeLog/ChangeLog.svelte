<script lang="ts">
  import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '$lib/components/ui/dialog';
  import { getChangeLogState } from '$lib/components/ChangeLog/ChangeLogState.svelte';
  import { ScrollArea } from '$lib/components/ui/scroll-area';
  import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle
  } from '$lib/components/ui/drawer';
  import { Button } from '$lib/components/ui/button';


  let changeLogState = getChangeLogState();

  //const isDesktop = mediaQuery('(min-width: 768px)');
  const isDesktop = false;
</script>

{#if isDesktop}
  <Dialog bind:open={changeLogState.open}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{changeLogState.title}</DialogTitle>
        <DialogDescription>
          <ScrollArea class="h-96 w-full whitespace-nowrap rounded-md border">
            {changeLogState.content}
          </ScrollArea>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
{:else}
  <Drawer bind:open={changeLogState.open}>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>{changeLogState.title}</DrawerTitle>
      </DrawerHeader>
      <DrawerFooter>
        <DrawerDescription>
          <ScrollArea class="h-96 w-full whitespace-nowrap rounded-md border">
            {changeLogState.content}
          </ScrollArea>
        </DrawerDescription>
        <DrawerClose asChild let:builder>
          <Button variant="outline" builders={[builder]}>Close</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
{/if}
