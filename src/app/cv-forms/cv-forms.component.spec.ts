import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvFormsComponent } from './cv-forms.component';

describe('CvFormsComponent', () => {
  let component: CvFormsComponent;
  let fixture: ComponentFixture<CvFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvFormsComponent]
    });
    fixture = TestBed.createComponent(CvFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
