// src/app/components/search-filter/search-filter.component.ts
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent {
  searchName: string = '';
  filterType: string = '';
  filteredUsers: any[] = [];

  constructor(private dataService: DataService) {}

  search() {
    this.filteredUsers = this.dataService.searchUsersByName(this.searchName);
    console.log('Filtered users from search:', this.filteredUsers);
  }

  filter() {
    this.filteredUsers = this.dataService.filterUsersByWorkoutType(this.filterType);
    console.log('Filtered users from filter:', this.filteredUsers);
  }
}
