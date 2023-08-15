import React from "react";

const MainPage = () => {
  return (
    <div className="main-page">
      <div>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="buttons-cat">
          <button className="shopnow-btn">Shop Now</button>
          <button className="category-btn">Category</button>
        </div>
        <p>Also Available On</p>
        <div>
          <img src="../src/assets/flipkart.png" alt="Flipkart Logo" />
          <img src="../src/assets/amazon.png" alt="Amazon logo" />
        </div>
      </div>
      <div>
        <img src="../src/assets/shoe_image.png" alt="ShoeImage" />
      </div>
    </div>
  );
};

export default MainPage;
