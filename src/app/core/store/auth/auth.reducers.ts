import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from './auth.model';
import { authActions } from './auth.actions';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  currentUser: null,
  validationError: null
};

const authFeature = createFeature({
  name: 'Auth',
  reducer: createReducer(
    initialState,
    on(authActions.register, (state) => ({
      ...state,
      isSubmitting: true,
      isLoading: true,
      validationError: null
    })),
    on(authActions.registerSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      isLoading: false,
      currentUser: action.user,
    })),
    on(authActions.registerFailure, (state: AuthStateInterface, action) => ({
      ...state,
      isSubmitting: false,
      isLoading: false,
      validationError: action.errors
    })),

    on(authActions.login, (state) => ({
      ...state,
      isSubmitting: true,
      isLoading: true
    })),
    on(authActions.loginSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      isLoading: false,
      currentUser: action.user,
      validationError: null
    })),
    on(authActions.loginFailure, (state: AuthStateInterface, action) => ({
      ...state,
      isSubmitting: false,
      isLoading: false,
      validationError: action.errors
    })),

    on(authActions.logout, (state: AuthStateInterface) => ({
      ...state,
      isSubmitting: true,
      isLoading: true,
      validationError: null
    })),
    on(authActions.logoutSuccess, (state: AuthStateInterface) => ({
      ...state,
      isSubmitting: false,
      isLoading: false,
      currentUser: null,
      validationError: null
    })),
    on(authActions.logoutFailure, (state: AuthStateInterface, action) => ({
      ...state,
      isSubmitting: false,
      validationError: action.errors
    }))
  )
});


export const { name: authFeatureKey, reducer: authReducer, selectIsLoading } = authFeature;
