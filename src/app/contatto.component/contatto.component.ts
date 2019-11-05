import {Component} from '@angular/core';
import {Contatto} from './contatto.model.ts';
@Component({
  selector: 'app-contatto',
  template: './contatto.component.html',
  styles: ['./contatto.component.css']
})

export class ContattoComponent{
  Contatto: Contatto = new Contatto('Giacomo','Tosin','giacomotosin@gmail.com','3173163187',5);
}