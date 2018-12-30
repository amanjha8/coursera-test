(function (){
  'use strict';
angular.module('Assignapp',[])
.controller('EatController',EatController);
EatController.$inject['$scope'];

function EatController($scope){
  $scope.foodName="";
  $scope.message="";

  $scope.checkFood=function(){
    var fooditems=noOfItems($scope.foodName);
    if(fooditems==-1)
    {
      $scope.message="Please dont add empty item(s)";
    }
    else if(fooditems<=3)
    {
      $scope.message="Healthy";
    }
    else{
      $scope.message="Sorry too much";
    }
          $scope.foodName="";
  };


  function noOfItems(string){
    var allitems =string.split(',');
    for(var i=0;i<allitems.length;i++)
    {
      if(allitems[i]=="" || allitems[i]==" ")
      return -1;
    }
    return (allitems.length);
  }

}
}) ();
