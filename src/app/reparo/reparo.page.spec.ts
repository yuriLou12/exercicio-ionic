import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { reparoPage } from './reparo.page';

describe('reparoPage', () => {
  let component: reparoPage;
  let fixture: ComponentFixture<reparoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ reparoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(reparoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
