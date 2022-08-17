import React from "react";
import Product from "./Product";
export default function ProductList(props) {
  return ( props.Productlist.length > 0 ? props.Productlist.map((product, i) => {
    return (
      <Product
        product={product}
        key={i}
        incrementquantity={props.incrementquantity}
        decrementquantity={props.decrementquantity}
        index={i}
        removeitem={props.removeitem}
      /> )
    
  }): <h1>empty</h1>
  );
}
