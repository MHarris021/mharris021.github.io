import type { Component } from 'svelte';
import type { Icon } from 'lucide-svelte';

export type NavItemProp = {
  title: string;
  url: string;
  srDesc: string;
  icon: Component<Icon>;
  active?: boolean;
  separated?: boolean;
};

export type NavItemsProp = {
  items: NavItemProp[];
};

export type Crumb = {
  label: string;
  href?: string;
  id: string;
};
