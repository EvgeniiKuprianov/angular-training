import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountOfCurrencyInputComponent } from './amount-of-currency-input.component';

describe('AmountOfCurrencyInputComponent', () => {
  let component: AmountOfCurrencyInputComponent;
  let fixture: ComponentFixture<AmountOfCurrencyInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountOfCurrencyInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountOfCurrencyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
