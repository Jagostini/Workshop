import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTeamEleveComponent } from './new-team-eleve.component';

describe('NewTeamEleveComponent', () => {
  let component: NewTeamEleveComponent;
  let fixture: ComponentFixture<NewTeamEleveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTeamEleveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTeamEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
