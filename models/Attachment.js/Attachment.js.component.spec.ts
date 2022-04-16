/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Attachment.jsComponent } from './Attachment.js.component';

describe('Attachment.jsComponent', () => {
  let component: Attachment.jsComponent;
  let fixture: ComponentFixture<Attachment.jsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Attachment.jsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Attachment.jsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
