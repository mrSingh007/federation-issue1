import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueService } from './issue.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class IssueModule {
  static forRoot(): ModuleWithProviders<IssueModule> {
    return {
      ngModule: IssueModule,
      providers: [IssueService],
    };
  }
}
