"use strict";
const cart = {
 
    template:`
    <p><span>Total:</span> {{$ctrl.total | currency}}</p>
    <p><span>Items in your cart</span> ({{$ctrl.shoppingcart.length}})</p>
    <div class="top">
    <section class="added" ng-repeat="item in $ctrl.shoppingcart track by $index">
    <p><span>Item:</span> {{item.name}}</p>
    <p><span>Price:</span> {{item.price | currency}}</p>
    </section>
    </div>
    <div class="bottom">
    <p><span>Available Items</span></p>
    <section class="list">
    <item obj="obj" add-item="$ctrl.addItem(item);" delete-item="$ctrl.deleteItem(item);" ng-repeat="obj in $ctrl.items track by $index"></item>
    </section>
    </div>
    `,
    controller: [function(){
        const vm = this;
     
        vm.items = [
            {name:"Tuna", price:5},
            {name:"sushi", price:10},
            {name:"Cereal", price:3},
            {name:"Doritos", price:3},
            {name:"Tomatoe", price:1},
            {name:"milk", price:2},
            {name:"cookies", price:3},
            {name:"Tortillas", price:3},
            {name:"Sad sauce", price:1},
            {name:"Funky juice", price:2}
        ]
  
        vm.shoppingcart = [];
        
        vm.total = 0;
        
        vm.deleteItem = function(item) {
            for (let i = 0; i < vm.shoppingcart.length; i++) {
              if (vm.shoppingcart[i].name === item.name) {
                vm.shoppingcart.splice(i, 1);
                break;
              }
            }
           
            vm.total -= item.price;
          };
         
        vm.addItem = function(item) {
            
            if (vm.shoppingcart.length < 16) {
            vm.shoppingcart.push(angular.copy(item));
           
            vm.total += item.price;
            console.log(vm.shoppingcart);
            }
        };
    }]
};

angular.module("App").component("cart", cart);