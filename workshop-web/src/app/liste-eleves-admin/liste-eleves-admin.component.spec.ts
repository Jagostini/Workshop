import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeElevesAdminComponent } from './liste-eleves-admin.component';

describe('ListeElevesAdminComponent', () => {
  let component: ListeElevesAdminComponent;
  let fixture: ComponentFixture<ListeElevesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeElevesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeElevesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
