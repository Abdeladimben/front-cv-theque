import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from "ngx-scrollbar";
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';


@NgModule({
    declarations: [],
    imports: [ CommonModule, NgScrollbarModule,SideBarComponent,TopBarComponent ],
    exports: [NgScrollbarModule,SideBarComponent,TopBarComponent],
    providers: [],
})
export class SharedModule {}