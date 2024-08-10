// src/app/services/data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private localStorageKey = 'userData';
  private usersSubject = new BehaviorSubject<User[]>(this.getUsers());
  users$ = this.usersSubject.asObservable();

  constructor() {}

  private getUsers(): User[] {
    const data = localStorage.getItem(this.localStorageKey);
    return data ? JSON.parse(data) : [];
  }

  private saveUsers(users: User[]) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(users));
    this.usersSubject.next(users); // Notify subscribers of the new user list
  }

  addUser(user: User) {
    const users = this.getUsers();
    const existingUser = users.find(u => u.name.toLowerCase() === user.name.toLowerCase());

    if (existingUser) {
      // Update existing user
      existingUser.workouts.push(...user.workouts);
      existingUser.numberOfWorkouts = existingUser.workouts.length;
      existingUser.totalWorkoutMinutes = existingUser.workouts.reduce((total, workout) => total + workout.minutes, 0);
    } else {
      // Add new user
      user.id = users.length + 1; // Set ID for new user
      user.numberOfWorkouts = user.workouts.length;
      user.totalWorkoutMinutes = user.workouts.reduce((total, workout) => total + workout.minutes, 0);
      users.push(user);
    }

    this.saveUsers(users);
    console.log('User added/updated:', user);
    console.log('All users:', users);
  }

  searchUsersByName(name: string) {
    const users = this.getUsers();
    return users.filter((user) => user.name.toLowerCase().includes(name.toLowerCase()));
  }

  filterUsersByWorkoutType(type: string) {
    const users = this.getUsers();
    return users.filter((user) => 
      user.workouts.some((workout) => workout.type.toLowerCase() === type.toLowerCase())
    );
  }
}
