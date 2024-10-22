import { Component, EventEmitter, Input, Output, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-operation',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-operation.component.html',
  styleUrl: './form-operation.component.scss'
})
export class FormOperationComponent {
  @Input() infoInputs : any={};
  @Output() infoInputsEmiter : EventEmitter<any> = new EventEmitter();

  // Méthode pour envoyer les données mises à jour
  onFormChange(){
    this.infoInputsEmiter.emit(this.infoInputs);// Émettre l'objet mis à jour vers le parent
  }

}
