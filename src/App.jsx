import React, { Component } from "react";
import Header from "./components/layout/Header/Header";
import SideNav from "./components/layout/Sidenav/SideNav";
import Shop from "./components/shop/Shop";
import ProductModal from "./components/shop/ProductModal";

//redux
import { connect } from "react-redux";
import { getProducts, getProduct } from "./redux/actions/productsActions";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      brand: "Select brand",
      skinType: "Select skin type",
      age: "Select age",
      toggle: 0,
      modal: false
    };
  }

  async componentWillMount() {
    await this.props.getProducts();
  }

  onToggle = index => {
    this.setState({
      toggle: index
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  toggleModal = id => {
    this.props.getProduct(id);

    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    console.log(this.props.products);

    return (
      <div>
        <Header
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          search={this.state.search}
        />
        <div className="container">
          <div className="container-col-1">
            {/* <SideNav
              categories={this.state.categories}
              toggle={this.state.toggle}
              onToggle={this.onToggle}
            /> */}
          </div>
          <div className="container-col-2">
            <Shop
              search={this.state.search}
              skinType={this.state.skinType}
              brand={this.state.brand}
              age={this.state.age}
              products={this.props.products}
              isLoading={this.props.isLoading}
              handleChange={this.handleChange}
              toggleModal={this.toggleModal}
            />
          </div>
        </div>
        <ProductModal modal={this.state.modal} toggleModal={this.toggleModal} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.productsReducer.products,
    isLoading: state.productsReducer.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts()),
    getProduct: id => dispatch(getProduct(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
