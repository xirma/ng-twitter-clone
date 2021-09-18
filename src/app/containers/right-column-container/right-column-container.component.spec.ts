import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightColumnContainerComponent } from './right-column-container.component';

describe('RightColumnContainerComponent', () => {
  let component: RightColumnContainerComponent;
  let fixture: ComponentFixture<RightColumnContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightColumnContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightColumnContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
