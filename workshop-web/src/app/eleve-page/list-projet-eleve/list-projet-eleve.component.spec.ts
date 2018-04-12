import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProjetEleveComponent } from './list-projet-eleve.component';

describe('ListProjetEleveComponent', () => {
  let component: ListProjetEleveComponent;
  let fixture: ComponentFixture<ListProjetEleveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProjetEleveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProjetEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
