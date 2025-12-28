import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Logowanie } from './logowanie';

describe('Logowanie', () => {
  let component: Logowanie;
  let fixture: ComponentFixture<Logowanie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Logowanie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Logowanie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
