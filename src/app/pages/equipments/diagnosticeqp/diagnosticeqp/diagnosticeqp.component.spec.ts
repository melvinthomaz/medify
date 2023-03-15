import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticeqpComponent } from './diagnosticeqp.component';

describe('DiagnosticeqpComponent', () => {
  let component: DiagnosticeqpComponent;
  let fixture: ComponentFixture<DiagnosticeqpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosticeqpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagnosticeqpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
