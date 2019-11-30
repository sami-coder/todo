import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEntreeComponent } from './add-entree.component';

describe('AddEntreeComponent', () => {
  let component: AddEntreeComponent;
  let fixture: ComponentFixture<AddEntreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEntreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEntreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
