import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true, //Componente é dado como standalone
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() legenda: string = "";
}
