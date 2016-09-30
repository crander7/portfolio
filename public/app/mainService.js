angular.module('portfolio').service('mainService', function ($http) {

    this.email = data => {
      return $http({
          method: 'POST',
          url: '/email',
          data: data
      }).then(response => {
         return response;
      });
    };

});
