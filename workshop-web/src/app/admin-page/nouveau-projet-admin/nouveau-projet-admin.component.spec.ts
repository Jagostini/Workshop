import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauProjetAdminComponent } from './nouveau-projet-admin.component';

describe('NouveauProjetAdminComponent', () => {
  let component: NouveauProjetAdminComponent;
  let fixture: ComponentFixture<NouveauProjetAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauProjetAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauProjetAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
