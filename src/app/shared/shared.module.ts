import { NgModule } from "@angular/core";
import { ButtonComponent } from "./custom/button/button.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        
    ],
    imports:[
        CommonModule,
        ButtonComponent
    ],
    exports:[
        ButtonComponent
    ],
    providers:[]
})

export class SharedModule{}