import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { VgedImgProviderDirective } from './vged-imgProvider.directive';

@Component({
  template: `
    <p>hola</p>
    <img [vgedImgProvider]="'36L'">
  `
})
class DirectiveHostComponent {}

describe('ImgProviderDirective', () => {
  let comp: DirectiveHostComponent;
  let fixture: ComponentFixture<DirectiveHostComponent>;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveHostComponent, VgedImgProviderDirective],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents(); // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostComponent);
    comp = fixture.componentInstance;

    fixture.detectChanges(); // trigger initial data binding
  });

  it('should be readly initialized', () => {
    expect(fixture).toBeDefined();
    expect(comp).toBeDefined();
  });

  it('Should has img src attribute with commonPath + input property value', () => {
    const de = fixture.debugElement.queryAll(By.css('img'))[0];

    const directive = de.injector.get(VgedImgProviderDirective);
    const commonPath = directive.commonPath();
    const el: HTMLElement = de.nativeElement;

    expect(el.getAttribute('src')).toContain(`${commonPath}/36L`);
  });

});
