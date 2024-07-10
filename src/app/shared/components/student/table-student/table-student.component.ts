import { Component } from '@angular/core';

@Component({
  selector: 'app-table-student',
  standalone: false, //Componente não é dado como standalone
  //e com isso não é necessário importar qualquer dependência que ele necessite
  //pois ele já está sendo importado pelo módulo StudentComponentsModule
  templateUrl: './table-student.component.html',
  styleUrl: './table-student.component.scss'
})
export class TableStudentComponent {

}
