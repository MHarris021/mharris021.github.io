import { getContext, setContext } from 'svelte';

export class ChangeLogState {
  open = $state<boolean>(false);
  content = $state<string>('');
  title = $state<string>('Changelog');

  constructor(content: string) {
    this.content = content;
  }

  toggle() {
    this.open = !this.open;
  }
}

export const CHANGELOG_CONTEXT = Symbol('changelog');

export function setChangeLogState(content: string) {
  return setContext(CHANGELOG_CONTEXT, new ChangeLogState(content));
}

export function getChangeLogState() {
  return getContext<ReturnType<typeof setChangeLogState>>(CHANGELOG_CONTEXT);
}
