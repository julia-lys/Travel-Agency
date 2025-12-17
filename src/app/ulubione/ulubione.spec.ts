import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ulubione } from './ulubione';

describe('Ulubione', () => {
  let component: Ulubione;
  let fixture: ComponentFixture<Ulubione>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ulubione]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ulubione);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
