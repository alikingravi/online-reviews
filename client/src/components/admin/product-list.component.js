import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts, deleteProduct } from "../../actions/product-actions";
import { FiUsers } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ProductList extends Component {
  state = {
    deleteModal: false,
    deleteProductId: null,
  };
  componentDidMount() {
    this.props.getProducts();
  }
  handleDeleteProduct = (productId) => {
    this.setState({ deleteProductId: productId });
    this.toggle();
  };

  confirmDeleteProduct = () => {
    this.props.deleteProduct(this.state.deleteProductId);
    this.toggle();
  };

  toggle = () => {
    this.setState({ deleteModal: !this.state.deleteModal });
  };
  render() {
    const { products } = this.props.products;
    const productList = products.length ? (
      products.map((prod) => {
        return (
          <tr key={prod.id}>
            <th scope="row">{prod.id}</th>
            <td>{prod.name}</td>
            <td>{prod.price}</td>
            <td>{prod.description}</td>
            <td>{prod.imageUrl}</td>
            <td>{prod.youtubeId}</td>
            <td>{new Date(prod.createdAt).toLocaleString()}</td>
            <td>{new Date(prod.updatedAt).toLocaleString()}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => this.handleDeleteProduct(prod.id)}
              >
                <MdDeleteForever />
              </button>
            </td>
          </tr>
        );
      })
    ) : (
      <tr>
        <th>No Products Found</th>
      </tr>
    );
    return (
      <div className="container mt-3 mb-5">
        <div className="border shadow-sm p-3 mb-1 bg-white rounded text-center">
          <h1 className="d-inline-block text-muted">
            <FiUsers color="#ffc107" /> All Products
          </h1>
        </div>
        <div className="row mt-4">
          <div className="col-sm-12 col-md-12">
            <div className="table-responsive">
              <table className="table table-hover table-striped">
                <thead>
                  <tr>
                    <th scope="col">Product Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Description</th>
                    <th scope="col">Img Url</th>
                    <th scope="col">Youtube Id</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Updated At</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>{productList}</tbody>
              </table>
            </div>
          </div>
        </div>
        <Modal
          isOpen={this.state.deleteModal}
          toggle={this.toggle}
          className="modal-dialog-centered"
        >
          <ModalHeader toggle={this.toggle}>Delete Product</ModalHeader>
          <ModalBody>
            Are you sure you want to delete this product permanently?
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={() => this.confirmDeleteProduct()}>
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
  products: state.products,
});

export default connect(mapStateToProps, { getProducts, deleteProduct })(
  ProductList
);
