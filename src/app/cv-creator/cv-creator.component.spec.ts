import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvCreatorComponent } from './cv-creator.component';

describe('CvCreatorComponent', () => {
  let component: CvCreatorComponent;
  let fixture: ComponentFixture<CvCreatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvCreatorComponent]
    });
    fixture = TestBed.createComponent(CvCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
