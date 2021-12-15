import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOutlinedBlockComponent } from './button-outlined-block.component';

describe('ButtonOutlinedBlockComponent', () => {
  let component: ButtonOutlinedBlockComponent;
  let fixture: ComponentFixture<ButtonOutlinedBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonOutlinedBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonOutlinedBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
