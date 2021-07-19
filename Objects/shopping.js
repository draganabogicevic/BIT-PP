"use strict";
(function () {
    function Product (name, price, expirationDate) {
        this.productID = Math.floor(Math.random() * 100000);
        this.name = name;
        this.price = price.toFixed(2);
        this.expirationDate = expirationDate;
        this.priceInNumber = function () {
            return this.price = parseFloat(this.price);
        }
        this.getProductCode = function () {
            var name = this.name;
            var firstTwoLetters = name.substr(0,2);
            return firstTwoLetters.toUpperCase() + this.productID;
        }
        this.getInfo = function () {
            return this.getProductCode() + ", " + this.name + ", " + this.price;
        }
        this.validExpDate = function () {
            var validDate = false;
            var today = new Date();

            if(this.expirationDate.year > today.getFullYear()) {
                validDate = true;
            } else if(this.expirationDate.year === today.getFullYear() && this.expirationDate.mounth > (today.getMonth()+1)) {
                validDate = true;
            } else if (this.expirationDate.mounth === (today.getMonth()+1) && this.expirationDate.date > today.getDate()) {
                validDate = true;
            }
            return validDate;
        }    
            
    }
    function ExparationDate (date, mounth, year) {
        this.date = date;
        this.mounth = mounth;
        this.year = year;
        this.getExparationDate = function () {
            return this.date + "." + this.mounth + "." + this.year;
        }
    }
    function ShoppingBag () {
        this.listOfProduct = [];
        this.addProduct = function (product) {
            if(product.validExpDate()) {
                this.listOfProduct.push(product);
            }    
        }
    
        this.avgPrice = function() {
            var sumOfPrices = 0; 
            for(var i = 0; i<this.listOfProduct.length; i++) {
                var currentProduct = this.listOfProduct[i];
                sumOfPrices += currentProduct.priceInNumber();
            }
            var avgPrice = sumOfPrices/this.listOfProduct.length;
            return avgPrice.toFixed(3);
        }
        this.getMostExpensive = function () {
            var maxPrice = 0;
            for(var i = 0; i<this.listOfProduct.length; i++) {
                var currentProduct = this.listOfProduct[i];
                if(currentProduct.priceInNumber() > maxPrice) {
                    maxPrice = currentProduct.priceInNumber();
                }
            }
            return maxPrice;
        }
        this.calculateTotalPrice = function () {
            var totalPrice = 0;
            for(var i = 0; i<this.listOfProduct.length; i++) {
                var currentProduct = this.listOfProduct[i];
                totalPrice += currentProduct.priceInNumber();
            }
            return totalPrice;
        }
    }

    function PaymentCard (accountBalance, status, exparationDate) {
        this.accountBalance = accountBalance;
        this.status = status;
        this.exparationDate = exparationDate;
    }

    function checkoutAndBuy (shoppingBag, creditCard) {
        var purchaseConfirmation = "";
        var totalPrice = shoppingBag.calculateTotalPrice();
        var amountOfMoney = creditCard.accountBalance;
        if(totalPrice > amountOfMoney) {
            var differenc = totalPrice-amountOfMoney;
            purchaseConfirmation = "The missing amount of money for successful purchase is " + differenc.toFixed(2) + " RSD.";
        } else {
            purchaseConfirmation = "Your purchase is succesful!";
        }
        return purchaseConfirmation;
    }
    var expDateBanana = new ExparationDate(21, 10, 2016);
    var banana = new Product("Banana", 150.7663, expDateBanana);
    var expDateLemon = new ExparationDate(28, 9, 2021);
    var lemon = new Product("Lemon", 135.6985, expDateLemon);
    var expDateBread = new ExparationDate(19, 5, 2020);
    var bread = new Product("Bread", 45.009, expDateBread);
    var expDateCheese = new ExparationDate(15, 7, 2021);
    var cheese = new Product("Cheese", 103.8659, expDateCheese);
    var shoppingBag1 = new ShoppingBag();
    var expDatePaymentCard = new ExparationDate(15, 10, 2025);
    var paymentCard1 = new PaymentCard(200, true, expDatePaymentCard);
    shoppingBag1.addProduct(banana);
    shoppingBag1.addProduct(lemon);
    shoppingBag1.addProduct(bread);
    shoppingBag1.addProduct(cheese);
    console.log(checkoutAndBuy(shoppingBag1, paymentCard1));

})();


