import { Component } from '@angular/core';
import { CreateblogpageComponent } from "../createblogpage/createblogpage.component";

@Component({
  selector: 'app-createblog',
  standalone: true,
  imports: [CreateblogpageComponent],
  templateUrl: './createblog.component.html',
  styleUrl: './createblog.component.scss'
})
export class CreateblogComponent {

}
