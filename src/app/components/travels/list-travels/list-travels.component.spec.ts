import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTravelsComponent } from './list-travels.component';

describe('ListTravelsComponent', () => {
  let component: ListTravelsComponent;
  let fixture: ComponentFixture<ListTravelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTravelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
