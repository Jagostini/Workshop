import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreeEquipeEleveComponent } from './cree-equipe-eleve.component';

describe('CreeEquipeEleveComponent', () => {
  let component: CreeEquipeEleveComponent;
  let fixture: ComponentFixture<CreeEquipeEleveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreeEquipeEleveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreeEquipeEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
