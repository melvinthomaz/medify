import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgeryeqpComponent } from './surgeryeqp.component';

describe('SurgeryeqpComponent', () => {
  let component: SurgeryeqpComponent;
  let fixture: ComponentFixture<SurgeryeqpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurgeryeqpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurgeryeqpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
