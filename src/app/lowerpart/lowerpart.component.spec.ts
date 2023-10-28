import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerpartComponent } from './lowerpart.component';

describe('LowerpartComponent', () => {
  let component: LowerpartComponent;
  let fixture: ComponentFixture<LowerpartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LowerpartComponent]
    });
    fixture = TestBed.createComponent(LowerpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
