// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { InitialDataService } from './services/initial-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'health-challenge-tracker';
  searchFilterCriteria = { name: '', type: 'all' };

  constructor(private initialDataService: InitialDataService) {}

  ngOnInit() {
    this.initialDataService.initializeDefaultUsers();
  }

  updateSearchFilterCriteria(criteria: { name: string, type: string }) {
    this.searchFilterCriteria = criteria;
  }
}
