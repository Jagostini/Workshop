import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VueProjetAdminComponent } from './vue-projet-admin.component';

describe('VueProjetAdminComponent', () => {
  let component: VueProjetAdminComponent;
  let fixture: ComponentFixture<VueProjetAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueProjetAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueProjetAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
