import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomestayListComponent } from './homestay-list.component';

describe('HomestayListComponent', () => {
  let component: HomestayListComponent;
  let fixture: ComponentFixture<HomestayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomestayListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomestayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
