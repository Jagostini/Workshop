import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VueIntervenantEleveComponent } from './vue-intervenant-eleve.component';

describe('VueIntervenantEleveComponent', () => {
  let component: VueIntervenantEleveComponent;
  let fixture: ComponentFixture<VueIntervenantEleveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueIntervenantEleveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueIntervenantEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
