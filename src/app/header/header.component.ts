import { Component, NgModule, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [RouterLink],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit  {
  
  ngOnInit(): void { }

  constructor(private router: Router){}

  goToLoginPage() {
    this.router.navigate(['/login-register']);  
  }

  
  title = 'My Application';

}
