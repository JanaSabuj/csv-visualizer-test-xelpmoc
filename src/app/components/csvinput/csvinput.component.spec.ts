import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvinputComponent } from './csvinput.component';

describe('CsvinputComponent', () => {
  let component: CsvinputComponent;
  let fixture: ComponentFixture<CsvinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
