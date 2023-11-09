import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VediComponent } from './vedi.component';

describe('VediComponent', () => {
  let component: VediComponent;
  let fixture: ComponentFixture<VediComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VediComponent]
    });
    fixture = TestBed.createComponent(VediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
