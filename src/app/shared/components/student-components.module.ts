import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { ModalComponent } from './modal/modal.component';
import { TableStudentComponent } from './student/table-student/table-student.component';
import { ListStudentComponent } from './student/list-student/list-student.component';



@NgModule({
  declarations: [ //Declaração dos componentes
    TableStudentComponent, //Declaração do componente TableStudentComponent
    ListStudentComponent //Declaração do componente ListStudentComponent
  ],
  imports: [ //Importação de módulos
    CommonModule
  ],
  providers: [], //Provedores de serviços
  exports: [ //Exportação dos componentes
    TableStudentComponent,
    ListStudentComponent
  ]
})
export class StudentComponentsModule { }
