import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodProComponent } from './food-pro.component';

describe('FoodProComponent', () => {
  let component: FoodProComponent;
  let fixture: ComponentFixture<FoodProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
