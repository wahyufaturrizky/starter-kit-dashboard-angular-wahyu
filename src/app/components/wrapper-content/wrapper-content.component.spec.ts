import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperContentComponent } from './wrapper-content.component';

describe('WrapperContentComponent', () => {
  let component: WrapperContentComponent;
  let fixture: ComponentFixture<WrapperContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
