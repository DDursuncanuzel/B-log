import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CategoryComponent } from './category/category.component';
import { CategorypageComponent } from './categorypage/categorypage.component';
import { CreateblogComponent } from './createblog/createblog.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'blogs', component: BlogsComponent },
    { path: 'blogspage', component: BlogsComponent },
    { path: 'category', component: CategoryComponent },
    { path: 'categorypage', component: CategoryComponent },
    { path: 'blogdetails', component: BlogdetailsComponent },
    { path: 'blogdetailspage', component: BlogdetailsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'aboutpage', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'contactpage', component: ContactComponent },
    { path: 'createblog', component: CreateblogComponent },
    { path: 'createblogpage', component: CreateblogComponent },
    { path: 'login-register', component: LoginRegisterComponent },
    { path: '**', redirectTo: ''},
  ];




