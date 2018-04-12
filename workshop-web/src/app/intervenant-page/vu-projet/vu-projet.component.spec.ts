import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VuProjetComponent } from './vu-projet.component';

describe('VuProjetComponent', () => {
  let component: VuProjetComponent;
  let fixture: ComponentFixture<VuProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VuProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
