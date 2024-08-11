# Health Challenge Tracker

This is an Angular-based Health Challenge Tracker application that allows users to manage and track workout sessions. The application includes dynamic search filtering, pagination, and validation features to ensure proper data entry and management.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Angular CLI](https://angular.io/cli)

## Installing

1. Clone the repository:

   ```bash
   git clone https://github.com/iam-msr/Health-Challenge-Tracker.git


2. Navigate to the project directory:

   ```bash
   cd Health-Challenge-Tracker
   ```
3. To install Angular CLI (if not already installed), run:
  ```bash
  npm install -g @angular/cli
  ```
4. Install the dependencies:

   ```bash
   npm install
   ```

## Running the Application

1. Run the application:

   ```bash
   ng serve
   ```
2. Open your browser and navigate to `http://localhost:4200/`.


## Using the Application

1. Add a Workout:

- Enter a name, select a workout type, and specify the workout duration in minutes. Click "Add Workout" to save the workout.
 - The form will reset after a successful addition.

2. Search and Filter:

 - Use the search box to filter by user name. Select a workout type from the dropdown to filter by workout type.
 - Even if you don't enter any value in the search box, the list will be filtered based on the selected workout type.By default, the list will show all workouts.If you want to see all the workouts, select "All" from the dropdown.
 - In the search box, you can enter any part of the name to filter the list. For example, if you enter "a", the list will show all the users whose name contains "a" & "A".

3. Pagination:

 - Navigate through the paginated list using the "Previous" and "Next" buttons at the bottom of the workout list.

 The workout list will update dynamically based on the filter criteria.
## Running the Tests

To run the tests, run the following command

```bash
ng test
```
This command will open a browser window and run all the tests in your project. The results will be displayed in the terminal as well as in the browser.

## Unit Tests

### DataService

The DataService is a core part of the application responsible for managing user data, including initializing users, adding new users, updating existing users, and filtering users based on search criteria. The unit tests for this service ensure that it behaves as expected.

- Service Creation Test: This test checks that the DataService is successfully created when the application runs.

- Initialization Test: This verifies that users can be initialized and stored in localStorage. It checks that the initializeUsers method works correctly, storing users with the right data.

- Add User Test: This test ensures that new users are added correctly to the system. It checks that after adding a user, the user is stored in localStorage with the correct number of workouts and total workout minutes.

- Update User Test: This test verifies that existing users are updated correctly when adding new workout information. It ensures the user's workout history and total minutes are correctly calculated and stored.

- Search and Filter Test: This test ensures that the service can filter users by their names and workout types accurately.

### SearchFilterComponent

The SearchFilterComponent handles the user input for filtering the workout list based on the user's name and selected workout type. The unit tests for this component focus on ensuring that user interactions and data binding are working as intended.

- Component Creation Test: This test ensures that the SearchFilterComponent is successfully created.

- Default Values Test: This test checks that the component initializes with default values for searchName and filterType.

- Rendering Test: This test verifies that the search input field and dropdown for workout types are correctly rendered with the default values.

- Event Emission Test: This test ensures that when the user performs a search or filter action, the component emits an event with the correct search criteria.

- User Input Test: This test verifies that the component correctly updates its internal values (searchName and filterType) based on user input.

- Dropdown Options Test: This test checks that the correct number of workout types is rendered in the dropdown, matching the available workout options.

- Filter Application Test: This test ensures that the search and filter functionality is applied correctly when the user clicks the filter button.