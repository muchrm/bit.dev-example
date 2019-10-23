import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBtnComponent } from './list-btn.component';

describe('ListBtnComponent', () => {
  let component: ListBtnComponent;
  let fixture: ComponentFixture<ListBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
