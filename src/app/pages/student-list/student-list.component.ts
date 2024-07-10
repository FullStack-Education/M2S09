import { Component } from '@angular/core';
import { StudentComponentsModule } from '../../shared/components/student-components.module';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [ //Importa o módulo de componentes de estudante
    //Junto a ele vem os componentes de TableStudentComponent e ListStudentComponent
    StudentComponentsModule,
  ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent {

}
