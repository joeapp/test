import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MenuComponent } from "./menu/menu.component";
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgOptimizedImage, RouterOutlet, RouterLink, RouterLinkActive, MenuComponent,MatGridListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'felix-roedder';
}
