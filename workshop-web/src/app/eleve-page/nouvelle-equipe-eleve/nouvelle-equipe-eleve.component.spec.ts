import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleEquipeEleveComponent } from './nouvelle-equipe-eleve.component';

describe('NouvelleEquipeEleveComponent', () => {
  let component: NouvelleEquipeEleveComponent;
  let fixture: ComponentFixture<NouvelleEquipeEleveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouvelleEquipeEleveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleEquipeEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
