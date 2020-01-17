import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainListadoComponent } from './main-listado.component';

describe('MainListadoComponent', () => {
  let component: MainListadoComponent;
  let fixture: ComponentFixture<MainListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
