import React, { Component } from "react";

//style
import style from "./header.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Search from "./Search";
import HeaderNavList from "./HeaderNavList";
import Categories from "../Categories/Categories";
import HeaderLogo from "./Logo";

//style from sidenav
import styleNav from "../Sidenav/sidenav.module.css";
import CartBtn from "./CartBtn";

class Header extends Component {
  state = {
    toggleMobile: false,
    toggleSearch: false
  };

  toggleNavbar = () => {
    this.setState({
      toggleMobile: !this.state.toggleMobile
    });
  };

  toggleInput = () => {
    this.setState({
      toggleSearch: !this.state.toggleSearch
    });
  };

  render() {
    // Destructuring off of this.state
    const { toggleMobile, toggleSearch } = this.state;

    return (
      <header className={toggleMobile ? style.headerMobile : ""}>
        <div className={style.menuMobile}>
          <div className={style.menu}>
            <div className={style.select}>
              <div className={style.menuBurger} onClick={this.toggleNavbar}>
                <div
                  className={
                    toggleMobile ? style.menuLineClose : style.menuLine
                  }
                />
              </div>
              {toggleMobile && (
                <div>
                  <h1>Select category</h1>
                </div>
              )}
            </div>
            <div className={style.mobileSearch}>
              <div className={style.mobileInputContainer}>
                <input
                  type="text"
                  placeholder="Search"
                  className={
                    toggleSearch ? style.mobileInputShow : style.mobileInput
                  }
                />
              </div>
              <div onClick={this.toggleInput}>
                <i className="fas fa-search pointer" />
              </div>
            </div>
          </div>

          <div
            className={`${styleNav.categories} ${!toggleMobile &&
              styleNav.categoriesMobile}`}
          >
            <Categories style={styleNav} />
          </div>
        </div>
        <div className="container container-header">
          <div className="container-col-1 container-col-1-padding">
            <HeaderLogo />
          </div>
          <div className="container-col-2">
            <div className={style.headerItemsTop}>
              <HeaderNavList />
            </div>
            <div className={style.headerItemsBottom}>
              <form onSubmit={this.props.handleSubmit}>
                <Search
                  handleChange={this.props.handleChange}
                  search={this.props.search}
                />
                <CartBtn />
              </form>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
