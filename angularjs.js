var appName = angular.module('tictactoe', []);
appName.controller('Grid', function($scope) {
	$scope.cells = [[1,2,4],[8,16,32],[64,128,256]]; 
	console.log($scope.cells);
	$scope.xMoves = 0;
	$scope.oMoves = 0;
	
	count = 0;
	$scope.changeColor = function(cell) {
		if (count % 2 == 0) {
			count = count + 1;	
			$scope.xMoves += cell;
			return true;
		}
		else {
			count = count + 1;
			$scope.oMoves += cell;
			return false;
		}
	}

	$scope.isSet = function(whatever, cell){
		return (whatever & cell) == cell;
	}

/*  $scope.traceStyle = "" ;

	$scope.changeColor = function() {
		console.log('ahhhh!');
		$scope.traceStyle="{traceStyle='background-color':'blue'}"; 
		
	}


				counter = 0;
				if (counter == 1) {
					myStyle === ;
					console.log(counter, myStyle);
					counter = counter + 1;
				}
				else {
					myStyle == 'black';
					counter = counter + 1;
					console.log(counter, myStyle);
				} */


});