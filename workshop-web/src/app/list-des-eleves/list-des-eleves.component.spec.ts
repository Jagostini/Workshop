import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDesElevesComponent } from './list-des-eleves.component';

describe('ListDesElevesComponent', () => {
  let component: ListDesElevesComponent;
  let fixture: ComponentFixture<ListDesElevesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDesElevesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDesElevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
