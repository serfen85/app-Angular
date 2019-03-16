import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentoTarjetaComponent } from './cuento-tarjeta.component';

describe('CuentoTarjetaComponent', () => {
  let component: CuentoTarjetaComponent;
  let fixture: ComponentFixture<CuentoTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentoTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentoTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
