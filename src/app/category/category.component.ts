import { Component } from '@angular/core';
import { CategorypageComponent } from "../categorypage/categorypage.component";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CategorypageComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {

}
