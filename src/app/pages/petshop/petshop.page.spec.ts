import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetshopPage } from './petshop.page';

describe('PetshopPage', () => {
  let component: PetshopPage;
  let fixture: ComponentFixture<PetshopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetshopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetshopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
