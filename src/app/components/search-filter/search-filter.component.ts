// src/app/components/search-filter/search-filter.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent {
  searchName: string = '';
  filterType: string = 'all';
  workoutTypes: string[] = ['all', 'Yoga', 'Running', 'Cycling', 'Swimming'];

  @Output() searchFilterEvent = new EventEmitter<{ name: string, type: string }>();

  constructor(private dataService: DataService) {}

  searchAndFilter() {
    this.searchFilterEvent.emit({ name: this.searchName, type: this.filterType });
  }
}
