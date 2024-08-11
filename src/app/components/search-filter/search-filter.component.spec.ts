import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SearchFilterComponent } from './search-filter.component';
import { By } from '@angular/platform-browser';

describe('SearchFilterComponent', () => {
  let component: SearchFilterComponent;
  let fixture: ComponentFixture<SearchFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchFilterComponent],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default searchName and filterType', () => {
    expect(component.searchName).toBe('');
    expect(component.filterType).toBe('all');
  });

  it('should render search input and select dropdown with default values', () => {
    const nameInput = fixture.debugElement.query(By.css('input[type="text"]')).nativeElement;
    const typeSelect = fixture.debugElement.query(By.css('select')).nativeElement;

    expect(nameInput.value).toBe('');
    expect(typeSelect.value).toBe('all');
  });

  it('should emit searchFilterEvent when searchAndFilter is called', () => {
    spyOn(component.searchFilterEvent, 'emit');

    component.searchName = 'Test User';
    component.filterType = 'Running';

    component.searchAndFilter();

    expect(component.searchFilterEvent.emit).toHaveBeenCalledWith({ name: 'Test User', type: 'Running' });
  });

  it('should update searchName and filterType when user inputs data', () => {
    const nameInput = fixture.debugElement.query(By.css('input[type="text"]')).nativeElement;
    const typeSelect = fixture.debugElement.query(By.css('select')).nativeElement;

    nameInput.value = 'New Name';
    nameInput.dispatchEvent(new Event('input'));

    typeSelect.value = 'Yoga';
    typeSelect.dispatchEvent(new Event('change'));

    fixture.detectChanges();

    expect(component.searchName).toBe('New Name');
    expect(component.filterType).toBe('Yoga');
  });

  it('should render the correct number of workout types in the dropdown', () => {
    const options = fixture.debugElement.queryAll(By.css('option'));

    expect(options.length).toBe(component.workoutTypes.length);
    expect(options.map(option => option.nativeElement.textContent.trim())).toEqual(component.workoutTypes);
  });

  it('should apply filter when button is clicked', () => {
    spyOn(component, 'searchAndFilter');
    const button = fixture.debugElement.query(By.css('button')).nativeElement;

    button.click();

    expect(component.searchAndFilter).toHaveBeenCalled();
  });
});
