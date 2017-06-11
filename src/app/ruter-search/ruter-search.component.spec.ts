import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuterSearchComponent } from './ruter-search.component';

describe('RuterSearchComponent', () => {
  let component: RuterSearchComponent;
  let fixture: ComponentFixture<RuterSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuterSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
