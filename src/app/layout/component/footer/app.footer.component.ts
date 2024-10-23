import { Component } from '@angular/core';
import { LayoutService } from '../../services/app.layout.service';
import { NgIf, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from 'primeng/sidebar';

@Component({
    selector: 'cv-footer',
    templateUrl: './app.footer.component.html',
    standalone:true,
    imports:[ ]
})
export class AppFooterComponent {
    constructor(public layoutService: LayoutService) { }
}
