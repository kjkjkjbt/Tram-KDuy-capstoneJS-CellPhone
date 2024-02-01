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

const BASE_URL = "https://65a78a0a94c2c5762da6eaba.mockapi.io/product";

let getListFoneApi = () => {
  return axios({
    url: BASE_URL,
    method: "GET",
  });
};

let deleteFoneApi = (id) => {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "DELETE",
  });
};

let addFoneApi = (dataFone) => {
  return axios({
    url: BASE_URL,
    method: "POST",
    data: dataFone,
  });
};

let getDetailFoneApi = (id) => {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "GET",
  });
};

let updateFoneApi = (data) => {
  return axios({
    url: `${BASE_URL}/${data.id}`,
    method: "PUT",
    data: data,
  });
};

let foneService = {
  getListFoneApi,
  deleteFoneApi,
  addFoneApi,
  getDetailFoneApi,
  updateFoneApi,
  getProductListAPI,
};

export default foneService;
