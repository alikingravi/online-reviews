import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addProduct,
  resetAddProductSuccess,
} from "../../actions/product-actions";
import { Formik } from "formik";
import * as Yup from "yup";
import { MdAddShoppingCart } from "react-icons/md";

class AddProduct extends Component {
  state = {
    msg: null,
  };
  componentDidMount() {
    this.props.resetAddProductSuccess();
  }
  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      // check for register error
      error.id === "ADD_PRODUCT_FAIL"
        ? this.setState({ msg: error.msg })
        : this.setState({ msg: null });
    }
    if (this.props.addProductSuccess) {
      this.props.history.push("/admin/product-list");
    }
  }
  render() {
    return (
      <div className="container">
        <div className="border shadow-sm p-3 mb-1 mt-3 bg-white rounded text-center">
          <h1 className="d-inline-block text-muted">
            <MdAddShoppingCart color="#ffc107" /> Add New Product{" "}
          </h1>
        </div>
        <div className="row justify-content-center mt-4 mb-5">
          <div className="col-sm-12 col-md-8">
            <div className="card mx-auto">
              <div className="card-header">New Product</div>
              <div className="card-body">
                <Formik
                  initialValues={{
                    name: "",
                    price: "",
                    description: "",
                    imageUrl: "",
                    youtubeId: "",
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                    const {
                      name,
                      price,
                      description,
                      imageUrl,
                      youtubeId,
                    } = values;
                    const newProduct = {
                      name,
                      price,
                      description,
                      imageUrl,
                      youtubeId,
                    };
                    this.props.addProduct(newProduct);
                  }}
                  validationSchema={Yup.object().shape({
                    name: Yup.string().required().min(3).max(50),
                    price: Yup.string().required(),
                    description: Yup.string().required().min(6).max(1000),
                    imageUrl: Yup.string().required(),
                    youtubeId: Yup.string().required(),
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
                          <label>Name</label>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.name && touched.name && (
                            <div className="text-danger">{errors.name}</div>
                          )}
                        </div>
                        <div className="form-group">
                          <label>Price</label>
                          <input
                            type="text"
                            name="price"
                            className="form-control"
                            value={values.price}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.price && touched.price && (
                            <div className="text-danger">{errors.price}</div>
                          )}
                        </div>
                        <div className="form-group">
                          <label>Description</label>
                          <textarea
                            type="text"
                            name="description"
                            className="form-control"
                            value={values.description}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.description && touched.description && (
                            <div className="text-danger">
                              {errors.description}
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <label>Image Url</label>
                          <input
                            type="text"
                            name="imageUrl"
                            className="form-control"
                            value={values.imageUrl}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <small className="form-text text-muted">
                            For example:&nbsp;
                            <u>
                              https://brain-images-ssl.cdn.dixons.com/4/8/10186584/l_10186584_002.jpg
                            </u>
                          </small>
                          {errors.imageUrl && touched.imageUrl && (
                            <div className="text-danger">{errors.imageUrl}</div>
                          )}
                        </div>
                        <div className="form-group">
                          <label>Youtube Id</label>
                          <input
                            type="text"
                            name="youtubeId"
                            className="form-control"
                            value={values.youtubeId}
                            placeholder="88iVCBe_ho8"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <small className="form-text text-muted">
                            For example: https://www.youtube.com/watch?v=
                            <mark>88iVCBe_ho8</mark>
                          </small>
                          {errors.youtubeId && touched.youtubeId && (
                            <div className="text-danger">
                              {errors.youtubeId}
                            </div>
                          )}
                        </div>
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary">
                            Add
                          </button>
                        </div>
                      </form>
                    );
                  }}
                </Formik>
              </div>
            </div>
            {this.state.msg ? (
              <div className="alert alert-danger mt-3 text-center mx-auto">
                {this.state.msg}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  addProductSuccess: state.products.addProductSuccess,
  error: state.error,
});

export default connect(mapStateToProps, { addProduct, resetAddProductSuccess })(
  AddProduct
);
