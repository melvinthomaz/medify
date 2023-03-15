import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DurablepaymentComponent } from './durablepayment.component';

describe('DurablepaymentComponent', () => {
  let component: DurablepaymentComponent;
  let fixture: ComponentFixture<DurablepaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DurablepaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DurablepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
