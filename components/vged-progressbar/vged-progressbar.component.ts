/**
 * @author Pol Bas
 *
 * @description Componente progressbar
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vged-progressbar',
  templateUrl: './vged-progressbar.template.html',
  styleUrls: ['./vged-progressbar.component.scss']
})
export class VgedProgressbarComponent implements OnInit {

  public percentageStyles: object;

  public barStyles: object;

  // Estilos dinámicos
  @Input('progress')
  public progress: number;

  @Input('color')
  public color: string;

  @Input('percentageSize')
  public percentageSize: string;

  @Input('barHeight')
  public barHeight: string;

  public ngOnInit(): void {
    this.color = this.selectColor(this.color);

    this.progress = this.progress || 50;
    this.barHeight = this.barHeight || '2px';

    // Estilos para el texto de porcentaje
    this.percentageStyles = {
      'left': `${this.progress || 50}%`,
      'font-size': this.percentageSize || '12px',
    };

    // Estilos para la barra de porcentaje
    this.barStyles = {
      'width': `${this.progress || 50}%`,
      'height': this.barHeight || '2px',
      'background-color': this.color || 'green'
    };
  }

  // For testing
  // public getColor() {
  //   return this.color;
  // }

  private selectColor(color): string {
    switch (color) {
      case 'primary':
        return '#428bca';
      case 'secondary':
        return '#f9f9f9';
      case 'success':
        return '#5cb85c';
      case 'info':
        return '#5bc0de';
      case 'warning':
        return '#f0ad4e';
      case 'danger':
        return '#d9534f';
      case 'dark':
        return '#4C5356';
      default:
        return '#428bca';
    }
  }

}
