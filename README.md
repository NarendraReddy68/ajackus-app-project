# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

User Management Application:
A simple React-based User Management application that allows you to add, edit, and delete users. The app fetches user data from a public API and stores it in local storage for persistence. It also handles errors gracefully with an error boundary component.

Features:
Add User: Adds a new user with details like first name, last name, email, and department.
Edit User: Allows editing of existing user details.
Delete User: Removes a user from the list.
Data Persistence: The user data is fetched from a public API and stored locally in the browser.
Error Handling: Errors are caught using an error boundary, ensuring the app remains stable even when unexpected issues occur.
Technologies Used
React: Frontend framework for building the UI.
Local Storage: For storing user data locally in the browser.
Error Boundary: For handling any runtime errors in the app gracefully.
JSONPlaceholder API: Public API used for fetching user data.

Installation
To run this project locally, follow these steps:

Clone the repository:
git clone (https://github.com/NarendraReddy68/ajackus-app-project)

Navigate to the project directory:
cd <project-directory>

Install dependencies:
npm install

Run the development server:
npm start
Open your browser and go to http://localhost:3000.

Usage:
Add a User: Fill out the form with first name, last name, email, and department, then click "Add User".
Edit a User: Click the "Edit" button next to the user you want to modify. Make changes in the form and click "Update User".
Delete a User: Click the "Delete" button next to the user you want to remove.
