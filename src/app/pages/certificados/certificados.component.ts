import { Component } from '@angular/core';
import { ButtonComponent } from "../../_componentes/button/button.component";
import { BaseUiComponent } from "../../_componentes/base-ui/base-ui.component";

@Component({
  selector: 'app-certificados',
  imports: [ButtonComponent, BaseUiComponent],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css'
})
export class CertificadosComponent {

}
