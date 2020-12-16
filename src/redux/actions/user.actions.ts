import { createAction, props } from '@ngrx/store';
import { UserState } from '../states/user.states';

export enum UserActionTypes {
  SETREMEMBER = '[User] Set Remember Me',
  GETREMEMBER = '[User] Get Remember Me',
  SETEMAIL = '[User] Set Email',
  GETEMAIL = '[User] Get Email',
  SETPASSWORD = '[User] Set Password',
  GETPASSWORD = '[User] Get Password',
  GETNAME = '[User] Get Name',
  SETNAME = '[User] Set Name',
  GETERROR = '[User] Get Error',
  SETERROR = '[User] Set Error'
}

export const getRememberAction = createAction(
  '[User] Get Remember Me',
  props<{ remember: boolean }>()
);

export const setRememberAction = createAction(
  '[User] Set Remember Me',
  props<{ remember: boolean }>()
);

export const getEmailAction = createAction(
  '[User] Get Email',
  props<{ email: string }>()
);

export const setEmailAction = createAction(
  '[User] Set Email',
  props<{ email: string }>()
);

export const getPasswordAction = createAction(
  '[User] Get Password',
  props<{ password: string }>()
);

export const setPasswordAction = createAction(
  '[User] Set Password',
  props<{ password: string }>()
);

export const getNameAction = createAction(
  '[User] Get Name',
  props<{ name: string }>()
);

export const setNameAction = createAction(
  '[User] Set Name',
  props<{ name: string }>()
);

export const getErrorAction = createAction(
  '[User] Get Error',
  props<{ error: string }>()
);

export const setErrorAction = createAction(
  '[User] Set Error',
  props<{ error: string }>()
);
