import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPlaceList } from './display-place-list';

describe('DisplayPlaceList', () => {
  let component: DisplayPlaceList;
  let fixture: ComponentFixture<DisplayPlaceList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayPlaceList],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayPlaceList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
