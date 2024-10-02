import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardModule,ButtonModule,CarouselModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() title: string = '';
  @Input() textContent: string = '';

  @Input() images: string[] = []; // To accept an array of images

  // Determine if there's only one image
  get isSingleImage(): boolean {
    return this.images.length === 1;
  }

}
