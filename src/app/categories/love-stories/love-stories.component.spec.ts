import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveStoriesComponent } from './love-stories.component';

describe('LoveStoriesComponent', () => {
  let component: LoveStoriesComponent;
  let fixture: ComponentFixture<LoveStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoveStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoveStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
