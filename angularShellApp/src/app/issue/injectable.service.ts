import { Injectable } from '@angular/core';
import { RootService } from './root.service';

@Injectable()
export class InjectableService {
  constructor(private root: RootService) {
    console.log('InjectableService initiated');
  }

  lorem() {
    console.log('injected service calling root service method');
    this.root.callRoot();
  }
}
