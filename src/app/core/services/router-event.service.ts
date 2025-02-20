import { inject, Injectable } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RouterEventService {

  readonly inProgress$: Observable<boolean>;
  private router = inject(Router);

  constructor() {
    this.inProgress$ = this.mapEventToProgress();
  }

  private mapEventToProgress(): Observable<boolean> {
    return this.router.events.pipe(
      map(event => {
        if ( event instanceof NavigationStart ) {
          return true;
        }
        if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
          return false;
        }
        return undefined;
      }),
      filter(value => value !== undefined)
    );
  }
}
