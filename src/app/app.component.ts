import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./_componentes/navbar/navbar.component";
import { ItemCertificadoComponent } from "./_componentes/item-certificado/item-certificado.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent,ItemCertificadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gereador-certificado';
}
