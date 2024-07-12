import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-login',
  standalone: true, //Componente é dado como standalone
  //e com isso é necessário importar qualquer dependência que ele necessite
  imports: [
    FormsModule, 
    //Importações do Angular Material por componente
    MatFormFieldModule,
    MatInputModule, 
    MatCardModule
  ], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
