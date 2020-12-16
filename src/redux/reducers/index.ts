import { ActionReducerMap, MetaReducer, Action, createReducer, on } from '@ngrx/store';

import { UserActionTypes, getRememberAction, setRememberAction, getEmailAction, setEmailAction, getPasswordAction, setPasswordAction, getNameAction, setNameAction, getErrorAction, setErrorAction } from '../actions/user.actions';
import { UserState, initializeUserState } from '../states/user.states';

export function userReducer(state: UserState, action: Action): UserState {
  return reducerUser(state, action);
}

export const reducerUser = createReducer(
  initializeUserState(),
  on(getRememberAction, state => state),
  on(getEmailAction, state => state),
  on(getPasswordAction, state => state),
  on(setRememberAction, (state: UserState, { remember }) => {
    return { ...state, remember: remember };
  }),
  on(setEmailAction, (state: UserState, { email }) => {
    return { ...state, email: email };
  }),
  on(setPasswordAction, (state: UserState, { password }) => {
    return { ...state, password: password };
  }),
  on(setNameAction, (state: UserState, { name }) => {
    return { ...state, name: name };
  }),
  on(setErrorAction, (state: UserState, { error }) => {
    return { ...state, error: error };
  }),
)

export interface State {
  user: UserState;
}

export const rootReducer: ActionReducerMap<State> = {
  user: userReducer,
}
