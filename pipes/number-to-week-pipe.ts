/**
 * @author Pol Bas
 *
 * @description Converts week number to week name
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myNumToWeekPipe'
})
export class NumToWeekPipe implements PipeTransform {
  transform( value: number ) {
    if (value) {
      switch (value) {
        case 1:
          return 'Lunes';
        case 2:
          return 'Martes';
        case 3:
          return 'Miércoles';
        case 4:
          return 'Jueves';
        case 5:
          return 'Viernes';
        case 6:
          return 'Sábado';
        case 0:
          return 'Domingo';
      }
    }
  }
}
