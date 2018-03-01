/**
 * @author Pol Bas
 *
 * @description Remove first number if it is a '0'
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRemoveZero'
})
export class RemoveZeroPipe implements PipeTransform {
  transform( value: number ) {
    if (value) {
      const valueString = value.toString();
      const valueArray = valueString.split('');

      if ( valueArray[0] === '0' ) {
        valueArray.splice(0, 1);
        const finalValue = valueArray.join();
        return +finalValue;
      } else {
        return value;
      }
    }
  } 

}