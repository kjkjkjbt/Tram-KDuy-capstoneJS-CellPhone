import productServices from "../../service/service.js";
const fetchProductList = () => {
  productServices
    .getProductListAPI()
    .then(function (res) {
      let contentHTML = "";
      let productArr = res.data;
      productArr.reverse().forEach((item) => {
        let dataStr = `
        <div class="col-xl-3 col-sm-6 productItem">
        <div class="productContainer">
          <img
            src="${item.image}"
            alt=""
            class="productImage"
            id="image"
          />
          <p onclick="viewProductDetail(${item.id})" class="productName" id="name">${item.name}</p>
          <p class="productPrice" id="price">${item.price}</p>
          <span class="cameraDetail">
            <span class="productBackCam" id="backCamera">${item.backCamera} MP</span>
            <span class="productFontCam" id="fontCamera">${item.frontCamera} MP</span>
            <span class="productScreen" id="screen">${item.screen}"</span>
          </span>
          <p class="productDecs" id="decs">
            ${item.desc}
          </p>
          <span style="display: block; margin-top: 10px">
            <button onclick="viewProductDetail(${item.id})" class="btn btn-primary" id="viewDetail">
              Chi Tiết
            </button>
            <button class="btn btn-primary" id="addToCart">Mua Ngay</button>
          </span>
        </div>
      </div>`;
        contentHTML += dataStr;
        console.log("🤪 ~ productArr.reverse ~ contentHTML:", contentHTML);

        document.getElementById("productList").innerHTML = contentHTML;
      });
    })
    .catch(function (err) {
      console.log(err);
    });
};
fetchProductList();
const viewProductDetail = (id) => {
  let index = id;
  console.log(id);
  $("#productDetailModal").modal("show");
  productServices
    .getProductListAPI()
    .then(function (res) {
      let productArr = res.data;
      let product;
      for (var i = 0; i < productArr.length; i++) {
        if (productArr[i].id == index) {
          console.log("🤪 ~ productArr:", productArr[i]);
          product = productArr[i];
        }
      }
      console.log("🤪 ~ .getProductListAPI ~ product:", product);
      document.getElementById("phoneName").innerText = product.name;
      document.getElementById("phonePrice").innerText = product.price;
      document.getElementById("phoneFrontCam").innerText =
        "Camera trước " + product.frontCamare + "MP";
      document.getElementById("phoneBackCam").innerText =
        "Camera sau " + product.backCamera + "MP";
      document.getElementById("phoneScreen").innerText =
        "Kích thước màn hình " + product.screen;
      document.getElementById("phoneDesc").innerText = product.desc;
      document.getElementById("phoneImage").src = product.image;
    })
    .catch(function (err) {
      console.log(err);
    });
};
window.viewProductDetail = viewProductDetail;
