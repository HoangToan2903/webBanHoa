var app = angular.module("Web207", ["ngRoute"]);
app.controller("Web207-ctrl", function ($scope, $http) {


    //lấy danh sách sp
    $http.get(`https://63edbd065e9f1583bdb51b69.mockapi.io/toanhdph21327/hoa-tuoi`).then(function (response) {
        $scope.products = response.data;
    });
    const url = "https://63edbd065e9f1583bdb51b69.mockapi.io/toanhdph21327/hoa-tuoi";
    const getUrlWithId = function (id) {
        return url + "/" + id;
    }
    // xóa sản phẩm theo id

    // chi tiet san phẩm theo id
    $scope.getProduct = function (id) {
        $http.get("https://63edbd065e9f1583bdb51b69.mockapi.io/toanhdph21327/hoa-tuoi/" + id).then(function (response) {
            $scope.selectedProduct = response.data;
        })
    }
});

