import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneComputerPartComponent } from './one-computer-part.component';

describe('OneComputerPartComponent', () => {
  let component: OneComputerPartComponent;
  let fixture: ComponentFixture<OneComputerPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneComputerPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneComputerPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
