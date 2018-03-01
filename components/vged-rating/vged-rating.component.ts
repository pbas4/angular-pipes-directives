/**
 * @author Pol Bas
 *
 * @description Rating component for stars. It can recive four inputs: maximum of stars, rating value, color and font-size
 */

import { Component, Input, OnInit } from '@angular/core';
import { VgedSelectUserColorService } from '../../services/vged-select-user-color';

@Component({
    selector: 'vged-rating',
    styleUrls: ['./vged-rating.component.scss'],
    templateUrl: './vged-rating.template.html'
})
export class VgedRatingComponent implements OnInit {

  @Input('max')
  public max: string;

  @Input('rating')
  public rating: string;

  @Input('color')
  public color: string;

  @Input('size')
  public size: string;

  private _ratedStars: string[] = [];

  private _starStyles: object = {};

  constructor(private userColor: VgedSelectUserColorService) {}

  public ngOnInit() {
    // Set default rating value
    this.max = this.max || '5';
    this.rating = this.rating || '3';

    this._createStars();

    this._createStyles();
  }

  private _createStars(): void {
    // Star classes
    const emptyStarClass = 'mdi mdi-star-outline';
    const fullStarClass = 'mdi mdi-star';
    const halfStarClass = 'mdi mdi-star-half';

    // Calculate stars amount
    const fullStarsIndex = this.rating.split('.');

    // Create full stars
    for (let i = 0; i < +fullStarsIndex[0] && i < +this.max - 1; i++) {
      this._ratedStars.push(fullStarClass);
    }

    // Create half stars
    if (fullStarsIndex[1] && fullStarsIndex[1] !== '0') {
      this._ratedStars.push(halfStarClass);
    }

    // Fill out with empty stars
    if (this._ratedStars.length < +this.max) {
      const amount = +this.max - this._ratedStars.length;

      for (let i = 0; i < amount; i++) {
        this._ratedStars.push(emptyStarClass);
      }
    }
  }

  // Customizing component
  private _createStyles(): void {
    this._starStyles = {
      'color': `${this.color || '#428bca'}`,
      'font-size': `${this.size || 1}rem`
    };
  }

}
