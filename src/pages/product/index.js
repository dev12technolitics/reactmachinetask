import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dataproduct from "../../data/product";
import { getProductmanagement } from "../../redux/slices/product";
import Allproduct from "../components/product/Allproduct";

export default function Product() {
  const dispatch = useDispatch();

  const [tableData, setTableData] = useState([]);

  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductmanagement());
  }, [dispatch]);

  useEffect(() => {
    if (product) {
      setTableData(product);
    }
  }, [product]);

  return (
    <>
      <div className="bg-[#F8F8F9] flex justify-center item-center">
        <div className="w-[90%] mt-[40px] mb-[40px] p-12 shadow rounded-lg bg-[#ffff]">
          <h1 className="text-[#0000FF] font-bold">Product</h1>

          <Box
            sx={{
              padding: {
                xs: "0px 3%",
                sm: "0px 3%",
                md: "0px 3%",
                lg: "0px 3%",
              },
            }}
          >
            <div
              className="lg:mt-[100px] md:mt-[100px] sm:mt-[50px] mt-[50px]
                mb-[50px] lg:mb-[100px] md:mb-[100px] sm:mb-[50px] "
            >
              <Grid container>
                {dataproduct.map((item, index) => {
                  return (
                    <Grid
                      xxl={3}
                      xl={3}
                      lg={3}
                      md={4}
                      sm={6}
                      xs={12}
                      sx={{
                        padding: {
                          xs: "0 15px",
                          sm: "0 15px",
                          md: "0 15px",
                          lg: "0 15px",
                        },
                        margin: {
                          xs: "0 0 30px",
                          sm: "0 0 30px",
                          md: "0 0 30px",
                          lg: "0 0 30px",
                        },
                      }}
                      key={index}
                    >
                      <Allproduct key={item.id} item={item} />
                    </Grid>
                  );
                })}
              </Grid>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
}
