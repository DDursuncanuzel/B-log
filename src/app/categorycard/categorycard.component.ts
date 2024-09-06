import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-categorycard',
  standalone: true,
  imports: [],
  templateUrl: './categorycard.component.html',
  styleUrl: './categorycard.component.scss'
})
export class CategorycardComponent {
  @Input() title: string = '';  // Kategori başlığı
  @Input() image: string = '';  // Kategori resmi
}