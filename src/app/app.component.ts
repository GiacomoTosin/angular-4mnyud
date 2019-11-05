import { Component } from '@angular/core';
import{Contatto} from './contatto.model.ts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  contatto: Contatto = new Contatto('Giacomo', '')
}
