import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauIntervenantAdminComponent } from './nouveau-intervenant-admin.component';

describe('NouveauIntervenantAdminComponent', () => {
  let component: NouveauIntervenantAdminComponent;
  let fixture: ComponentFixture<NouveauIntervenantAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauIntervenantAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauIntervenantAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
