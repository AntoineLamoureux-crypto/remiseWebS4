import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherPermitComponent } from './afficher-permit.component';

describe('AfficherPermitComponent', () => {
  let component: AfficherPermitComponent;
  let fixture: ComponentFixture<AfficherPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherPermitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
