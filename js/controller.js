    const Samsung = true;
    const Iphone= true;
    
    export let renderPhone = (PhoneArr) => {
    
    let contentHtml = "";
    foodArr.reverse().forEach((item) => {
        console.log(item);
        let trString = `
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.name}</td>
                        <td>${item.type == Samsung? "samsung": "iphone "}</td>
                        <td>${item.price}</td>
                        <td>${item.decs}</td>
                        <td>${item.image}</td>
                        <td>${item.frontCamera}</td>
                        <td>${item.backCamera}</td>

                        <td>
                        <button onclick="deleteFone(${
                        item.id
                        })" class= "btn btn-success">Delete</button>
                        <button class="btn btn-primary" onclick="getDetailFone(${
                        item.id
                        })">Sửa</button>
                        </td>
                    </tr>
            `;
        contentHtml += trString;
    });
    document.getElementById("tbodyFone").innerHTML = contentHtml;
    };

    export let onSuccess = (message) => {
    Swal.fire({
        title: message,
        text: "You clicked the button!",
        icon: "success",
    });
};

    export let getDataFoneForm = () => {
    // lấy giá trị người dùng nhập vào từ form
    let id = document.getElementById("idSP").value;
    let name = document.getElementById("tenSP").value;
    let type =
        document.getElementById("type").value == "loai1" ? Samsung: false;

    let price = document.getElementById("giaSP").value;
    let screen = document.getElementById("screen").value;
    let frontCamera= document.getElementById("frontcam").value;
    let backCamera = document.getElementById("backcam").value;
    let image =document.getElementById("img").value;
    let desc = document.getElementById("des").value;


    let fone = {
        id,
        name,
        type,
        price,
        screen,
        frontCamera,
        backCamera,
        image,
        desc,
    };
    return fone;
};

    export let showInfoFone = (dataFone) => {
    console.log("dataFone: ", dataFone);
    document.getElementById("idSP").value = dataFone.id;
    document.getElementById("tenSP").value = dataFone.name;
    document.getElementById("type").value =
        dataFone.type == Samsung? "loai1" : "loai2";
    document.getElementById("giaSP").value = dataFone.price;
    document.getElementById("screen") .value = dataFone.screen;
    document.getElementById ("frontcam").value= dataFone.frontCamera
    document.getElementById("img").value = dataFone.image;
    document.getElementById("des").value = dataFone.desc;
};
