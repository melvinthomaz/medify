import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcupaymentComponent } from './icupayment.component';

describe('IcupaymentComponent', () => {
  let component: IcupaymentComponent;
  let fixture: ComponentFixture<IcupaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcupaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcupaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
