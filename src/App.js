import "./App.css";
import Navbar from "./Component/Navbar";
import ProductList from "./Component/ProductList";
import React, { useState } from "react";
import Footer from "./Component/Footer";
import Additem from "./Component/Additem";
import Add from "./Component/Add";

//import  {BrowserRouter as Router ,Route}  from "react-router-dom";

function App() {
  const Product = [
    {
      Name: "Redmi",
      Price: 12000,
      Quantity: 0,
    },
    {
      Name: "Samsung",
      Price: 34000,
      Quantity: 0,
    },
  ];
  let [Productlist, setProductlist] = useState(Product);

  let [totalamount, settotalamount] = useState(0);

  const incrementquantity = (index) => {
    let newProductlist = [...Productlist];
    let newtotalamount = totalamount;
    newProductlist[index].Quantity++;
    newtotalamount += newProductlist[index].Price;
    setProductlist(newProductlist);
    settotalamount(newtotalamount);
  };

  const resetquantity=()=>{
    let newProductlist=[...Productlist];  
newProductlist.map((Product)=>{
  Product.Quantity=0;})
  setProductlist(newProductlist);
  settotalamount(0);
}

const removeitem=(index) =>{
let newProductlist=[...Productlist];
let newtotalamount=totalamount;

newtotalamount-= newProductlist[index].Quantity-newProductlist[index].Price;
newProductlist=newProductlist.splice(index+1,1);
console.log({newProductlist});
setProductlist(newProductlist);
settotalamount(newtotalamount);

};

const additem=(name,price)=>{
  let newProductlist=[...Productlist];
  newProductlist.push({
    Name:name,
    Price:price,
   
Quantity:0,
});
setProductlist(newProductlist);
}

  const decrementquantity = (index) => {
    let newProductlist = [...Productlist];
    let newtotalamount = totalamount;

    if (newProductlist[index].Quantity > 0) {
      newProductlist[index].Quantity--;
      newtotalamount = newtotalamount - newProductlist[index].Price;
    }
    settotalamount(newtotalamount);
    setProductlist(newProductlist);
  };
  return (
    <>
      <Navbar />
      <Add></Add>
<Additem additem={additem}/>
      <ProductList
        Productlist={Productlist}
        incrementquantity={incrementquantity}
        decrementquantity={decrementquantity}
        removeitem={removeitem}
      />

      <Footer totalamount={totalamount}
      resetquantity={resetquantity} />
    </>
  );
}
export default App;
