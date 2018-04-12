import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixIntervenantComponent } from './choix-intervenant.component';

describe('ChoixIntervenantComponent', () => {
  let component: ChoixIntervenantComponent;
  let fixture: ComponentFixture<ChoixIntervenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixIntervenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixIntervenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
