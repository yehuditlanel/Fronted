import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTrackComponent } from './all-track.component';

describe('AllTrackComponent', () => {
  let component: AllTrackComponent;
  let fixture: ComponentFixture<AllTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
