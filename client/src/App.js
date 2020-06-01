import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./components/layout/navbar.component";
import Home from "./components/home.component";
import Login from "./components/auth/login.component";
import Register from "./components/auth/register.component";
import Dashboard from "./components/dashboard/dashboard.component";
import NewReview from "./components/products/new-review.component";
import MyReviews from "./components/dashboard/my-reviews.component";
import UserList from "./components/admin/user-list.component";
import ProductList from "./components/admin/product-list.component";
import AddProduct from "./components/admin/add-product.component";
import AdminStats from "./components/admin/stats/admin-stats.component";

// Redux
import store from "./store";
import { loadUser } from "./actions/auth-actions";

function App() {
  store.dispatch(loadUser());
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/my-reviews" component={MyReviews} />
        <Route path="/product/:product_id/new-review" component={NewReview} />
        <Route path="/admin/user-list" component={UserList} />
        <Route path="/admin/product-list" component={ProductList} />
        <Route path="/admin/add-product" component={AddProduct} />
        <Route path="/admin/stats" component={AdminStats} />
      </Switch>
    </Router>
  );
}

export default App;
