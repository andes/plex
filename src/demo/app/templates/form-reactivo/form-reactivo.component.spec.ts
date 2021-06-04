import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactivoComponent } from './form-reactivo.component';

describe('FormReactivoComponent', () => {
  let component: FormReactivoComponent;
  let fixture: ComponentFixture<FormReactivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReactivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
