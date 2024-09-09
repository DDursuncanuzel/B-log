import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { BlogdetailsComponent } from '../blogdetails/blogdetails.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AppComponent,HomeComponent,BlogdetailsComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}


