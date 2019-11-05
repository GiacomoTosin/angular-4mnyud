import {Component} from '@angular/core';
import {Contatto} from './contatto.model.ts';

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrls: ['./contatto.component.css']
})

export class ContattoComponent {
  contatto: Contatto = new Contatto('Giacomo', 'Tosin', 'giacomotosin@example.org', '9876543210', 5);

  settextColor(){
    return this.contatto.isPreferito()? "red": "black";
  }

}