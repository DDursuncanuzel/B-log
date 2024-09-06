import { Component } from '@angular/core';
import { ContactpageComponent } from "../contactpage/contactpage.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactpageComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
