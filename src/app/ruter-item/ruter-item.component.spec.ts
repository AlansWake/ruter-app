import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuterItemComponent } from './ruter-item.component';

describe('RuterItemComponent', () => {
  let component: RuterItemComponent;
  let fixture: ComponentFixture<RuterItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuterItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
