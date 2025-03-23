import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'custom-home-view',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss'
})
export class HomeViewComponent {

}
