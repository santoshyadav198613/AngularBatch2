angular.module('myApp').component('orderComponent', {
    templateUrl: 'app/component/order.component.html',
    controller: function (customerservice, productservice) {
        this.title = "This is my first component";
        this.order = {};

        this.$onChanges = function (changesObj) {
            console.log(changesObj);
        }

        this.$onInit = function () {
            this.customers = customerservice.getCustomer();
            this.products = productservice.getProduct();

        };
        this.saveOrder = function (order) {
            console.log(order);
        }

        this.updatePrice = function (qty) {
            console.log(qty);
            this.order.totalAmount = this.order.product.price * qty;
        }

        this.$doCheck = function () {
            console.log(this.name);
        }
    }
});


