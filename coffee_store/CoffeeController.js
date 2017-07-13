/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module("CoffeeStoreApp", [])

app.controller("CoffeeStoreController", ["$scope", function (s) {

        s.newCoffee = {};
        s.coffeeList = [];
        s.ventaList = [];
        s.cantidad = 0;
        s.totalVenta = 0.0;
        
        s.addCoffee = function () {
            s.newCoffee.vlrUnit = s.newCoffee.price;
            s.newCoffee.puntuacion = 0;
            s.newCoffee.numVotos = 0;
            s.newCoffee.sumaVotos = 0;
            s.coffeeList.push(s.newCoffee);
            s.newCoffee = {};
        };
        s.addVenta = function (coffee) {
            coffee.cantidad = 1;
            coffee.numVotos ++;
            coffee.sumaVotos = parseFloat(coffee.puntuacion) + parseFloat(coffee.sumaVotos);
            
            coffee.prom = parseFloat(coffee.sumaVotos) / parseFloat(coffee.numVotos);
            s.totalVenta = parseFloat(s.totalVenta) + parseFloat(coffee.vlrUnit);
            s.ventaList.push(coffee);
        };
        s.increment = function (venta) {
            venta.cantidad = venta.cantidad +1; 
            venta.price = venta.cantidad * venta.vlrUnit; 
            s.totalVenta = parseFloat(s.totalVenta) + parseFloat(venta.vlrUnit);
        };
        s.decrement = function (venta) {
            venta.cantidad = venta.cantidad -1; 
            venta.price = venta.cantidad * venta.vlrUnit; 
            s.totalVenta = parseFloat(s.totalVenta) - parseFloat(venta.vlrUnit);
        };
        s.generarVenta = function (coffeeList) {
            s.ventaList = [];
            s.totalVenta = 0;
            for (var i = 0; i < coffeeList.length; i++) {
                coffeeList[i].price = coffeeList[i].vlrUnit; 
                coffeeList[i].price = coffeeList[i].vlrUnit; 
            } 
        };


    }]);

 