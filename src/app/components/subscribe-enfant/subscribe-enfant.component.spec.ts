import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeEnfantComponent } from './subscribe-enfant.component';

describe('SubscribeEnfantComponent', () => {
  let component: SubscribeEnfantComponent;
  let fixture: ComponentFixture<SubscribeEnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeEnfantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
