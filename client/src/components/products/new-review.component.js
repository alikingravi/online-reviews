import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProduct } from "../../actions/product-actions";
import { addReview, resetReviewSuccess } from "../../actions/review-actions";
import { Formik } from "formik";
import * as Yup from "yup";
import { StarRating } from "../../components/products/star-rating";
import { AiOutlineRollback } from "react-icons/ai";
import { GoPencil } from "react-icons/go";

class NewReview extends Component {
  state = {
    rating: null,
    msg: null,
  };
  componentDidMount() {
    let productId = this.props.match.params.product_id;
    this.props.getProduct(productId);
    this.props.resetReviewSuccess();

    if (this.props.product.products.length === 0) {
      this.props.history.push("/dashboard");
    }
  }

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      // check for register error
      error.id === "NEW_REVIEW_FAIL"
        ? this.setState({ msg: error.msg })
        : this.setState({ msg: null });
    }

    if (this.props.review.reviewSuccess) {
      this.props.history.push("/my-reviews");
    }
  }

  getRating = (rating) => {
    this.setState({ rating: rating });
  };

  render() {
    const { product } = this.props.product;
    const youtubeId = product ? product.youtubeId : "";
    const productView = product ? (
      <div className="card height-100 align-items-center">
        <img
          className="card-img-top review-img"
          src={product.imageUrl}
          alt="review"
        />
        <div className="card-body">
          <h5 className="card-title">
            {product.name} |
            <small className="text-muted">£{product.price}</small>
          </h5>
          <p className="card-text">Description: {product.description}</p>
        </div>
      </div>
    ) : (
      <div>Not found</div>
    );

    const reviewForm = (
      <div className="card">
        <div className="card-header">Your Review</div>
        <div className="card-body">
          <Formik
            initialValues={{
              title: "",
              reviewtext: "",
              rating: null,
              recommend: false,
            }}
            onSubmit={(values, { setSubmitting }) => {
              if (!this.state.rating) {
                this.setState({ msg: "Please select a star rating" });
                return;
              }
              const { title, reviewtext, recommend } = values;
              const newReview = {
                title,
                reviewtext,
                recommend,
                rating: this.state.rating,
              };
              this.props.addReview(newReview, product.id);
            }}
            validationSchema={Yup.object().shape({
              title: Yup.string().required().min(3).max(50),
              reviewtext: Yup.string().required().min(6).max(1000),
              recommend: Yup.boolean().required(),
            })}
          >
            {(props) => {
              const {
                values,
                touched,
                errors,
                handleChange,
                handleBlur,
                handleSubmit,
              } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.title && touched.title && (
                      <div className="text-danger">{errors.title}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label>Your Review</label>
                    <textarea
                      type="text"
                      name="reviewtext"
                      className="form-control"
                      rows="10"
                      value={values.reviewtext}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.reviewtext && touched.reviewtext && (
                      <div className="text-danger">{errors.reviewtext}</div>
                    )}
                  </div>
                  <div>
                    <StarRating parentCallback={this.getRating} />
                  </div>
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      id="recommend"
                      className="form-check-input"
                      checked={values.recommend}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">
                      Do you recommend this product to friends/family?
                    </label>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    );
    return (
      <div className="container">
        <div className="border shadow-sm p-3 mb-1 mt-3 bg-white rounded text-center">
          <h1 className="d-inline-block text-muted">
            <GoPencil color="#ffc107" /> Write A Review!{" "}
          </h1>
          <small className="position-relative float-left mt-3">
            <Link className="btn btn-outline-info btn-sm" to={"/dashboard"}>
              <AiOutlineRollback />
            </Link>
          </small>
        </div>
        <div className="row mb-5">
          <div className="col-sm-12 col-md-6 mt-3">
            {reviewForm}
            {this.state.msg ? (
              <div className="alert alert-danger mt-3 text-center mx-auto">
                {this.state.msg}
              </div>
            ) : null}
          </div>
          <div className="col-sm-12 col-md-6 mt-3">
            <div className="row">
              <div className="col-12">{productView}</div>
              <div className="col-12 mt-3">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  width="560"
                  height="315"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.products,
  error: state.error,
  review: state.reviews,
});

export default connect(mapStateToProps, {
  getProduct,
  addReview,
  resetReviewSuccess,
})(NewReview);
