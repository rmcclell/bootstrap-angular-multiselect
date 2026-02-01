import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapMultiselect } from './ng-bootstrap-multiselect';

describe('NgBootstrapMultiselect', () => {
  let component: NgBootstrapMultiselect;
  let fixture: ComponentFixture<NgBootstrapMultiselect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgBootstrapMultiselect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgBootstrapMultiselect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
