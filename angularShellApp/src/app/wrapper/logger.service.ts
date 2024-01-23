import { Injectable } from '@angular/core';

//it must be non root and should be provided only in wrapper module
@Injectable()
export class LoggerService {
  log() {
    console.log('Hello from LoggerService');
  }
}
