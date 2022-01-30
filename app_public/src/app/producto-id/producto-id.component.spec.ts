import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoIdComponent } from './producto-id.component';

describe('ProductoIdComponent', () => {
  let component: ProductoIdComponent;
  let fixture: ComponentFixture<ProductoIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
