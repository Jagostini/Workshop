import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIntervenantEleveComponent } from './list-intervenant-eleve.component';

describe('ListIntervenantEleveComponent', () => {
  let component: ListIntervenantEleveComponent;
  let fixture: ComponentFixture<ListIntervenantEleveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListIntervenantEleveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIntervenantEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
