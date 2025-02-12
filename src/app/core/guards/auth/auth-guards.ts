import { redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

export const redirectLoggedInToMainPage = () => redirectLoggedInTo([ '/' ]);
export const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo([ '/auth/login' ]);
