import { Injectable } from '@angular/core';

@Injectable()
export class IssueService {
  constructor() {
    console.log('IssueService initiated');
  }

  public callIssue(): void {
    console.log('%c yehh IssueService called successfully', 'color: green');
  }
}
