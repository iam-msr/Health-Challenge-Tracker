// src/app/components/workout-list/workout-list.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from '../../models/user.model'; // Import User

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss']
})
export class WorkoutListComponent implements OnInit {
  users: User[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.users$.subscribe(users => {
      this.users = users;
    });
  }
}
