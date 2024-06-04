import img1 from "./images/product1.jpg";
import img2 from "./images/product2.jpg";
import img3 from "./images/product3.jpg";
import img4 from "./images/product4.jpg";
import img5 from "./images/product5.jpg";
import img6 from "./images/product6.jpg";
import img7 from "./images/product7.jpg";
import img8 from "./images/product8.jpg";

// this file is used to add item information, so any new additional item needs further entry here, and updates to existing items can be done here
/*

id - identifier(always make sure to add an unique value)
src - image location
productName: Name of the product
price: current price
oldPrice: previous price
sale: Mentione 'Sale' if the item is on Sale, if not then add a empty string("")
rating: add a empty array if the Item got no ratings, and mentioned number of stars for rating(ex: for a 5 star raing add 1, 2, 3, 4, 5).  This count will later used to map items and iterate though to display start icons

*/

const items = [
  {
    id: 0,
    src: img1,
    productName: "Training Recovery Tees",
    price: "$99",
    oldPrice: "$109",
    sale: "Sale",
    rating: [],
  },
  {
    id: 1,
    src: img2,
    productName: "Performance Training Tanks",
    price: "$119",
    oldPrice: "",
    sale: "",
    rating: [1, 2, 3, 4, 5],
  },
  {
    id: 2,
    src: img3,
    productName: "Hybrid Running Gym Shorts",
    price: "$129",
    oldPrice: "$149",
    sale: "Sale",
    rating: [],
  },
  {
    id: 3,
    src: img4,
    productName: "High Split Running Shorts",
    price: "$139",
    oldPrice: "",
    sale: "",
    rating: [1, 2, 3, 4, 5],
  },
  {
    id: 4,
    src: img5,
    productName: "Technical Training Shorts",
    price: "$109",
    oldPrice: "$122",
    sale: "Sale",
    rating: [],
  },
  {
    id: 5,
    src: img6,
    productName: "Technical Training Kit",
    price: "$329",
    oldPrice: "",
    sale: "",
    rating: [],
  },
  {
    id: 6,
    src: img7,
    productName: "Power Lifting Training Kit",
    price: "$319",
    oldPrice: "",
    sale: "",
    rating: [1, 2, 3, 4],
  },
  {
    id: 7,
    src: img8,
    productName: "Technical Training Kit",
    price: "$329",
    oldPrice: "",
    sale: "",
    rating: [],
  },
];

export { items };
