import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  private counter = 0;
  show = new BehaviorSubject<boolean>(false);

  push() {
    ++this.counter;
    this.show.next(true);
  }

  pop() {
    --this.counter;
    if (this.counter === 0) this.show.next(false);
  }
}
