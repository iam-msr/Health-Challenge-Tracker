import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutListComponent } from './workout-list.component';
import { FormsModule } from '@angular/forms';

describe('WorkoutListComponent', () => {
  let component: WorkoutListComponent;
  let fixture: ComponentFixture<WorkoutListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkoutListComponent],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
