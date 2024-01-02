import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InjectableService } from '../issue/injectable.service';

@Component({
  selector: 'app-wrapper',
  template: `<p>wrapper works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrapperComponent {
  constructor(private provider: InjectableService) {
    this.provider.lorem();
  }
}
