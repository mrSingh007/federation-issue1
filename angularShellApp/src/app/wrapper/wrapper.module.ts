import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InjectableService } from '../issue/injectable.service';
import { WrapperComponent } from './wrapper.component';
import { IssueModule } from '../issue/issue.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   // IssueModule.forRoot(), //TODO: either using here or in app.module (try commenting one out)
    RouterModule.forChild([
      {
        path: '',
        component: WrapperComponent,
      },
    ]),
  ],
  providers:[InjectableService]
})
export class WrapperModule {}
