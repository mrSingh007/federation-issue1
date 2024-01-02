import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IssueModule } from './issue/issue.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    IssueModule.forRoot(), //TODO try to uncomment one

    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'wrapper',
      },
      {
        path: 'wrapper',
        loadChildren: () =>
          import('./wrapper/wrapper.module').then((m) => m.WrapperModule),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
