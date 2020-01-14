import { createTypedHooks } from 'easy-peasy';
import Store from '../interfaces/Store';

const typedHooks = createTypedHooks<Store>();

/* eslint-disable prefer-destructuring */
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
