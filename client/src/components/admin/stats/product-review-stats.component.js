import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getProductReviews } from "../../../actions/product-actions";
import { BarChart } from "../../Charts/BarChart";
import * as _ from "lodash";

class ProductReviewStats extends Component {
  handleOnSelectProduct = (event) => {
    this.props.getProductReviews(event.target.value);
  };

  render() {
    const { products } = this.props.products;
    const { productReviews } = this.props.products;
    let labels = [];
    let productReviewsChartData = [];
    let productReviewsData = {};

    const productOptions = products
      ? products.map((prod) => {
          return (
            <Fragment key={prod.id}>
              <option value={prod.id}>{prod.name}</option>
            </Fragment>
          );
        })
      : null;

    productReviews.map((prod) => {
      labels.push(`User ${prod.userId}`);
      productReviewsChartData.push(prod.rating);
    });

    if (productReviewsChartData.length !== 0) {
      productReviewsData = {
        labels,
        chartLabel: "Product Reviews by Users",
        chartData: productReviewsChartData,
        bgColor: "rgba(19, 168, 205, 0.5)",
      };
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <div className="form-group">
              <label htmlFor="productSelect">Select Product</label>
              <select
                className="form-control"
                id="productSelect"
                onChange={this.handleOnSelectProduct}
              >
                <option>Please select a product ...</option>
                {productOptions}
              </select>
            </div>

            <div className="col-12">
              {!_.isEmpty(productReviewsData) &&
              productReviewsChartData !== 0 ? (
                <BarChart data={productReviewsData} />
              ) : (
                <div className="alert alert-info mt-5" role="alert">
                  <h4 className="alert-heading">Product Rating by User.</h4>
                  <p>Please select a product to view it's data.</p>
                  <hr />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  products: state.products,
});

export default connect(mapStateToProps, { getProductReviews })(
  ProductReviewStats
);
