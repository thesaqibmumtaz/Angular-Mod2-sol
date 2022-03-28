(function () {
    'use strict';
    
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .controller('AddtoList',AddtoList)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);
    
    
    AddtoList.$inject = ['ShoppingListCheckOffService'];
    function AddtoList(ShoppingListCheckOffService) {
      var insert = this ;
      this.name ="";
      this.quantity ="";
      insert.InsertElem = function(name,quantity) {
        ShoppingListCheckOffService.addItem(name,quantity);
      }
    }
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
      var toBuy = this;
      toBuy.items = ShoppingListCheckOffService.getToBuyItems();
    
      toBuy.buyItem = function(itemIndex) {
        ShoppingListCheckOffService.buyItem(itemIndex);
      }
    
      toBuy.errorMessage = function () {
        if(toBuy.items.length > 0)
          return false ;
    
        return true ;
      }
    
    }
    
    
    
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var already = this ;
    
      already.items=ShoppingListCheckOffService.getAlreadyItems();
    
      already.errorMessage = function () {
        if(already.items.length > 0)
          return false ;
    
        return true ;
      }
    }
    
    function ShoppingListCheckOffService() {
        var service = this ;
    
        var toBuyItems = [
        {
          name: "Milk",
          quantity: "2"
        },
        {
          name: "Donuts",
          quantity: "10"
        },
        {
          name: "Cookies",
          quantity: "20"
        },
        {
          name: "Chocolate",
          quantity: "2"
        },
        {
          name: "Bread",
          quantity: "4"
        },
        {
          name: "Eggs",
          quantity: "12"
        },
        {
          name: "Butter",
          quantity: "1"
        }
      ];
        var alreadyItems = [];
        service.getToBuyItems = function functionName() {
          return toBuyItems ;
        }
    
        service.getAlreadyItems = function functionName() {
          return alreadyItems ;
        }
    
        service.buyItem = function (itemIndex) {
          
          var item = toBuyItems[itemIndex];
          alreadyItems.push(item);
          toBuyItems.splice(itemIndex,1);
        }
    
        service.addItem = function(item,quantity) {
            var elem = {
              name : item ,
              quantity :  quantity
            };
            toBuyItems.push(elem);
    
        }
    
    
    }
    
    
    
    })();