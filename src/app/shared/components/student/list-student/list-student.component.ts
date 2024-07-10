import { Component } from '@angular/core';

@Component({
  selector: 'app-list-student',
  standalone: false, //Componente não é dado como standalone
  //e com isso não é necessário importar qualquer dependência que ele necessite
  //pois ele já está sendo importado pelo módulo StudentComponentsModule
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.scss'
})
export class ListStudentComponent {

}
