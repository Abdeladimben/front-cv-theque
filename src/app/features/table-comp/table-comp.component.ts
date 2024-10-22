import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { Action } from '../../class/action';
import { FormOperationComponent } from "../form-operation/form-operation.component";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-table-comp',
  standalone: true,
  imports: [TableModule, DialogModule, RippleModule, ButtonModule, ToastModule, ToolbarModule, ConfirmDialogModule, InputTextModule, InputTextareaModule, CommonModule, FileUploadModule, DropdownModule, TagModule, RadioButtonModule, RatingModule, InputTextModule, FormsModule, InputNumberModule, FormOperationComponent, FormsModule],
  providers: [MessageService, ConfirmationService],
  templateUrl: './table-comp.component.html',
  styleUrl: './table-comp.component.scss'
})
export class TableCompComponent implements OnInit{
  productDialog: boolean = false;
  isFormVisible: boolean = false;
  value = 'default valuye';

  @Input() checkRow : boolean = false;
  @Input() listEnregistrements: any[]=[];
  @Input() listEnregistrementsColone : string[]=[];
  @Input() btnActions : Action[] = [];
  @Input() idProduit = "";
  @Output() emitIdProduit = new EventEmitter<string>();

    productt!: any;
    oneProduct : any;

    selectedProducts!: any[] | null;

    submitted: boolean = false;

    statuses!: any[];

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService) {}

    ngOnInit() {
        this.statuses = [
            { label: 'INSTOCK', value: 'instock' },
            { label: 'LOWSTOCK', value: 'lowstock' },
            { label: 'OUTOFSTOCK', value: 'outofstock' }
        ];
    }

    openNew() {
        this.productt = {};
        this.submitted = false;
        this.productDialog = true;
    }

    deleteSelectedProducts() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected products?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.listEnregistrements = this.listEnregistrements.filter((val) => !this.selectedProducts?.includes(val));
                this.selectedProducts = null;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
            }
        });
    }
    operationSelectedProducts(action: String, id: string){
      // const product_table = <HTMLElement>document.getElementById('table-element');
      // const product_form = <HTMLElement>document.getElementById('form-element');
      this.emitIdProduit.emit(id);
      if(action==="delete"){
        this.confirmationService.confirm({
          message: 'Are you sure you want to delete product '+ id +' ?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.listEnregistrements = this.listEnregistrements.filter((val) => val.id!==id);
              this.selectedProducts = null;
              this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
          }
      });
      }
      if(action==="update"){
        this.confirmationService.confirm({
          message: 'Are you sure you want to update product '+ id +' ?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
            this.oneProduct = this.listEnregistrements.find(elm => elm.id===id);
            this.isFormVisible=true;
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Form displayed', life: 3000 });
          }
      });
      }

    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    saveProduct() {
        this.submitted = true;

        if (this.productt.name?.trim()) {
            if (this.productt.id) {
                this.listEnregistrements[this.findIndexById(this.productt.id)] = this.productt;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            } else {
                this.productt.id = this.createId();
                this.productt.image = 'product-placeholder.svg';
                this.listEnregistrements.push(this.productt);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            this.listEnregistrements = [...this.listEnregistrements];
            this.productDialog = false;
            this.productt = {};
        }
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.listEnregistrements.length; i++) {
            if (this.listEnregistrements[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }
}
