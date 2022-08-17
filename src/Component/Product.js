import React from "react";
export default function Product(props) {
  return (
    <div className="row mt-3">
      <div className="col-5">
        <h2>{props.product.Name} <span class="badge bg-secondary">₹{props.product.Price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div class="btn-group" role="group" aria-label="Basic mixed styles example" >
          <button type="button" class="btn btn-danger" onClick={()=> {props.decrementquantity(props.index);}}>
            -
          </button>

          <button type="button" class="btn btn-warning">
            {props.product.Quantity}
          </button>

          <button type="button" className="btn btn-success" onClick={() => { props.incrementquantity(props.index);}}>
            +
          </button>
        </div>
      </div>
      <div className="col-4">
        {props.product.Price * props.product.Quantity}
       
        <button type="button" className="btn btn-danger" onClick={()=> {props.removeitem(props.index);}}> remove</button>
      </div>
    </div>
  );
}
