import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { VgedProgressbarComponent } from './vged-progressbar.component';

describe('ProgressbarComponent', () => {
  let comp: VgedProgressbarComponent;
  let fixture: ComponentFixture<VgedProgressbarComponent>;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VgedProgressbarComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents(); // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(VgedProgressbarComponent);
    comp = fixture.componentInstance;

    fixture.detectChanges(); // trigger initial data binding
  });

  it('should be readly initialized', () => {
    expect(fixture).toBeDefined();
    expect(comp).toBeDefined();
  });

  it('should display percentage depending on "percentage" @Input', () => {
    comp.progress = 30;

    const de = fixture.debugElement.query(By.css('.vgedPercentage'));
    const el: HTMLElement = de.nativeElement;

    fixture.detectChanges();
    expect(el.innerText).toContain('30');
  });

  // COLOR DETECTION
  it('Should assign a HEX color depending on "color" @Input', () => {
    comp.color = 'secondary';

    spyOn(comp, 'ngOnInit').and.callThrough();
    comp.ngOnInit();

    expect(comp.color).toBe('#f9f9f9');
  });

  it('Should assign a HEX color depending on "color" @Input', () => {
    comp.color = 'success';

    spyOn(comp, 'ngOnInit').and.callThrough();
    comp.ngOnInit();

    expect(comp.color).toBe('#5cb85c');
  });

  it('Should assign a HEX color depending on "color" @Input', () => {
    comp.color = 'info';

    spyOn(comp, 'ngOnInit').and.callThrough();
    comp.ngOnInit();

    expect(comp.color).toBe('#5bc0de');
  });

  it('Should assign a HEX color depending on "color" @Input', () => {
    comp.color = 'warning';

    spyOn(comp, 'ngOnInit').and.callThrough();
    comp.ngOnInit();

    expect(comp.color).toBe('#f0ad4e');
  });

  it('Should assign a HEX color depending on "color" @Input', () => {
    comp.color = 'danger';

    spyOn(comp, 'ngOnInit').and.callThrough();
    comp.ngOnInit();

    expect(comp.color).toBe('#d9534f');
  });

  it('Should assign a HEX color depending on "color" @Input', () => {
    comp.color = 'dark';

    spyOn(comp, 'ngOnInit').and.callThrough();
    comp.ngOnInit();

    expect(comp.color).toBe('#4C5356');
  });

  it('Should assign a HEX color depending on "color" @Input', () => {
    comp.color = 'primary';

    spyOn(comp, 'ngOnInit').and.callThrough();
    comp.ngOnInit();

    expect(comp.color).toBe('#428bca');
  });

  it('Should assign a HEX color depending on "color" @Input', () => {
    spyOn(comp, 'ngOnInit').and.callThrough();
    comp.ngOnInit();

    expect(comp.color).toBe('#428bca');
  });

});
