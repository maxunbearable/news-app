import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopheadingComponent } from './top-heading.component';

describe('TopheadingComponent', () => {
  let component: TopheadingComponent;
  let fixture: ComponentFixture<TopheadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopheadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
