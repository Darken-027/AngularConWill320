import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  standalone: true,
  imports: [],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.scss'
})
export class ToolBarComponent {
  @Input() titulo:string = 'Sin titulo';
  @Output() saludo = new EventEmitter<string>();
  
  EnviarleValorAlPadre(){
    this.saludo.emit('Esto es un mensaje barbaro');
  }
}
