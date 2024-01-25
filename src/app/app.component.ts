import { Component } from '@angular/core';
import { RouterOutlet , RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HomeComponent ,PageNotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

  
})
export class AppComponent {
  title = 'myapp';



}
