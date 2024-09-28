import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from "ngx-scrollbar";
import { SideBarComponent } from './side-bar/side-bar.component';


@NgModule({
    declarations: [],
    imports: [ CommonModule, NgScrollbarModule,SideBarComponent ],
    exports: [NgScrollbarModule,SideBarComponent],
    providers: [],
})
export class SharedModule {}