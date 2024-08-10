import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss']
})
export class WorkoutListComponent implements OnInit, OnDestroy {
  @Input() searchFilterCriteria: { name: string, type: string } = { name: '', type: 'all' };
  users: User[] = [];
  private usersSubscription: Subscription = new Subscription();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Subscribe to users$ to get real-time updates
    this.usersSubscription = this.dataService.users$.subscribe(users => {
      this.updateUserList(); // Update user list based on latest data
    });
  }

  ngOnChanges(): void {
    this.updateUserList(); // Ensure to update when search criteria changes
  }

  private updateUserList(): void {
    const { name, type } = this.searchFilterCriteria;
    const users = this.dataService.searchAndFilterUsers(name, type);
    this.users = users; // Assign filtered users to the component's users property
  }

  ngOnDestroy(): void {
    // Unsubscribe to prevent memory leaks
    this.usersSubscription.unsubscribe();
  }
}
