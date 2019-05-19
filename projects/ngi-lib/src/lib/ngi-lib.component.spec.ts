import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgiLibComponent } from './ngi-lib.component';

describe('NgiLibComponent', () => {
  let component: NgiLibComponent;
  let fixture: ComponentFixture<NgiLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgiLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
