import React, { Component } from "react";
import { BarChart } from "../../Charts/BarChart";
import { connect } from "react-redux";
import {
  getProducts,
  getAverageProductRatings,
} from "../../../actions/product-actions";
import { IoIosStats } from "react-icons/io";
import { LineChart } from "../../Charts/LineChart";
import ProductReviewStats from "./product-review-stats.component";

class AdminStats extends Component {
  componentDidMount() {
    this.props.getProducts();
    this.props.getAverageProductRatings();
  }

  state = {};
  render() {
    let labels = [];
    let priceChartData = [];
    let avgRatingChartData = [];
    const { products } = this.props.products;
    const { avgProdRatings } = this.props.products;

    products.map((prod) => {
      labels.push(prod.name);
      priceChartData.push(prod.price);
    });

    const productPricesData = {
      labels,
      chartLabel: "Product Prices (£)",
      chartData: priceChartData,
      bgColor: "rgba(124, 252, 0, 0.5)",
    };

    avgProdRatings.map((prod) => {
      avgRatingChartData.push(prod.rating.toFixed(1));
    });

    const avgProdRatingData = {
      labels,
      chartLabel: "Average Rating Per Product",
      chartData: avgRatingChartData,
      bgColor: "rgba(255, 99, 71, 0.4)",
    };

    return (
      <div className="container mt-3 mb-5">
        <div className="border shadow-sm p-3 mb-1 bg-white rounded text-center">
          <h1 className="d-inline-block text-muted">
            <IoIosStats color="#ffc107" /> Stats
          </h1>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12 col-md-12">
            <BarChart data={productPricesData} />
          </div>
          <div className="col-sm-12 col-md-12 mt-5">
            <LineChart data={avgProdRatingData} />
          </div>
          <div className="col-sm-12 col-md-12 mt-5">
            {/* Product Ratings Component */}
            <ProductReviewStats />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, {
  getProducts,
  getAverageProductRatings,
})(AdminStats);
