import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VuProjetEleveComponent } from './vu-projet-eleve.component';

describe('VuProjetEleveComponent', () => {
  let component: VuProjetEleveComponent;
  let fixture: ComponentFixture<VuProjetEleveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuProjetEleveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VuProjetEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
