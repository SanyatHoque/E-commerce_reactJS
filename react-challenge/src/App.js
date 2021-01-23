import React, { useEffect,createContext,useReducer } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
// import { useStateValue } from "./StateProvider";
// import { StateContext } from "./index.js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL"
);

export const StateContext = createContext();

// Selector
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

function App() {
  const initialState = {
    basket: [],
    user: null
  };
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          basket: [...state.basket, action.item],
        };
      case 'EMPTY_BASKET':
        return {
          // ...state,
          basket: []
        }
      case "REMOVE_FROM_BASKET":
        const x_index = state.basket.findIndex((x) => x.id === action.id);
        console.log(x_index)
        let newBasket_array = [...state.basket];
        //Index or x_index is just a random number
        if (x_index >= 0) {
          newBasket_array.splice(x_index, 1);
        } else {
          console.warn(
            `Cant remove product (id: ${action.id}) as its not in basket!`
          )
        }
        return {
          // ...state,
          basket: newBasket_array
        }
      case "SET_USER":
        return {
          ...state,
          user: action.user
        }
  
      default:
        return state;
    }
  };
  
  // Prepares the dataLayer
 
  const [state,dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <StateContext.Provider value={{state:state, dispatch:dispatch}}>
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">   
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </StateContext.Provider>
  );
}
// export StateContext;
export {App};
