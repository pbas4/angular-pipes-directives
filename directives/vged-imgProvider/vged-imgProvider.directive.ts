/**
 * @author Pol Bas
 *
 * @description Directive that creates 'src' property (with its relative path) and provides the image required from brands by its name
 */

import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[imgProvider]'
})
export class ImgProviderDirective implements OnInit {

  @Input('imgProvider')
  private imgProvider: string;

  private _commonPath: string = '../../../assets/';

  constructor(private _el: ElementRef, private _renderer: Renderer2) {}

  public ngOnInit() {
    this._renderer.setProperty(this._el.nativeElement, 'src', `${this._commonPath}/${this.imgProvider}.png`);
  }

  // For testing
  public get commonPath() {
    return this._commonPath;
  }

}
