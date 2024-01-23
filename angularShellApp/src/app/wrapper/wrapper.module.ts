import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WrapperComponent } from './wrapper.component';
import { LoggerService } from './logger.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '',
        component: WrapperComponent,
      },
    ]),
  ],
  providers: [LoggerService],
})
export class WrapperModule {}
