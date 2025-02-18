import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from '@angular/fire/auth';
import { from, map, Observable, switchMap } from 'rxjs';
import { UserInterface } from './auth.types';
import { User } from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private firebaseAuth = inject(Auth);

  login(email: string, password: string): Observable<UserInterface> {
    return from(signInWithEmailAndPassword(this.firebaseAuth, email, password)).pipe(
      map(({ user }) => this.mapToUserInterface(user))
    );
  }

  register(username: string, email: string, password: string): Observable<UserInterface> {
    return from(createUserWithEmailAndPassword(this.firebaseAuth, email, password)).pipe(
      switchMap(response =>
        updateProfile(response.user, { displayName: username }).then(() => response.user)
      ),
      map((user: User) => this.mapToUserInterface(user))
    );
  }

  logout(): Observable<void> {
    return from(signOut(this.firebaseAuth));
  }

  private mapToUserInterface(user: User): UserInterface {
    return {
      uid: user.uid,
      email: user.email ?? '',
      displayName: user.displayName ?? '',
    };
  }

}
