import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculacionabcComponent } from './vinculacionabc.component';

describe('VinculacionabcComponent', () => {
  let component: VinculacionabcComponent;
  let fixture: ComponentFixture<VinculacionabcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinculacionabcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculacionabcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
