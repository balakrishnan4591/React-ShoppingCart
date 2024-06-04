import { items } from "./data";
import "./Items.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Items({ updateCartTotal, counter }) {
  return (
    <>
      <div
        className="col-md-12"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        {items.map((item) => (
          <li key={item.id}>
            <div className="card" style={{ marginRight: "10px" }}>
              {/* display Sale if the product is on Sale - the value for the same is being passed through data.js */}
              <span
                style={{
                  position: "absolute",
                  textAlign: "right",
                  paddingLeft: "20px",
                }}
              >
                <strong>{items[item.id].sale}</strong>
              </span>

              <img
                src={items[item.id].src}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{items[item.id].productName}</h5>
                <p className="card-text">
                  {/* here we set the old price and do some cosmetic changes(reduce it's opacity and strike the text to differentiate between new and old price) */}
                  <span
                    style={{
                      textDecorationLine: "line-through",
                      opacity: "0.6",
                    }}
                  >
                    {items[item.id].oldPrice}
                  </span>{" "}
                  {items[item.id].price}{" "}
                  {/* Snippets to render rating icon dynamically for individual items */}
                  <span>
                    {items[item.id].rating.map((rate) => (
                      <li key={rate.id} style={{ display: "inline" }}>
                        <FontAwesomeIcon icon={faStar} />
                      </li>
                    ))}
                  </span>
                </p>

                <button
                  key={items[item.id]}
                  id={"button_" + item.id}
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    let buttonVal = document.getElementById(
                      "button_" + item.id
                    ).innerHTML;

                    // Check condition and update the Button text and update the counter value accordingly and the same will be passed to the Parent Component(App.js)
                    if (buttonVal === "Add to Cart") {
                      document.getElementById("button_" + item.id).innerHTML =
                        "Remove from Cart";
                      updateCartTotal(counter + 1);
                    }
                    if (buttonVal === "Remove from Cart") {
                      document.getElementById("button_" + item.id).innerHTML =
                        "Add to Cart";
                      updateCartTotal(counter - 1);
                    }
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </li>
        ))}
      </div>
    </>
  );
}

export default Items;
