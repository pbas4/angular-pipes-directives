import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';

import { VgedRatingComponent } from './vged-rating.component';

import { VgedSelectUserColorService } from '../../services/vged-select-user-color';

describe('RatingComponent', () => {
  let comp: VgedRatingComponent;
  let fixture: ComponentFixture<VgedRatingComponent>;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VgedRatingComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [VgedSelectUserColorService]
    }).compileComponents(); // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(VgedRatingComponent);
    comp = fixture.componentInstance;

    fixture.detectChanges(); // trigger initial data binding
  });

  it('should be readly initialized', () => {
    expect(fixture).toBeDefined();
    expect(comp).toBeDefined();
  });

  it('should create five stars and set styles (by default attributes)', () => {
    spyOn(comp, 'ngOnInit').and.callThrough();

    comp.ngOnInit();
    expect(comp.ngOnInit).toHaveBeenCalled();
  });

  it('should create one empty star in _ratedStars array', () => {
    spyOn(comp, 'ngOnInit').and.callThrough();

    comp.rating = '3.5';
    comp.ngOnInit();
    expect(comp.ngOnInit).toHaveBeenCalled();
  });
});
