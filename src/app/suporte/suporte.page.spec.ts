import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { suportePage } from './suporte.page';

describe('suportePage', () => {
  let component: suportePage;
  let fixture: ComponentFixture<suportePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ suportePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(suportePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
