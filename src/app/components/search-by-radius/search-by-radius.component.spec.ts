import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByRadiusComponent } from './search-by-radius.component';

describe('SearchByRadiusComponent', () => {
  let component: SearchByRadiusComponent;
  let fixture: ComponentFixture<SearchByRadiusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByRadiusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByRadiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
