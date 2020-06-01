import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProducts } from "../../actions/product-actions";
import { MdDashboard } from "react-icons/md";

class Dashboard extends Component {
  // state = {
  //   products: [],
  // };

  componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.push("");
    }

    this.props.getProducts();
  }

  render() {
    const { products } = this.props.productList;

    const productList = products.length ? (
      products.map((prod) => {
        return (
          <div key={prod.id} className="col-sm-12 col-md-4 mt-3">
            <div className="card height-100">
              <img
                className="card-img-top prod-img mx-auto"
                src={prod.imageUrl}
                alt="product"
              />
              <div className="card-body">
                <h3 className="card-title text-center">{prod.name}</h3>
                <p className="card-text text-center">
                  <strong>Price:</strong>{" "}
                  <em className="text-success">£{prod.price}</em>
                </p>
              </div>
              <div className="card-footer text-center">
                {prod.isReviewed ? (
                  <Link
                    to="/my-reviews"
                    className="btn btn-outline-success btn-sm"
                  >
                    Already Reviewed!
                  </Link>
                ) : (
                  <Link
                    to={`/product/${prod.id}/new-review`}
                    className="btn btn-outline-warning btn-sm"
                  >
                    Write Review
                  </Link>
                )}
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div className="alert alert-warning mt-5 w-100" role="alert">
        <h4 className="alert-heading">No Products!</h4>
        <p>Looks like you dont have a list of products available.</p>
        <hr />
        <p className="mb-0">
          Please contact the site admin to set these up for you.
        </p>
      </div>
    );
    return (
      <div className="container mt-3 mb-5">
        <div className="border shadow-sm p-3 mb-1 bg-white rounded text-center">
          <h1 className="d-inline-block text-muted">
            <MdDashboard color="#ffc107" /> My Dashboard
          </h1>
        </div>
        <div className="row">{productList}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  productList: state.products,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps, { getProducts })(Dashboard);
