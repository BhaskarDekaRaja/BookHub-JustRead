import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonFictionComponent } from './non-fiction.component';

describe('NonFictionComponent', () => {
  let component: NonFictionComponent;
  let fixture: ComponentFixture<NonFictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonFictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonFictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
