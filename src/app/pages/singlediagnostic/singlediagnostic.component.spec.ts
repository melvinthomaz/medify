import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglediagnosticComponent } from './singlediagnostic.component';

describe('SinglediagnosticComponent', () => {
  let component: SinglediagnosticComponent;
  let fixture: ComponentFixture<SinglediagnosticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglediagnosticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglediagnosticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
