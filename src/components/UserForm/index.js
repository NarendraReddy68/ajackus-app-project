import React, { Component } from "react";

class UserForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  };

  componentDidUpdate(prevProps) {
    if (this.props.editUser && prevProps.editUser !== this.props.editUser) {
      const { firstName, lastName, email, department } = this.props.editUser;
      this.setState({ firstName, lastName, email, department });
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, department } = this.state;
    const { editUser, onAddUser, onEditUser } = this.props;

    if (firstName && lastName && email && department) {
      if (editUser) {
        onEditUser({ ...editUser, firstName, lastName, email, department });
      } else {
        onAddUser({ firstName, lastName, email, department });
      }
      this.setState({ firstName: "", lastName: "", email: "", department: "" });
    } else {
      alert("Please fill out all fields before submitting.");
    }
  };

  render() {
    const { firstName, lastName, email, department } = this.state;
    const { editUser } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>{editUser ? "Edit User" : "Add User"}</h2>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={this.handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={department}
          onChange={this.handleChange}
        />
        <button type="submit">{editUser ? "Update User" : "Add User"}</button>
      </form>
    );
  }
}

export default UserForm;
