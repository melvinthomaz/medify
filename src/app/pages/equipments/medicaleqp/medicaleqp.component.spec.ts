import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicaleqpComponent } from './medicaleqp.component';

describe('MedicaleqpComponent', () => {
  let component: MedicaleqpComponent;
  let fixture: ComponentFixture<MedicaleqpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicaleqpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicaleqpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
