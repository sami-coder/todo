import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEntreeComponent } from './update-entree.component';

describe('UpdateEntreeComponent', () => {
  let component: UpdateEntreeComponent;
  let fixture: ComponentFixture<UpdateEntreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEntreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEntreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
