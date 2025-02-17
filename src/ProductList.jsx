import React, { useState, useEffect } from "react";
import "./ProductList.css";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

function ProductList() {
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  const handleCartClick = () => {
    setShowCart(true);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image:
            "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15",
        },
        {
          name: "Spider Plant",
          image:
            "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12",
        },
        {
          name: "Peace Lily",
          image:
            "https://cdn.pixabay.com/photo/2016/03/27/21/41/spathiphyllum-1284172_1280.jpg",
          description: "Removes mold spores and other pollutants.",
          cost: "$18",
        },
      ],
    },
    {
      category: "Flowering Plants",
      plants: [
        {
          name: "African Violet",
          image:
            "https://cdn.pixabay.com/photo/2017/02/16/11/10/african-violet-2070875_1280.jpg",
          description: "Beautiful blooms in various colors.",
          cost: "$20",
        },
        {
          name: "Orchid",
          image:
            "https://cdn.pixabay.com/photo/2016/02/19/11/38/orchids-1209705_1280.jpg",
          description: "Elegant and long-lasting flowers.",
          cost: "$30",
        },
        {
          name: "Rose",
          image:
            "https://cdn.pixabay.com/photo/2015/05/28/14/32/rose-788637_1280.jpg",
          description: "Classic symbol of love and beauty.",
          cost: "$25",
        },
      ],
    },
    {
      category: "Succulents",
      plants: [
        {
          name: "Aloe Vera",
          image:
            "https://cdn.pixabay.com/photo/2017/07/24/19/34/aloe-vera-2537033_1280.jpg",
          description: "Medicinal properties and easy to care for.",
          cost: "$10",
        },
        {
          name: "Cactus",
          image:
            "https://cdn.pixabay.com/photo/2016/04/03/07/17/cactus-1305300_1280.jpg",
          description: "Unique shapes and textures.",
          cost: "$8",
        },
        {
          name: "Jade Plant",
          image:
            "https://cdn.pixabay.com/photo/2019/08/08/12/15/jade-plant-4393814_1280.jpg",
          description: "Symbol of good luck and prosperity.",
          cost: "$12",
        },
      ],
    },
  ];

  return (
    <div>
      <div className="navbar">
        <div className="logo">Paradise Nursery</div>
        <ul className="ul">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <div onClick={handleCartClick}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
                alt="My Cart"
                height={40}
                width={40}
              />
              <span className="cart-item-count">{cartItems.length}</span>
            </div>
          </li>
        </ul>
      </div>
      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div key={index}>
              <h1>
                <div>{category.category}</div>
              </h1>
              <div className="product-list">
                {category.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex}>
                    <img
                      className="product-image"
                      src={plant.image}
                      alt={plant.name}
                    />
                    <div className="product-title">{plant.name}</div>
                    <div className="product-description">
                      {plant.description}
                    </div>
                    <div className="product-cost">{plant.cost}</div>
                    <button
                      className={`product-button ${
                        addedToCart[plant.name] ? "added-to-cart" : ""
                      }`}
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedToCart[plant.name]}
                    >
                      {addedToCart[plant.name]
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;