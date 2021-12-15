import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFilledBlockComponent } from './button-filled-block.component';

describe('ButtonFilledBlockComponent', () => {
  let component: ButtonFilledBlockComponent;
  let fixture: ComponentFixture<ButtonFilledBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonFilledBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonFilledBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
