/* define hooks based on react-redux standard hooks those are used to dispatch actions and subscribe to store for all components in app */

import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import { RootState, AppDispatch } from '../store';

/* define custom hooks for selector and dispatch */

/* custom hook that will be used by the component to dispatch actions and hence will
  cause the RootState mutation
*/
export const useAppDispatch = ()=> useDispatch<AppDispatch>();
/* the custom hook that will be used by component to subscribe to the store */
export const useAppSelector:TypedUseSelectorHook<RootState> =  useSelector;