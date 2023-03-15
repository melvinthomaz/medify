import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglelaboratoryComponent } from './singlelaboratory.component';

describe('SinglelaboratoryComponent', () => {
  let component: SinglelaboratoryComponent;
  let fixture: ComponentFixture<SinglelaboratoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglelaboratoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglelaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
