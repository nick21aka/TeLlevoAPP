import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BateriaCameraPage } from './bateria-camera.page';

describe('BateriaCameraPage', () => {
  let component: BateriaCameraPage;
  let fixture: ComponentFixture<BateriaCameraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BateriaCameraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
