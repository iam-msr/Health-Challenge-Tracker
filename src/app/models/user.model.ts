// src/app/models/user.model.ts
export interface Workout {
    type: string;
    minutes: number;
  }
  
  export interface User {
    id: number;
    name: string;
    workouts: Workout[];
    numberOfWorkouts: number; // Keep this
    totalWorkoutMinutes: number; // Keep this
  }
  