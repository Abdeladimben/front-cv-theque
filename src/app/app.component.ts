import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TopBarComponent } from "./features/headers/top-bar/top-bar.component";
import { SideBarComponent } from "./features/headers/side-bar/side-bar.component";
import { TesteComponent } from "./features/teste/teste.component";
import { TableCompComponent } from './features/table-comp/table-comp.component';
import { FormOperationComponent } from './features/form-operation/form-operation.component';
import { Action } from './class/action';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule, TableModule, TopBarComponent, SideBarComponent, TesteComponent, TableCompComponent, FormOperationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'cv-front';
  currentTeste = "Sending Data from parent components to child components";
  testes = ["T1", "T2", "T3", "T4", "T5"];
  addTeste(newTeste : string){
    this.testes.push(newTeste);
  }
  actionListe : Action[] = [{ titre:"Update", icone:"pi pi-pencil", severity:"success", operationFunction:"update"},{titre:"Delete", icone:"pi pi-trash", severity:"error", operationFunction:"delete"}];
  EnregistrementsColone : string[] = ["Name", "Image", "Price", "Category", "Reviews", "Status", "Action"];
  enregistrements: any[]=
    [
      {
        id: '10004',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
      },{
        id: '10003',
        code: 'f230fh0g3',
        name: 'Bamboo Watchs',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
      },{
        id: '10002',
        code: 'f230fh0g3',
        name: 'Bamboo Watch 2',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
      },{
        id: '10001',
        code: 'f230fh0g3',
        name: 'Bamboo Watch 3',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
      }
    ];
}
