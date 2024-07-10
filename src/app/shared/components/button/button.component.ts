import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true, //Componente é dado como standalone
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text: string = "";
}
