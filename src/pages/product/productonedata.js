import Box from "@mui/material/Box";
import React, { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import dataproduct from "../../data/product";

const ProductDetail = () => {
  const [num, setNum] = useState(0);
  const incNum = () => {
    if (num < 100) {
      setNum(Number(num) + 1);
    }
  };

  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  const handleChange = (e) => {
    setNum(e.target.value);
  };

  return (
    <>
      <div className="product_heading">
        <Box className="flex mt-12 ml-12">
          <h1 className="text-[#0000FF] font-bold">Product</h1>
          <span className="text-[#0000FF]" style={{ margin: "0 5px" }}>
            -
          </span>
          <h1 className="text-[#0000FF] font-bold">Product Detail</h1>
        </Box>
      </div>

      <Box className="px-12">
        <div className="mt-[50px] mb-[100px] ">
          <h1 className="tracking-[.04em] leading-[1.321em]  text-[44px] text-[#0000FF]">
            {dataproduct[0].title}
          </h1>
          <div className="mt-[13px] flex ">
            <span className=" mr-[0.7em]">
              <BsStarFill />
            </span>
            <span className=" mr-[0.7em]">
              <BsStarFill />
            </span>
            <span className=" mr-[0.7em]">
              <BsStarFill />
            </span>
            <span className=" mr-[0.7em]">
              <BsStarFill />
            </span>
            <span className=" mr-[0.7em]">
              <BsStarFill />
            </span>
          </div>

          <div className="mt-[34px] ">
            <p>{dataproduct[0].dec}</p>
          </div>

          <div className="mt-[43px] flex input_box">
            <div className="mr-[20px]">
              <span className="minus cursor-pointer" onClick={decNum}>
                -
              </span>
              <input
                type="text"
                className="quantity-input"
                value={num}
                onChange={handleChange}
              />
              <span className="plus cursor-pointer" onClick={incNum}>
                +
              </span>
            </div>

            <div className="quantity mt-[4px] mb-10">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button
                  type="submit"
                  className=" bg-[#0000FF] text-[#ffff] p-2 shadow rounded-xl"
                >
                  <span className="all">Add To Card</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default ProductDetail;
