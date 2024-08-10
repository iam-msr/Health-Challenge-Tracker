// src/app/components/user-form/user-form.component.ts
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  name: string = '';
  workoutType: string = '';
  workoutMinutes: number = 0;

  constructor(private dataService: DataService) {}

  addUser() {
    if (this.name && this.workoutType && this.workoutMinutes > 0) {
      const user: User = {
        id: 0, // ID will be set in DataService
        name: this.name,
        workouts: [{ type: this.workoutType, minutes: this.workoutMinutes }],
        numberOfWorkouts: 0, // Placeholder, will be updated in DataService
        totalWorkoutMinutes: 0 // Placeholder, will be updated in DataService
      };
      this.dataService.addUser(user);
      this.clearForm();
    }
  }

  clearForm() {
    this.name = '';
    this.workoutType = '';
    this.workoutMinutes = 0;
  }
}
