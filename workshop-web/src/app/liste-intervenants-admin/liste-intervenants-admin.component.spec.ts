import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeIntervenantsAdminComponent } from './liste-intervenants-admin.component';

describe('ListeIntervenantsAdminComponent', () => {
  let component: ListeIntervenantsAdminComponent;
  let fixture: ComponentFixture<ListeIntervenantsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeIntervenantsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeIntervenantsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
