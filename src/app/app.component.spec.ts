// src/app/app.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { InitialDataService } from './services/initial-data.service';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let initialDataServiceSpy: jasmine.SpyObj<InitialDataService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('InitialDataService', ['initializeDefaultUsers']);

    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UserFormComponent,
        SearchFilterComponent,
        WorkoutListComponent
      ],
      imports: [FormsModule],
      providers: [
        { provide: InitialDataService, useValue: spy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    initialDataServiceSpy = TestBed.inject(InitialDataService) as jasmine.SpyObj<InitialDataService>;
    fixture.detectChanges();
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'health-challenge-tracker'`, () => {
    expect(component.title).toEqual('health-challenge-tracker');
  });

  it('should call initializeDefaultUsers on ngOnInit', () => {
    component.ngOnInit();
    expect(initialDataServiceSpy.initializeDefaultUsers).toHaveBeenCalled();
  });

  it('should update searchFilterCriteria when updateSearchFilterCriteria is called', () => {
    const criteria = { name: 'John', type: 'Running' };
    component.updateSearchFilterCriteria(criteria);
    expect(component.searchFilterCriteria).toEqual(criteria);
  });

  it('should render the title in a h1 tag', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Health Challenge Tracker');
  });

  it('should render UserFormComponent', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-user-form')).not.toBeNull();
  });

  it('should render SearchFilterComponent', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-search-filter')).not.toBeNull();
  });

  it('should render WorkoutListComponent', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-workout-list')).not.toBeNull();
  });
});
