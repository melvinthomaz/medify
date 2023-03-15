import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingledurableComponent } from './singledurable.component';

describe('SingledurableComponent', () => {
  let component: SingledurableComponent;
  let fixture: ComponentFixture<SingledurableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingledurableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingledurableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
