import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterColumnContainerComponent } from './center-column-container.component';

describe('CenterColumnContainerComponent', () => {
  let component: CenterColumnContainerComponent;
  let fixture: ComponentFixture<CenterColumnContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterColumnContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterColumnContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
