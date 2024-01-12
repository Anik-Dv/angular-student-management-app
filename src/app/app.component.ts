import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavberComponent } from './components/navber/navber.component';
import { HomeComponent } from './components/home/home.component';
import {MatMenuModule} from '@angular/material/menu';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterserviceService } from './services/registerservice.service';
//import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    NavberComponent,
    HomeComponent,
    MatMenuModule,
    //HttpClientModule ,
    RouterModule 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: ([MatSnackBar, RegisterserviceService]),
})

export class AppComponent {
  title = 'angular-client';
}
