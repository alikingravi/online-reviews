import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers, deleteUser } from "../../actions/user-actions";
import { FiUsers } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class UserList extends Component {
  state = {
    deleteModal: false,
    deleteUserId: null,
  };
  componentDidMount() {
    this.props.getUsers();
  }
  handleDeleteUser = (userId) => {
    this.setState({ deleteUserId: userId });
    this.toggle();
  };

  confirmDeleteUser = () => {
    this.props.deleteUser(this.state.deleteUserId);
    this.toggle();
  };

  toggle = () => {
    this.setState({ deleteModal: !this.state.deleteModal });
  };
  render() {
    const { users } = this.props.users;
    const userList = users.length ? (
      users.map((user) => {
        return (
          <tr key={user.id}>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.admin ? "Yes" : "No"}</td>
            <td>{new Date(user.createdAt).toLocaleString()}</td>
            <td>{new Date(user.updatedAt).toLocaleString()}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => this.handleDeleteUser(user.id)}
              >
                <MdDeleteForever />
              </button>
            </td>
          </tr>
        );
      })
    ) : (
      <tr>
        <th>No Users Found</th>
      </tr>
    );
    return (
      <div className="container mt-3 mb-5">
        <div className="border shadow-sm p-3 mb-1 bg-white rounded text-center">
          <h1 className="d-inline-block text-muted">
            <FiUsers color="#ffc107" /> All Users
          </h1>
        </div>
        <div className="row mt-4">
          <div className="col-sm-12 col-md-12">
            <div className="table-responsive">
              <table className="table table-hover table-striped">
                <thead>
                  <tr>
                    <th scope="col">User Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">email</th>
                    <th scope="col">Admin</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Updated At</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>{userList}</tbody>
              </table>
            </div>
          </div>
        </div>
        <Modal
          isOpen={this.state.deleteModal}
          toggle={this.toggle}
          className="modal-dialog-centered"
        >
          <ModalHeader toggle={this.toggle}>Delete User</ModalHeader>
          <ModalBody>
            Are you sure you want to delete this user permanently?
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={() => this.confirmDeleteUser()}>
              Confirm
            </Button>
            <Button color="danger" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  users: state.users,
});

export default connect(mapStateToProps, { getUsers, deleteUser })(UserList);
