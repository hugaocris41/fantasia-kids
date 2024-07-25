import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FantasiaPage } from './fantasia.page';

describe('FantasiaPage', () => {
  let component: FantasiaPage;
  let fixture: ComponentFixture<FantasiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FantasiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
