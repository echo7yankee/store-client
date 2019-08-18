import React from "react";
import ShopType from "./ShopPagination";
import ShopFilter from "./ShopFilter";
import Products from "./Products";

const Shop = ({
  products,
  isLoading,
  toggleModal,
  handleChange,
  search,
  skinType,
  brand,
  age
}) => {
  return (
    <div>
      <ShopType />
      <ShopFilter handleChange={handleChange} />
      <Products
        products={products}
        isLoading={isLoading}
        toggleModal={toggleModal}
        search={search}
        skinType={skinType}
        brand={brand}
        age={age}
      />
    </div>
  );
};

export default Shop;
