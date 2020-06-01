import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getMyReviews } from "../../actions/review-actions";
import { Link } from "react-router-dom";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FcDislike, FcLike } from "react-icons/fc";
import { StarRatingDisplay } from "../products/star-rating-display";
import { MdRateReview } from "react-icons/md";

class MyReviews extends Component {
  state = {};

  componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.push("");
    }

    this.props.getMyReviews();
  }

  render() {
    const { reviews } = this.props.reviewList;

    const reviewList = reviews.length ? (
      reviews.map((rev) => {
        return (
          <div key={rev.id} className="col-12 mt-3">
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src={rev.imageUrl}
                    className="card-img prod-img ml-5"
                    alt="product"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h4 className="card-title">
                      {rev.name} |
                      <small className="text-muted"> £{rev.price}</small>
                    </h4>
                    <h6>{rev.title}</h6>
                    <p className="card-text">
                      <FaQuoteLeft />
                      &nbsp;{rev.reviewtext}&nbsp;
                      <FaQuoteRight />
                    </p>
                    <StarRatingDisplay userRating={rev.rating} />
                    <p className="card-text">
                      Recommended:
                      {rev.recommend ? (
                        <Fragment>
                          <AiOutlineLike color="#228B22" /> <FcLike />
                        </Fragment>
                      ) : (
                        <Fragment>
                          <AiOutlineDislike color="#FF6347" /> <FcDislike />
                        </Fragment>
                      )}
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Date: {new Date(rev.createdAt).toLocaleString()}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div className="alert alert-warning mt-5 w-100" role="alert">
        <h4 className="alert-heading">No Reviews!</h4>
        <p>You have not reviewed any of our products yet.</p>
        <hr />
        <p className="mb-0">
          Go to <Link to="/dashboard">Your Dashboard</Link> and select a product
          to review.
        </p>
      </div>
    );
    return (
      <div className="container mt-3">
        <div className="border shadow-sm p-3 mb-1 bg-white rounded text-center">
          <h1 className="d-inline-block text-muted">
            <MdRateReview color="#ffc107" /> My Reviews
          </h1>
        </div>
        <div className="row">{reviewList}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reviewList: state.reviews,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getMyReviews })(MyReviews);
