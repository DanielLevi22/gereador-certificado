import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./_componentes/navbar/navbar.component";
import { ButtonComponent } from "./_componentes/button/button.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gereador-certificado';
}
