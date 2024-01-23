import {
  ApplicationRef,
  Injectable,
  Injector,
  createComponent,
} from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { LoggerService } from '../wrapper/logger.service';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(
    private appRef: ApplicationRef,
    private injectorFromService: Injector
  ) {}

  public openDialogComponent(wrapperInjector?: Injector): void {
    const body = document.querySelector('#dialogWrapper') as HTMLDivElement;

    console.log("Service found in wrapper injector",wrapperInjector?.get(LoggerService))

    const newComponent = createComponent(DialogComponent, {
      environmentInjector: this.appRef.injector,
      elementInjector: wrapperInjector,
      hostElement: body,
    });

    //console.log("Service not found in",newComponent.injector.get(LoggerService))

    this.appRef.attachView(newComponent.hostView);
    newComponent.changeDetectorRef.detectChanges();
  }
}
