import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { shopPage } from './shop.page';

describe('shopPage', () => {
  let component: shopPage;
  let fixture: ComponentFixture<shopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ shopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(shopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
