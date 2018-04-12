import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDesProjetsComponent } from './list-des-projets.component';

describe('ListDesProjetsComponent', () => {
  let component: ListDesProjetsComponent;
  let fixture: ComponentFixture<ListDesProjetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDesProjetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDesProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
