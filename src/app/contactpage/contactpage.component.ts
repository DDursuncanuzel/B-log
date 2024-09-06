import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactpage',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contactpage.component.html',
  styleUrl: './contactpage.component.scss'
})
export class ContactpageComponent {

  contactForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.minLength(3), Validators.required]),
    email: new FormControl('',[Validators.email, Validators.required ]),
    message: new FormControl('', [Validators.required])
  })

  isFormValid(): boolean{
    return this.contactForm.invalid;
  }

}
