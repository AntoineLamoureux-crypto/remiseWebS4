import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewPermitEnfantComponent } from './renew-permit-enfant.component';

describe('RenewPermitEnfantComponent', () => {
  let component: RenewPermitEnfantComponent;
  let fixture: ComponentFixture<RenewPermitEnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenewPermitEnfantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewPermitEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
