import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common';
import { BlogspageComponent } from "../blogspage/blogspage.component";

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, AppComponent, HomeComponent, BlogsComponent, CommonModule, BlogspageComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
