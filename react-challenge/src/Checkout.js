import React,{useContext} from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
// import { useStateValue } from "./StateProvider";
// import { StateContext } from "./index.js";
import CheckoutProduct from "./CheckoutProduct";
import { StateContext } from "./App";

function Checkout() {
  const {state,dispatch} = useContext(StateContext);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello, friend {state.user?.email}</h3>
          {state.basket.length==0?
          <div><h2 className="checkout__titlenot">You have nothing in your shopping Basket </h2>
          <h6>To add items in your basket, click "Add to Basket" next to the item. </h6></div>
          :
          <h2 className="checkout__title">Here is a list of your shopping Basket </h2>
          }

          {state.basket.map(x => (
            <CheckoutProduct
              id={x.id}
              title={x.title}
              image={x.image}
              price={x.price}
              rating={x.rating}
            />
          ))}

        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
