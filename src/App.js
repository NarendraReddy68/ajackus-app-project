import React from "react";
import UserList from "./components/UserList";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css"; 

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>User Management Application</h1>
        <p>Manage users with add, edit, and delete functionality.</p>
      </header>
      <ErrorBoundary>
        <UserList />
      </ErrorBoundary>
    </div>
  );
};

export default App;
