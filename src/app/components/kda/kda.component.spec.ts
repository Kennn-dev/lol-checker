import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KdaComponent } from './kda.component';

describe('KdaComponent', () => {
  let component: KdaComponent;
  let fixture: ComponentFixture<KdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KdaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
