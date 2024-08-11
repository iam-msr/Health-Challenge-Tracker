import { Component, Input, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss']
})
export class WorkoutListComponent implements OnInit, OnDestroy, OnChanges {
  @Input() searchFilterCriteria: { name: string, type: string } = { name: '', type: 'all' };
  users: User[] = [];
  currentPage = 1;
  totalUsers = 0;
  pageSize = 5;
  private usersSubscription: Subscription = new Subscription();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.usersSubscription = this.dataService.users$.subscribe(() => {
      this.updateUserList(); // Update user list based on latest data
    });
    this.updateUserList(); // Initialize the user list
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchFilterCriteria']) {
      this.currentPage = 1; // Reset to first page when filter criteria change
      this.updateUserList(); // Update list when search criteria change
    }
  }

  private updateUserList(): void {
    const { name, type } = this.searchFilterCriteria;
    console.log('Filtering users by:', name, type);

    // Filter users based on search criteria
    const filteredUsers = this.dataService.searchAndFilterUsers(name, type);
    console.log('Filtered users:', filteredUsers);
    this.totalUsers = filteredUsers.length;
    
    // Calculate paginated users
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.users = filteredUsers.slice(start, end);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.updateUserList();
  }

  getTotalPages(): number {
    return Math.ceil(this.totalUsers / this.pageSize);
  }
  
  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }// to destroy the subscription when the component is destroyed
}
