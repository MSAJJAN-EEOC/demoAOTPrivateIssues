import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private privateModel = new Model();
  public publicModel = new Model();

  constructor(private service: ServiceService) { }
}

export class Model {
    private privateProperty: string
    public publicProperty: string

    constructor() {
        this.privateProperty = "Private Property"
        this.publicProperty = "Public Property"
    }

    public publicMethod(): string {
        return "Method is public"
    }

    private privateMethod(): string {
        return "Method is private"
    }
}
