import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEquipeIntervenantComponent } from './list-equipe-intervenant.component';

describe('ListEquipeIntervenantComponent', () => {
  let component: ListEquipeIntervenantComponent;
  let fixture: ComponentFixture<ListEquipeIntervenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEquipeIntervenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEquipeIntervenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
