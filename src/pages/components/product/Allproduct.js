import PropTypes from "prop-types";
import * as React from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { TiEye } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

Allproduct.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
};

export default function Allproduct({ item }) {
  const navigate = useNavigate();

  const { id, amount, type, title, img, tagline, price, dec } = item;

  const handleClickOneData = (id) => {
    navigate("/product/1");
  };

  return (
    <>
      <div className="container_product">
        <img src={img} alt="Avatar" className="image" width="100%" />
        {type ? <span className="product-new">{type}</span> : null}
        <div className="middle">
          <div className="product_center_box">
            <div
              className="box_icon hover_plus mr-[6px]"
              style={{ cursor: "pointer" }}
              onClick={() => handleClickOneData()}
            >
              +
            </div>
            <div className="box_icon mr-[6px] text-[18px]">
              <HiOutlineHeart />
            </div>
            <div
              className="box_icon mr-[6px] text-[18px]"
              style={{ cursor: "pointer" }}
              onClick={() => handleClickOneData()}
            >
              <TiEye />
            </div>
          </div>
        </div>
      </div>

      <div className="product_text_name">
        <h6 className="wooproduct__title" onClick={() => handleClickOneData()}>
          {title}
        </h6>

        <div className="product-tagline">{tagline}</div>
        <div className="product-tagline-price">
          <span class="woocommerce-Price-currencySymbol">₹</span>
          {price}
        </div>
      </div>
    </>
  );
}
