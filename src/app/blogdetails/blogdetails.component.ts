import { Component } from '@angular/core';
import { BlogdetailspageComponent } from "../blogdetailspage/blogdetailspage.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blogdetails',
  standalone: true,
  imports: [BlogdetailspageComponent, RouterModule],
  templateUrl: './blogdetails.component.html',
  styleUrl: './blogdetails.component.scss'
})
export class BlogdetailsComponent {

}
