import { TestBed } from '@angular/core/testing';

import { CuentoTarjetaService } from './cuento-tarjeta.service';

describe('CuentoTarjetaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CuentoTarjetaService = TestBed.get(CuentoTarjetaService);
    expect(service).toBeTruthy();
  });
});
