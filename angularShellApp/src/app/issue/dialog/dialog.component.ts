import { Component } from '@angular/core';
import { LoggerService } from 'src/app/wrapper/logger.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  standalone: true,
})
export class DialogComponent {

  constructor(private loggerService:LoggerService){

  }
  public callService() {
    this.loggerService.log();
  }
}
