var app = angular.module('web207', []);
app.controller('web207-ctrl', function ($scope, $http) {
    $http.get('https://63edbd065e9f1583bdb51b69.mockapi.io/toanhdph21327/hoa-tuoi').then(function (response) {
        $scope.products = response.data;
    });
    const url = "https://63edbd065e9f1583bdb51b69.mockapi.io/toanhdph21327/hoa-tuoi";
    const getUrlWithId = function (id) {
        return url + "/" + id;
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


    // tạo hàm xem chi tiết theo id
    $scope.readProductById = function (readId) {
        var urlWithId = getUrlWithId(readId);
        $http.get(urlWithId).then(function (response) {
            const product = response.data;
            $scope.name = product.name;
            $scope.price = product.price;
            $scope.quantity = product.quantity;
            $scope.img = product.img;
        });
    };
});

function tai_lai_trang() {
    location.reload();
}
