angular
  .module('example')
  .controller('LearnMoreController', function($scope) { //take out supersonic if buttons stop working
    Parse.initialize("JAzT8PZsJR4tOjlttjcgtzwkCMvBH3VHxFGTnR8O", "vIlGqhYi8kXrYXrDKKGHNxUFzQN2pPiZBr7TZunC");
    $scope.navbarTitle = "Learn More";


    $scope.testDataConnection = function() {
      supersonic.logger.info("data connect started.");
      var TestObject = Parse.Object.extend("TestObject");
      var testObject = new TestObject();
        testObject.save({foo: "bar"}).then(function(object) {
          alert("yay! it worked");
          supersonic.logger.info("data connect worked.");
});

    }

  });
