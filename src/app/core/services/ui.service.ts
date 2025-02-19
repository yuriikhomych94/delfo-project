import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UiService {

  private inProgressSubject = new BehaviorSubject<boolean>(false);
  inProgress$: Observable<boolean> = this.inProgressSubject.asObservable();

  setProgress(value: boolean): void {
    this.inProgressSubject.next(value);
  }

}
