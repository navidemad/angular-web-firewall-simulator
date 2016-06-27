(function () {

  'use strict';

  // Including ui.bootstrap to handle UI
  var module = angular.module('myApp', ['ui.bootstrap']);

  /*
  ** MainController
  ** Listing rules and actions to add/edit/delete
  */
  module.controller('MainController', function($scope, $uibModal, $log) {

    $scope.rules = [];

    $scope.openRuleEditor = function (selectedRule) {
      $uibModal.open({
        animation: true,
        templateUrl: 'modalRuleEditorContent.html',
        controller: 'RuleController',
        size: 'lg',
        resolve: {
          ruleSelected: function () {
            return selectedRule;
          }
        }
      }).result.then(function (rule) {
        $scope.rules.push(rule);
      });
    };

    $scope.deleteRule = function(selectedRule) {
      var idx = $scope.rules.indexOf(selectedRule);
      if (idx != -1) $scope.rules.splice(i, 1);
    };

  });

  /*
  ** RuleController
  ** Popup saving rule
  */
  module.controller('RuleController', function ($scope, $uibModalInstance, $log, ruleSelected) {
    if (ruleSelected !== void(0)) {
      $scope.ruleSelected = ruleSelected;
    } else {
      $scope.ruleSelected = { name: '', property1: 0, property2: '' };
    }
    $scope.save     = function () { $uibModalInstance.close($scope.ruleSelected); };
    $scope.cancel = function () { $uibModalInstance.dismiss('cancel'); };
  });

}());