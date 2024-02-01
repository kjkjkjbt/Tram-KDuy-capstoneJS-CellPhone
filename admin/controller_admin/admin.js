    
    import foneService from '../service/service.js';
    import {
    getDataFoneForm,
    onSuccess,
    renderFone,
    showInfoFone,
    } from '../js/controller.js';

    const fetchFone = () => {
    foneService
        .getListFoneApi()
        .then((res) => {
        //   console.log('res: ', res);
        renderFone(res.data);
        })
        .catch((err) => {
        console.log('err: ', err);
        });
    };

    fetchFone();

    // GET :  lấy tất cả product
    // GET(id) :  Lấy product có id đó
    // DELETE : xoá (id)
    // POST : tạo (data)
    // PUT :  update (id,data)

    let deleteFone = (id) => {
    foneService
        .deleteFone(id)
        .then((res) => {
        //   Gọi lại api get list và render ra giao diện
        fetchFone();
        onSuccess('Xoá thành công');
        })
        .catch((err) => {
        console.log('err: ', err);
        });
    };

    window.deleteFone = deleteFone;

    let addFone = () => {
    //   console.log('yes');
    let dataFone = getDataFoneForm();
    foneService
        .addFoneApi(dataFone)
        .then((res) => {
        console.log('res: ', res);
        fetchFone();
        onSuccess('Thêm Thành Công');
        $('#exampleModal').modal('hide');
        })
        .catch((err) => {
        console.log('err: ', err);
        });
    };
    window.addFone = addFone;

    // GET (id)

    let getDataFone=(id) => {
    //   console.log('id: ', id);
    foneService
        .getDataFone(id)
        .then((res) => {
        //   console.log('res: ', res);
        showInfoFone(res.data);
        //   Ấn sửa thì hiện modal
        $('#exampleModal').modal('show');
        })
        .catch((err) => {
        console.log('err: ', err);
        });
    };
    window.getDataFone = getDataFone;

    // update : nut cp nhật. cần id, data new

    // Cần id , và data new
    let updateFone = () => {
    // lấy thông tin từ form
    let dataFone = getDataFoneForm();
    foodSerV
        .updateFoneApi(dataFood)
        .then((res) => {
        console.log('res: ', res);
        fetchFone();
        $('#exampleModal').modal('hide');
        })
        .catch((err) => {
        console.log('err: ', err);
        });
    };

    window.updateFone = updateFone;

