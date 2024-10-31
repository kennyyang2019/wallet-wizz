import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { MainViewComponent } from "./main-view/main-view.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MainViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'wallet-wizz';
}
