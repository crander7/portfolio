angular.module('portfolio').controller('mainCtrl', ($scope, mainService) => {

    $scope.email = data => {
        mainService.email(data).then(response => {
            if (response.status === 200) {
                $scope.data.name = '';
                $scope.data.email = '';
                $scope.data.phone = '';
                $scope.data.message = '';
                swal("Message Sent!", "", "success")
            }
            else {
                swal('There was a problem with the message', '', 'error');
            }
        });
    };

});
