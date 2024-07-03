import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LogClass, LogMethod} from "./decorator";
interface AppComponentInterface {
  newProperty: string;
}

@LogClass
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AppComponentInterface{
  newProperty: string;

  constructor() {
    this.newProperty = 'Hellllo';
    console.log('AppComponent instantiated');
  }

  @LogMethod
  sayHello(name: string) {
    console.log(`Hello, ${name}!`);
  }
}
