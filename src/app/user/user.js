angular.module('kuansim.user', [
  'ui.router'
]).

service('User', function () {
  this.loggedIn = false;
  this.email = "";
  this.name = "";

  this.logIn = function(_email, _name) {
    this.loggedIn = true;
    this.email = _email;
    this.name = _name;
  };

  this.logOut = function() {
    this.loggedIn = false;
    this.email = "";
    this.name = "";
  };

}).

controller('UserCtrl', function ($scope) {

}).

controller('UserProfileCtrl', function ($scope, $http) {

  $scope.profile = {};

  $http.get('/users/profile').
    success(function (response) {
      if (response.success) {
        $scope.profile = response.profile;
      } else {

      }
    });

});