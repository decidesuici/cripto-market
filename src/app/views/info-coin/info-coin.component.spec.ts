import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCoinComponent } from './info-coin.component';

describe('InfoCoinComponent', () => {
  let component: InfoCoinComponent;
  let fixture: ComponentFixture<InfoCoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCoinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
