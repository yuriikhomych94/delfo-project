import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../../environments/environment.development';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const firebaseConfig: EnvironmentProviders = makeEnvironmentProviders([
  provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
  provideAuth(() => getAuth())
])


