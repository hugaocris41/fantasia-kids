import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EsportePage } from './esporte.page';

describe('EsportePage', () => {
  let component: EsportePage;
  let fixture: ComponentFixture<EsportePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EsportePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
