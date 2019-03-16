import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentotarjetaComponent } from './cuentotarjeta.component';

describe('CuentotarjetaComponent', () => {
  let component: CuentotarjetaComponent;
  let fixture: ComponentFixture<CuentotarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentotarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentotarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
