import React from "react";
import "./Home.css";
import Product from "./Product";
import Particles from 'react-particles-js';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__image">
        <Particles
              params={{
                "particles": {
                    "number": {
                        "value": 100
                    },
                    "size": {
                        "value": 3
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
            }} />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="The Fat Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images.unsplash.com/photo-1519656919827-59c35dd3ce77?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZmZlZSUyMG1hY2hpbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />

        </div>


      <div className="home__row">
  

          <Product
            id="90829332"
            title="Nice looking Gun"
            price={1094.98}
            rating={4}
            image="https://colorlib.com/wp/wp-content/uploads/sites/2/gun-store-WordPress-themes-copy-800x533.jpg"
          />

          <Product
            id="90829332"
            title="Nice looking more guns"
            price={1094.98}
            rating={4}
            image="https://colorlib.com/wp/wp-content/uploads/sites/2/gun-store-WordPress-themes-copy-800x533.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
