import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGoblinComponent } from './new-goblin.component';

describe('NewGoblinComponent', () => {
  let component: NewGoblinComponent;
  let fixture: ComponentFixture<NewGoblinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewGoblinComponent]
    });
    fixture = TestBed.createComponent(NewGoblinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
