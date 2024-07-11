import type { ComponentType } from 'svelte';
import type { Icon } from 'lucide-svelte';

export type NavItemProp = {
  title: string;
  url: string;
  srDesc: string;
  icon: ComponentType<Icon>;
  active?: boolean;
  separated?: boolean;
};

export type NavItemsProp = {
  items: NavItemProp[];
};
