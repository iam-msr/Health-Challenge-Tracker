// src/app/services/initial-data.service.ts
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class InitialDataService {
  constructor(private dataService: DataService) {}

  initializeDefaultUsers() {
    if (!this.dataService.hasInitializedUsers()) {
      const defaultUsers: User[] = [
        {
          id: 1,
          name: 'Alice',
          workouts: [
            { type: 'Cycling', minutes: 30 },
            { type: 'Running', minutes: 20 },
          ],
          numberOfWorkouts: 2,
          totalWorkoutMinutes: 50
        },
        {
          id: 2,
          name: 'Bob',
          workouts: [
            { type: 'Yoga', minutes: 60 },
            { type: 'Swimming', minutes: 45 },
          ],
          numberOfWorkouts: 2,
          totalWorkoutMinutes: 105
        },
        {
          id: 3,
          name: 'Charlie',
          workouts: [
            { type: 'Running', minutes: 35 },
            { type: 'Cycling', minutes: 40 },
          ],
          numberOfWorkouts: 2,
          totalWorkoutMinutes: 75
        }
      ];

      this.dataService.initializeUsers(defaultUsers);
    }
  }
}
