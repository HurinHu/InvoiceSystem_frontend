export class UserState {
  remember: boolean;
  email: string;
  password: string;
  name: string;
  error: string;
}

export const initializeUserState = (): UserState => {
  return { remember: true, email: '', password: '', name: '', error: '' };
};
