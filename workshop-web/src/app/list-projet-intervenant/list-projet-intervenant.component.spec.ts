import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProjetIntervenantComponent } from './list-projet-intervenant.component';

describe('ListProjetIntervenantComponent', () => {
  let component: ListProjetIntervenantComponent;
  let fixture: ComponentFixture<ListProjetIntervenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProjetIntervenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProjetIntervenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
