angular.module('myApp').component('employeeComponent', {
    templateUrl: 'app/component/employee.component.html',
    controller: function (empServices) {
     
        var self = this;
         self.empList = [];
        // this.$onChanges = function(changesObj)
        // {
        //     console.log(changesObj);
        // }

        self.$onInit = function () {
            self.init();
        };

        self.init = function()
        {
            empServices.getEmployee().then(function (res) {
                console.log(res);
                self.empList = res.data;
            }).catch(function (err) {
                console.log(err);
            });
        }

        self.addEmployee = function (emp) {
            empServices.saveEmployee(emp).then(function (res) {
                //toastr.success('Employee Added Successfuly!');
                self.init();
            }).catch(function (err) {
                self.isError = true;
            });
        };

    

    }
    // bindings: {
    //     empList: '<',
    //     employee: '='
    // }
});


