import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadMatchComponent } from './head-match.component';

describe('HeadMatchComponent', () => {
  let component: HeadMatchComponent;
  let fixture: ComponentFixture<HeadMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadMatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
