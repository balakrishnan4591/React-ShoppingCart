import Nav from "./components/nav/Nav";
import Banner from "./components/banner/Banner";
import Items from "./components/items/Items";
import Footer from "./components/footer/Footer";

import { useState } from "react";

const App = () => {
  //the below mentioned state is used to get values from Child Component(which is later used to update Cart count)
  const [count, setCount] = useState(0);
  function updateCartTotal(c) {
    setCount(c);
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* Nav Component - Navigation Bar: The count value helps update cart count dynamically */}
          <Nav cartCount={count} />
        </div>
        <div className="row">
          {/* Banner Component */}
          <Banner />
        </div>
        <div className="row">
          {/* Items Component -  All item list will be rendered with the help of this component*/}
          <Items updateCartTotal={updateCartTotal} counter={count} />
        </div>
        <div className="row">
          {/* Footer Component */}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
