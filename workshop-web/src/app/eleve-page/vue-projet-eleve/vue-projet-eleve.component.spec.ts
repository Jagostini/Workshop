import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VueProjetEleveComponent } from './vue-projet-eleve.component';

describe('VueProjetEleveComponent', () => {
  let component: VueProjetEleveComponent;
  let fixture: ComponentFixture<VueProjetEleveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueProjetEleveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueProjetEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
