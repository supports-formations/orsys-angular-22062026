import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayListCountries } from './display-list-countries';

describe.only('DisplayListCountries', () => {
  let component: DisplayListCountries;
  let fixture: ComponentFixture<DisplayListCountries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayListCountries],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayListCountries);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // je prouve que mon composant a bien été créé
  });

  it('should display the list of countries', () => {
    const htmlDuComposant = fixture.nativeElement as HTMLElement;
    const table = htmlDuComposant.querySelector('table');
    expect(table).toBeTruthy();

    const rows = table?.querySelectorAll('tr');
    expect(rows?.length).toBe(3);

  });
});
