import { atom } from "recoil";
const productData = atom({
  key: "products",
  default: [{}],
});
export default productData;
