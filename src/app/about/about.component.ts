import { Component } from '@angular/core';
import { AboutpageComponent } from "../aboutpage/aboutpage.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutpageComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
