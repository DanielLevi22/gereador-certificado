import { Component } from '@angular/core';
import { ButtonComponent } from "../../_componentes/button/button.component";
import { BaseUiComponent } from '../../_componentes/base-ui/base-ui.component';

@Component({
  selector: 'app-certificados-form',
  imports: [ButtonComponent, BaseUiComponent],
  templateUrl: './certificados-form.component.html',
  styleUrl: './certificados-form.component.css'
})
export class CertificadosFormComponent {

}
