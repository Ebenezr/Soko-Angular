import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCheckoutComponent } from './mobile-checkout.component';

describe('MobileCheckoutComponent', () => {
  let component: MobileCheckoutComponent;
  let fixture: ComponentFixture<MobileCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileCheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
