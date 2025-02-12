import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthRoutesPath, RoutesPath } from '../core/types/routes.types';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private firebaseAuth = inject(Auth);
  private router = inject(Router);


  register(username: string, email: string, password: string): Observable<void> {
    return from(createUserWithEmailAndPassword(this.firebaseAuth, email, password)
      .then(response => updateProfile(response.user, {
        displayName: username
      }))
      .then(() => this.goToHomePage())
    );
  }

  login(email: string, password: string): Observable<void> {
    return from(signInWithEmailAndPassword(this.firebaseAuth, email, password).then(() => {
      this.goToHomePage();
    }))
  }

  logout(): Observable<void> {
    return from(signOut(this.firebaseAuth).then(() => {
      this.router.navigate([ `${RoutesPath.auth}/${AuthRoutesPath.login}` ]);
    }));
  }

  private goToHomePage(): void {
    this.router.navigate(['/']);
  }

}
