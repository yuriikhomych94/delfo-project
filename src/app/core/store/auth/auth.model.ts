import { UserInterface } from '../../../auth/auth.types';

export interface AuthStateInterface {
  isSubmitting: boolean;
  isLoading: boolean;
  currentUser: UserInterface | null | undefined;
  validationError: any;
}
