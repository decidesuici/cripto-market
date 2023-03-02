import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCoinsComponent } from './table-coins.component';

describe('TableCoinsComponent', () => {
  let component: TableCoinsComponent;
  let fixture: ComponentFixture<TableCoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCoinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
