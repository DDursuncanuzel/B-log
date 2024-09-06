import { Component, Input } from '@angular/core';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-categorycard',
  standalone: true,
  imports: [CategoryComponent],
  templateUrl: './categorycard.component.html',
  styleUrl: './categorycard.component.scss'
})
export class CategorycardComponent {
  @Input() title: string = '';  
  @Input() image: string = '';  
}