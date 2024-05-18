import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RutinasComunitariasPage } from './rutinas-comunitarias.page';

describe('RutinasComunitariasPage', () => {
  let component: RutinasComunitariasPage;
  let fixture: ComponentFixture<RutinasComunitariasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RutinasComunitariasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
