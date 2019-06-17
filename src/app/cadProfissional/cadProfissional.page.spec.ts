import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { cadProfissionalPage } from './cadProfissional.page';

describe('cadProfissionalPage', () => {
  let component: cadProfissionalPage;
  let fixture: ComponentFixture<cadProfissionalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ cadProfissionalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(cadProfissionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
