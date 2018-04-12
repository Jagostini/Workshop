import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VueFicheEleveComponent } from './vue-fiche-eleve.component';

describe('VueFicheEleveComponent', () => {
  let component: VueFicheEleveComponent;
  let fixture: ComponentFixture<VueFicheEleveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueFicheEleveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueFicheEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
