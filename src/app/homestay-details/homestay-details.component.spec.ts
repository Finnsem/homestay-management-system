import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomestayDetailsComponent } from './homestay-details.component';

describe('HomestayDetailsComponent', () => {
  let component: HomestayDetailsComponent;
  let fixture: ComponentFixture<HomestayDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomestayDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomestayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
