var app = angular.module("web207", []);
app.controller("web207-ctrl", function ($scope, $http) {


    //lấy danh sách sp
    $http.get(`https://63edbd065e9f1583bdb51b69.mockapi.io/toanhdph21327/hoa-tuoi`).then(function (response) {
        $scope.products = response.data;
    });
    const url = "https://63edbd065e9f1583bdb51b69.mockapi.io/toanhdph21327/hoa-tuoi";
    const getUrlWithId = function (id) {
        return url + "/" + id;
    }

    const getUrlWithId1 = function (name) {
        return url + "/" + name;
    }
    // xóa sản phẩm theo id
    $scope.deleteProductById = function (deleteId) {
        var urlWithId = getUrlWithId(deleteId);
        $http.delete(urlWithId).then(function (response) {
            alert("DELETE SUCCESSFULLY")
            location.reload();
        })
    }, function (error) {
        alert("NOT!")
    }

    // thêm sản phẩm
    const getProduct = function () {
        return {
            "name": $scope.name,
            "price": $scope.price,
            "quantity": $scope.quantity,
            "img": $scope.img
        }
    }
    $scope.createProduct = function () {
        var createProduct = getProduct();
        $http.post(url, createProduct).then(function (response) {
            alert("INSERT SUCCESSFULLY");
        });
    }, function (error) {
        alert("NOT!");
    }
    // chi tiet san phẩm theo id
    $scope.getProduct = function (id) {
        $http.get("https://63edbd065e9f1583bdb51b69.mockapi.io/toanhdph21327/hoa-tuoi/" + id).then(function (response) {
            $scope.selectedProduct = response.data;
        })
    }
    // timkieems
    // $scope.searchText = '';
    $scope.sortColumn = getUrlWithId1;
    $scope.reverse = false;
    $scope.sortData = function (name) {
        if ($scope.sortColumn == name)
            $scope.reverse = !$scope.reverse;
        else
            $scope.reverse = false;
        $scope.sortColumn = name;
    }
    $scope.getSortClass = function (name) {
        if ($scope.sortColumn == name) {
            return $scope.reverse ? 'arrow-up' : 'arrow-down';
        }
        return '';
    }
    // sửa thông tin
    $scope.updateProductByID = function (id) {
        $http.put("https://63edbd065e9f1583bdb51b69.mockapi.io/toanhdph21327/hoa-tuoi/" + id,
            {
                name: $scope.selectedProduct.name,
                price: $scope.selectedProduct.price,
                quantity: $scope.selectedProduct.quantity,
                img: $scope.selectedProduct.img,

            }
        );
        alert("success");
    };
});

function tai_lai_trang() {
    location.reload();
}
