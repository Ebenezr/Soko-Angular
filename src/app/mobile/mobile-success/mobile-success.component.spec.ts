import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSuccessComponent } from './mobile-success.component';

describe('MobileSuccessComponent', () => {
  let component: MobileSuccessComponent;
  let fixture: ComponentFixture<MobileSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
