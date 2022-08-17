import React from "react";

export default function Footer(props) {
  
  return (
    <div className="fixed-bottom row">
      <button type="button" className="btn btn-danger col-2" onClick={()=>props.resetquantity()}>
        reset
      </button>
      <div className="col-8 bg-dark text-white text-center">
        Grand Total : ₹{props.totalamount}/-
        </div>
        <button className="btn btn-primary col-2">Pay Now</button>
      
    </div>
  );
}
