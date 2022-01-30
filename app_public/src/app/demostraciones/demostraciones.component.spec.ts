import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemostracionesComponent } from './demostraciones.component';

describe('DemostracionesComponent', () => {
  let component: DemostracionesComponent;
  let fixture: ComponentFixture<DemostracionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemostracionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemostracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
