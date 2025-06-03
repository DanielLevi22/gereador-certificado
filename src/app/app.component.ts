import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./_componentes/navbar/navbar.component";
import { CertificadosFormComponent } from "./pages/certificados-form/certificados-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent,  CertificadosFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gereador-certificado';
}
