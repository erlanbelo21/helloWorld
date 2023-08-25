import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FillmecartazPage } from './fillmecartaz.page';

describe('FillmecartazPage', () => {
  let component: FillmecartazPage;
  let fixture: ComponentFixture<FillmecartazPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FillmecartazPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
