import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationIntervenantEleveComponent } from './validation-intervenant-eleve.component';

describe('ValidationIntervenantEleveComponent', () => {
  let component: ValidationIntervenantEleveComponent;
  let fixture: ComponentFixture<ValidationIntervenantEleveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationIntervenantEleveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationIntervenantEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
