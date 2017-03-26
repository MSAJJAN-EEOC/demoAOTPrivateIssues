import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {

  public serviceProperty: boolean = true;

  constructor() { }

  public serviceMethod(): boolean {
    return true;
  }

}
