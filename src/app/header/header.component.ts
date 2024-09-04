import { Component, NgModule, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [RouterLink],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit  {
  
  ngOnInit(): void { }

  constructor(){}
  
  title = 'My Application';

}
