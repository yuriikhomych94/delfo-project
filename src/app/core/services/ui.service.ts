import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterEventService } from './router-event.service';

@Injectable({
  providedIn: 'root'
})

export class UiService {

  private routerEventsService = inject(RouterEventService);
  inProgress = toSignal(this.routerEventsService.inProgress$, { initialValue: false });

}
