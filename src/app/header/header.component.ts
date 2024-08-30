import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit  {
  
  ngOnInit(): void { }
  
  title = 'My Application';
}
