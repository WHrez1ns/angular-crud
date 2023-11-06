import { Component } from '@angular/core';

// Decorator | A classe NavComponent só passa a ser um componente por conta do Decorator
@Component({
  selector: 'app-nav', // O que referencia (o nome da tag html que faz referencia para esse componente)
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

}
