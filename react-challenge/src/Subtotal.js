import React,{useContext} from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
// import { useStateValue } from "./StateProvider";
import { StateContext } from "./App";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const {state,dispatch} = useContext(StateContext);
  console.log('state.basket',state.basket);
  const getBasketTotal = (x) => 
  x.reduce((initialstate, action) => initialstate + action.price, 0);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(initialstate) => (
          <> 
            <p>
              Subtotal ({state.basket.length} items): <strong>{initialstate}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(state.basket)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  );
}
export default Subtotal;

