import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEnfantComponent } from './dashboard-enfant.component';

describe('DashboardEnfantComponent', () => {
  let component: DashboardEnfantComponent;
  let fixture: ComponentFixture<DashboardEnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardEnfantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
