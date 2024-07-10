import { Component } from '@angular/core';
import { InputComponent } from '../../shared/components/input/input.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true, //Componente é dado como standalone
  //e com isso é necessário importar qualquer dependência que ele necessite
  imports: [//Como o componente de input e botão é usado, então é necessário importar
    InputComponent, 
    ButtonComponent, 
    FormsModule], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
