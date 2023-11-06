import { Component } from '@angular/core';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent {
  propLegal = "qualquer"

  fazerAlgo(): void {
    console.log('Fazendo algo!')
  }
}
