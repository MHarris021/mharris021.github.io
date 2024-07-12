import { getContext, setContext } from 'svelte';
import type { Crumb } from '$lib/components/types';
import { nanoid } from 'nanoid';

export class BreadCrumbsState {
  items = $state<Crumb[]>([]);
  displayLength: number = $state<number>(0);

  constructor(displayLength: number) {
    this.displayLength = displayLength;
  }

  add({ label, href }: { label: string; href?: string }) {
    if (href?.startsWith('/')) {
      this.items.push({ label, href, id: nanoid() });
    } else {
      this.push({ label, href });
    }
  }

  private push({ label, href }: { label: string; href?: string }) {
    const adjustedHref = href ? `${this.items[this.items.length - 1].href}/${href}` : '';
    const item = { label, adjustedHref, id: nanoid() };
    this.items.push(item);
  }

  pop() {
    this.items.pop();
  }

  remove(id: string) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  clear() {
    this.items = [];
  }

  get length() {
    return this.items.length;
  }

  setDisplayLength(length: number) {
    this.displayLength = length;
  }
}

export const BREADCRUMBS_CONTEXT = Symbol('breadcrumbs');

export function setBreadCrumbsState(displayLength = 3) {
  return setContext(BREADCRUMBS_CONTEXT, new BreadCrumbsState(displayLength));
}

export function getBreadCrumbsState() {
  return getContext<ReturnType<typeof setBreadCrumbsState>>(BREADCRUMBS_CONTEXT);
}
