import { createSlice } from "@reduxjs/toolkit";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 35,
    imgUrl: "1.PNG",
    desc: "This is the description",
  },
  {
    id: 2,
    name: "Product 2",
    price: 50,
    imgUrl: "2.PNG",
    desc: "This is the description",
  },
  {
    id: 3,
    name: "Product 3",
    price: 75,
    imgUrl: "3.PNG",
    desc: "This is the description",
  },
];

const productSlice = createSlice({
  name: "product",
  initialState: { items: products },
  reducers: {
    addProduct: () => {},
  },
});

export const {addProduct} = productSlice.actions
export default productSlice.reducer
