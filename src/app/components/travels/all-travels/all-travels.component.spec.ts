import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTravelsComponent } from './all-travels.component';

describe('AllTravelsComponent', () => {
  let component: AllTravelsComponent;
  let fixture: ComponentFixture<AllTravelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTravelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
