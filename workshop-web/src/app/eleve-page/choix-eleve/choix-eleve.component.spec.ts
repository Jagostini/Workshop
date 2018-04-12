import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixEleveComponent } from './choix-eleve.component';

describe('ChoixEleveComponent', () => {
  let component: ChoixEleveComponent;
  let fixture: ComponentFixture<ChoixEleveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixEleveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
