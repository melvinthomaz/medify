import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DurableeqpComponent } from './durableeqp.component';

describe('DurableeqpComponent', () => {
  let component: DurableeqpComponent;
  let fixture: ComponentFixture<DurableeqpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DurableeqpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DurableeqpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
