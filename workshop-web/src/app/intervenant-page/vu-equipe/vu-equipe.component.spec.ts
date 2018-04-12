import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VuEquipeComponent } from './vu-equipe.component';

describe('VuEquipeComponent', () => {
  let component: VuEquipeComponent;
  let fixture: ComponentFixture<VuEquipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuEquipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VuEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
