import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDesIntervenantsComponent } from './list-des-intervenants.component';

describe('ListDesIntervenantsComponent', () => {
  let component: ListDesIntervenantsComponent;
  let fixture: ComponentFixture<ListDesIntervenantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDesIntervenantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDesIntervenantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
