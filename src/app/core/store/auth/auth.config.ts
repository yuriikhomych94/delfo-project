import { provideState } from '@ngrx/store';
import { authFeatureKey, authReducer } from './auth.reducers';
import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import * as authEffects from './auth.effect';
import { provideEffects } from '@ngrx/effects';

export const authStoreConfig: EnvironmentProviders = makeEnvironmentProviders([
  provideState(authFeatureKey, authReducer),
  provideEffects(
    authEffects
  )
]);
