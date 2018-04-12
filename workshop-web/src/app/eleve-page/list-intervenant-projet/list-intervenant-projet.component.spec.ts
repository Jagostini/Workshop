import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIntervenantProjetComponent } from './list-intervenant-projet.component';

describe('ListIntervenantProjetComponent', () => {
  let component: ListIntervenantProjetComponent;
  let fixture: ComponentFixture<ListIntervenantProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListIntervenantProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIntervenantProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
