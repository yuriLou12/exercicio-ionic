import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { eletricoPage } from './eletrico.page';

describe('eletricoPage', () => {
  let component: eletricoPage;
  let fixture: ComponentFixture<eletricoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ eletricoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(eletricoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
