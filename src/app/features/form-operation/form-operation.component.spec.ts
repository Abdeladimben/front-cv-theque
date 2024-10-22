import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOperationComponent } from './form-operation.component';

describe('FormOperationComponent', () => {
  let component: FormOperationComponent;
  let fixture: ComponentFixture<FormOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormOperationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
