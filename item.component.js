"use strict";
const item = {
    
    bindings: {
        obj: "<",
        name: "<",
        price: "<",
        addItem: "&",
        deleteItem: "&"
    },
    template:`
    <p><span>Item: </span>{{$ctrl.obj.name}}</p>
    <p><span>Price: </span>{{$ctrl.obj.price | currency}}</p>
    <button ng-click="$ctrl.addItem({item: $ctrl.obj});">Add Item</button>
    <button ng-click="$ctrl.deleteItem({item: $ctrl.obj});">Remove Item</button>
    `
};
angular.module("App").component("item", item);