import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { UserInterface } from '../../../auth/auth.types';

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    'Register': props<{ username: string; email: string; password: string }>(),
    'Register Success': props<{ user: UserInterface }>(),
    'Register Failure': props<{errors: any}>(),
    'Login': props<{ email: string, password: string }>(),
    'Login Success': props<{ user: UserInterface }>(),
    'Login Failure': props<{errors: any}>(),
    'Logout': emptyProps(),
    'Logout Success': emptyProps(),
    'Logout Failure': props<{errors: any}>()
  }
});
