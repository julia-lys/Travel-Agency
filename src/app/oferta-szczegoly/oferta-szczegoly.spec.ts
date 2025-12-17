import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaSzczegoly } from './oferta-szczegoly';

describe('OfertaSzczegoly', () => {
  let component: OfertaSzczegoly;
  let fixture: ComponentFixture<OfertaSzczegoly>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfertaSzczegoly]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfertaSzczegoly);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
