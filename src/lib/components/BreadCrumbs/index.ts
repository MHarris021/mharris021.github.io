import Root from './BreadCrumbs.svelte';
import {
  BREADCRUMBS_CONTEXT,
  BreadCrumbsState,
  getBreadCrumbsState,
  setBreadCrumbsState
} from '$lib/components/BreadCrumbs/BreadCrumbsState.svelte';

export {
  Root,
  //
  Root as BreadCrumbs,
  BreadCrumbsState,
  getBreadCrumbsState,
  setBreadCrumbsState,
  BREADCRUMBS_CONTEXT
};
