import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerDetailComponent } from './summoner-detail.component';

describe('SummonerDetailComponent', () => {
  let component: SummonerDetailComponent;
  let fixture: ComponentFixture<SummonerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummonerDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummonerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
