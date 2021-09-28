import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonListsComponent } from './person-lists.component';

describe('PersonListsComponent', () => {
  let component: PersonListsComponent;
  let fixture: ComponentFixture<PersonListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
