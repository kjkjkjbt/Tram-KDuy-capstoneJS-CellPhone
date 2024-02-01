//https://65a78a0a94c2c5762da6eaba.mockapi.io/carItem
//https://65a78a0a94c2c5762da6eaba.mockapi.io/product
const baseURL = "https://65a78a0a94c2c5762da6eaba.mockapi.io/product";
const cartURL = "https://65a78a0a94c2c5762da6eaba.mockapi.io/carItem";
let getProductListAPI = () => {
  return axios({
    url: baseURL,
    method: "GET",
  });
};
let productServices = {
  getProductListAPI,
};
export default productServices;
