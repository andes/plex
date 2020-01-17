import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDetalleComponent } from './sidebar-detalle.component';

describe('SidebarDetalleComponent', () => {
  let component: SidebarDetalleComponent;
  let fixture: ComponentFixture<SidebarDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
