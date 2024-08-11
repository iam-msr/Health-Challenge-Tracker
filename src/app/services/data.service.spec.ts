import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { User } from '../models/user.model';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
    localStorage.clear(); // Clear localStorage before each test
  });

  afterEach(() => {
    localStorage.clear(); // Clear localStorage after each test
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize users and store them in localStorage', () => {
    const mockUsers: User[] = [
      {
        id: 1,
        name: 'User 1',
        workouts: [{ type: 'Cycling', minutes: 30 }],
        numberOfWorkouts: 1,
        totalWorkoutMinutes: 30
      },
      {
        id: 2,
        name: 'User 2',
        workouts: [{ type: 'Running', minutes: 20 }],
        numberOfWorkouts: 1,
        totalWorkoutMinutes: 20
      }
    ];

    service.initializeUsers(mockUsers);
    const storedUsers = JSON.parse(localStorage.getItem('userData')!);
    expect(storedUsers.length).toBe(2);
    expect(storedUsers[0].name).toBe('User 1');
  });

  it('should check if users are initialized', () => {
    expect(service.hasInitializedUsers()).toBeFalse();
    
    const mockUsers: User[] = [{ id: 1, name: 'User 1', workouts: [{ type: 'Cycling', minutes: 30 }], numberOfWorkouts: 1, totalWorkoutMinutes: 30 }];
    service.initializeUsers(mockUsers);
    
    expect(service.hasInitializedUsers()).toBeTrue();
  });

  it('should add a new user', () => {
    const newUser: User = {
      id: 0,
      name: 'New User',
      workouts: [{ type: 'Swimming', minutes: 45 }],
      numberOfWorkouts: 0,
      totalWorkoutMinutes: 0
    };

    service.addUser(newUser);
    const storedUsers = JSON.parse(localStorage.getItem('userData')!);
    expect(storedUsers.length).toBe(1);
    expect(storedUsers[0].name).toBe('New User');
    expect(storedUsers[0].numberOfWorkouts).toBe(1);
    expect(storedUsers[0].totalWorkoutMinutes).toBe(45);
  });

  it('should update an existing user', () => {
    const existingUser: User = {
      id: 1,
      name: 'Existing User',
      workouts: [{ type: 'Yoga', minutes: 30 }],
      numberOfWorkouts: 1,
      totalWorkoutMinutes: 30
    };

    service.initializeUsers([existingUser]);

    const updatedUser: User = {
      id: 0,
      name: 'Existing User',
      workouts: [{ type: 'Running', minutes: 20 }],
      numberOfWorkouts: 0,
      totalWorkoutMinutes: 0
    };

    service.addUser(updatedUser);

    const storedUsers = JSON.parse(localStorage.getItem('userData')!);
    expect(storedUsers.length).toBe(1);
    expect(storedUsers[0].workouts.length).toBe(2);
    expect(storedUsers[0].totalWorkoutMinutes).toBe(50);
  });

  it('should search and filter users by name and workout type', () => {
    const mockUsers: User[] = [
      {
        id: 1,
        name: 'User 1',
        workouts: [{ type: 'Cycling', minutes: 30 }],
        numberOfWorkouts: 1,
        totalWorkoutMinutes: 30
      },
      {
        id: 2,
        name: 'User 2',
        workouts: [{ type: 'Running', minutes: 20 }, { type: 'Cycling', minutes: 25 }],
        numberOfWorkouts: 2,
        totalWorkoutMinutes: 45
      }
    ];

    service.initializeUsers(mockUsers);

    const result1 = service.searchAndFilterUsers('User 1', 'Cycling');
    expect(result1.length).toBe(1);
    expect(result1[0].name).toBe('User 1');

    const result2 = service.searchAndFilterUsers('User 2', 'Cycling');
    expect(result2.length).toBe(1);
    expect(result2[0].name).toBe('User 2');
    expect(result2[0].workouts.length).toBe(1);
    expect(result2[0].totalWorkoutMinutes).toBe(25);

    const result3 = service.searchAndFilterUsers('', 'Cycling');
    expect(result3.length).toBe(2);
  });
});
