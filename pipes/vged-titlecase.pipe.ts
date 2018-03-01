/**
 * @author Pol Bas
 *
 * @description Pipe to convert any string to titlecase
 */

import * as _ from 'lodash';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myTitlecase'
})
export class TitlecasePipe implements PipeTransform {
  public transform(value: string): string {
    if (value) {
      const wordsArray = value.split(' ');
      const upperWordsArray = [];

      for (const word of wordsArray) {
        const wordLower = _.toLower(word);
        upperWordsArray.push(_.upperFirst(wordLower));
      }

      value = _.join(upperWordsArray, ' ');

      return value;
    }
  }
}
