import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservadorComponent } from './observador.component';

describe('ObservadorComponent', () => {
  let component: ObservadorComponent;
  let fixture: ComponentFixture<ObservadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
