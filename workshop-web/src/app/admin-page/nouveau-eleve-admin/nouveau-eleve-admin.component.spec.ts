import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauEleveAdminComponent } from './nouveau-eleve-admin.component';

describe('NouveauEleveAdminComponent', () => {
  let component: NouveauEleveAdminComponent;
  let fixture: ComponentFixture<NouveauEleveAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauEleveAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauEleveAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
