import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { cadClientePage } from './cadCliente.page';

describe('cadClientePage', () => {
  let component: cadClientePage;
  let fixture: ComponentFixture<cadClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ cadClientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(cadClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
