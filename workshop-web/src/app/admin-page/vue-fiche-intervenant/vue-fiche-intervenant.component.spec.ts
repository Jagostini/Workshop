import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VueFicheIntervenantComponent } from './vue-fiche-intervenant.component';

describe('VueFicheIntervenantComponent', () => {
  let component: VueFicheIntervenantComponent;
  let fixture: ComponentFixture<VueFicheIntervenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueFicheIntervenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueFicheIntervenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
