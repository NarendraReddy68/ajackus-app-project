import React, { Component } from "react";
import UserForm from "../UserForm";
import "./index.css";

class UserList extends Component {
  state = {
    users: [],
    errorMessage: "",
    loading: false,
    editUser: null, // Tracks the user being edited
  };

  componentDidMount() {
    const localUsers = JSON.parse(localStorage.getItem("users"));

      if (localUsers && localUsers.length > 0) {
        this.setState({ users: localUsers });
      } else {
        this.fetchUsers(); // Fetch users only if local storage is empty
      }
  }

  fetchUsers = async () => {
    this.setState({ loading: true });
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) throw new Error("Failed to fetch users");

      const data = await response.json();
      const transformedUsers = data.map((user) => {
        const [firstName, ...lastNameParts] = user.name.split(" ");
        return {
          id: user.id,
          firstName,
          lastName: lastNameParts.join(" "),
          email: user.email,
          department: user.company.catchPhrase,
        };
      });

      this.setState({ users: transformedUsers });
      this.saveToLocalStorage();
    } catch (error) {
      this.setState({ errorMessage: error.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  saveToLocalStorage = () => {
    localStorage.setItem("users", JSON.stringify(this.state.users));
  };

  handleAddUser = (newUser) => {
    const { users } = this.state;
    const updatedUsers = [
      ...users,
      {
        ...newUser,
        id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
      },
    ];
    this.setState({ users: updatedUsers }, this.saveToLocalStorage);
  };

  handleEditUser = (updatedUser) => {
    const updatedUsers = this.state.users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    this.setState({ users: updatedUsers, editUser: null }, this.saveToLocalStorage);
  };

  handleDeleteUser = (id) => {
    const updatedUsers = this.state.users.filter((user) => user.id !== id);
    this.setState({ users: updatedUsers }, this.saveToLocalStorage);
  };

  render() {
    const { users, errorMessage, loading, editUser } = this.state;

    return (
      <div>
        <h1>User List</h1>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {loading && <p>Loading users...</p>}

        <UserForm
          onAddUser={this.handleAddUser}
          onEditUser={this.handleEditUser}
          editUser={editUser}
        />

        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <p>First Name: {user.firstName}</p>
              <p>Last Name: {user.lastName}</p>
              <p>Email: {user.email}</p>
              <p>Department: {user.department}</p>
              <button onClick={() => this.setState({ editUser: user })}>Edit</button>
              <button onClick={() => this.handleDeleteUser(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
