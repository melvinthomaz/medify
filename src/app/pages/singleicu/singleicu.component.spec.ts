import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleicuComponent } from './singleicu.component';

describe('SingleicuComponent', () => {
  let component: SingleicuComponent;
  let fixture: ComponentFixture<SingleicuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleicuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleicuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
