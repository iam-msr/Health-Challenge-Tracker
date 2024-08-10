import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { DataService } from './services/data.service';
@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    WorkoutListComponent,
    SearchFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
