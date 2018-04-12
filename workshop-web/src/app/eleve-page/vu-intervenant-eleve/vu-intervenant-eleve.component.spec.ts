import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VuIntervenantEleveComponent } from './vu-intervenant-eleve.component';

describe('VuIntervenantEleveComponent', () => {
  let component: VuIntervenantEleveComponent;
  let fixture: ComponentFixture<VuIntervenantEleveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuIntervenantEleveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VuIntervenantEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
