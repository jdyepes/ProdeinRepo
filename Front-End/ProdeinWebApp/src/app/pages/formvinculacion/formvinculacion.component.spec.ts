import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormvinculacionComponent } from './formvinculacion.component';

describe('FormvinculacionComponent', () => {
  let component: FormvinculacionComponent;
  let fixture: ComponentFixture<FormvinculacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormvinculacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormvinculacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
