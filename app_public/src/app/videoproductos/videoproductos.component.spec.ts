import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoproductosComponent } from './videoproductos.component';

describe('VideoproductosComponent', () => {
  let component: VideoproductosComponent;
  let fixture: ComponentFixture<VideoproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoproductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
