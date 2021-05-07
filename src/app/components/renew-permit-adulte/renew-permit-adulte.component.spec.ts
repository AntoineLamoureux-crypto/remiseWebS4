import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewPermitAdulteComponent } from './renew-permit-adulte.component';

describe('RenewPermitAdulteComponent', () => {
  let component: RenewPermitAdulteComponent;
  let fixture: ComponentFixture<RenewPermitAdulteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenewPermitAdulteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewPermitAdulteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
