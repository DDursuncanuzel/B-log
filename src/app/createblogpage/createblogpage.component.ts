import { Component } from '@angular/core';
import { QuillModule } from 'ngx-quill'

@Component({
  selector: 'app-createblogpage',
  standalone: true,
  imports: [QuillModule],
  templateUrl: './createblogpage.component.html',
  styleUrl: './createblogpage.component.scss'
})
export class CreateblogpageComponent {

}
