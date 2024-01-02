import { Injectable } from '@angular/core';
import { IssueService } from './issue.service';

@Injectable({
  providedIn: 'root',
})
export class RootService {
  //Issue service won't initiated in shell as its provided with IssueModule, which comes after root or on bootstrapped moduled
  //try playing placing IssueModule in different level
  constructor(private issue: IssueService) {
    console.log('RootService initiated');
  }

  callRoot() {
    console.log(
      'RootService calling ModuleService provided with "ModuleWithProviders"'
    );
    this.issue.callIssue();
  }
}
