import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCulinaryStopList } from './display-culinary-stop-list';

describe('DisplayCulinaryStopList', () => {
  let component: DisplayCulinaryStopList;
  let fixture: ComponentFixture<DisplayCulinaryStopList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayCulinaryStopList],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayCulinaryStopList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
