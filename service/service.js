<<<<<<< HEAD
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
=======
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
    getDetailFoneApi    ,
    updateFoneApi,
    };

    export default foneService;
>>>>>>> 2ec550bd579c73f124999355b1d3347afea52476
