import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from '@angular/fire/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private firebaseAuth = inject(Auth);

  register(username: string, email: string, password: string): Observable<void> {
    return from(createUserWithEmailAndPassword(this.firebaseAuth, email, password).then(response => updateProfile(response.user, {
      displayName: username
    })));
  }

  login(email: string, password: string): Observable<void> {
    return from(signInWithEmailAndPassword(this.firebaseAuth, email, password).then(() => {}))
  }

  logout(): Observable<void> {
    return from(signOut(this.firebaseAuth));
  }

}
