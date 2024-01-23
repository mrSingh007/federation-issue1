import { ChangeDetectionStrategy, Component, Injector } from '@angular/core';
import { DialogService } from '../issue/dialog.service';

@Component({
  selector: 'app-wrapper',
  template: `<p>wrapper works!</p> <button (click)="openDialog()">openDialog</button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrapperComponent {
  constructor(private dialogService: DialogService, private injector: Injector) {}

  openDialog() {
    this.dialogService.openDialogComponent(this.injector);
  }
}
