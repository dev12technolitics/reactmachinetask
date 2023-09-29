import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
  isLoading: false,
  error: null,
  product: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getProductSuccess(state, action) {
      state.isLoading = false;
      state.product = action.payload;
    },
  },
});
export default productSlice.reducer;

export function getProductmanagement() {
  return async (dispatch) => {
    dispatch(productSlice.actions.startLoading());
    try {
      const response = await axios.get("/product/all");
      dispatch(productSlice.actions.getProductSuccess(response.data));
    } catch (error) {
      dispatch(productSlice.actions.hasError(error));
    }
  };
}
