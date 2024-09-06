import { Component } from '@angular/core';
import { CategorycardComponent } from "../categorycard/categorycard.component";

@Component({
  selector: 'app-categorypage',
  standalone: true,
  imports: [CategorycardComponent],
  templateUrl: './categorypage.component.html',
  styleUrl: './categorypage.component.scss'
})
export class CategorypageComponent {
  categories = [
    { title: 'Product Reviews', image: 'assets/category/product.jpg' },
    { title: 'Listicles', image: 'assets/category/list.png' },
    { title: 'Current News', image: 'assets/category/news.jpeg' },
    { title: 'Trends and Innovations', image: 'assets/category/trends.webp' },
    { title: 'Educational and How-To Content', image: 'assets/category/educational.jpg' },
    { title: 'Entertainment and Pop Culture', image: 'assets/category/entertainment.jpeg' },
    { title: 'Health and Lifestyle', image: 'assets/category/health.jpeg' },
    { title: 'Fashion and Beauty', image: 'assets/category/fashion.jpg' },
    { title: 'Technology and Science', image: 'assets/category/techno.webp' },
    { title: 'Hobbies and Creative Projects', image: 'assets/category/hobbies.webp' },
    { title: 'Food and Recipes', image: 'assets/category/food.jpg' },
    { title: 'Travel and Adventure', image: 'assets/category/travel.jpg' }
  ];
}
