import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-teste',
  standalone: true,
  imports: [FormsModule, ButtonModule],
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.scss'
})
export class TesteComponent implements OnInit{
  varText = 'default value';
  @Input() testeValue = 'default value is Teste';
  @Output() testValueEmit = new EventEmitter<any>();
  keyup(value: any){
    this.varText = value;
  }
  addNewTeste(value : any){
    this.testValueEmit.emit(value);
  }

  ngOnInit(){}
}
