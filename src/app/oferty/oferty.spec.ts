import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oferty } from './oferty';

describe('Oferty', () => {
  let component: Oferty;
  let fixture: ComponentFixture<Oferty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Oferty]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oferty);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
