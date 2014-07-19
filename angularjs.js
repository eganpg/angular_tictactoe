var appName = angular.module('tictactoe', []);
appName.controller('Grid', function($scope) {
	$scope.cells = [[1,2,4],[8,16,32],[64,128,256]]; 
	$scope.xMoves = 0;
	$scope.oMoves = 0;
	$scope.xArray = [];
	$scope.oArray = [];
	$scope.threeinarow = 0;
	$scope.winningCombo = [[1,2,4],[8,16,32],[64,128,256],[1,8,64],[2,16,128],[4,32,256],[1,16,256],[4,16,64]];
	

	// console.log($scope.winningCombo1)
	// $scope.winningNumberX = 0;
	// $scope.winningNumberY = 0;
	count = 0;
	$scope.changeColor = function(cell) {
		if (count % 2 == 0) {
			count = count + 1;	
			$scope.xMoves += cell;
			$scope.xArray.push(cell);
			// console.log($scope.xArray);
			// console.log(cell);
			$scope.winningArrayX();
			// $scope.winningNumberX = cell + $scope.winningNumberX;
			// console.log($scope.winningNumberX); 
			// $scope.determineAWinner();
			return true;
		}
		else {
			count = count + 1;
			$scope.oMoves += cell;
			$scope.oArray.push(cell);
			$scope.winningArrayO();
			// console.log($scope.oArray);
			// console.log(cell);
			// $scope.winningNumberY = cell + $scope.winningNumberY;
			// console.log($scope.winningNumberY);
			// $scope.determineAWinner();
			return false;
		}
	}
// Changes the color of the background
$scope.isSet = function(whatever, cell){
	return (whatever & cell) == cell;
}
// Call a function 
$scope.winningArrayX = function() {
	// don't execute unless there has been more than 4 moves
	if (count > 4) {
		//sort the x array to allow for a clean search
		$scope.xArray.sort();
		// run a loop though the 8 predefines arrays
		for (var i = 0; i < $scope.winningCombo.length; i++) {
			// run a loop that executes a loop based on the number of xArray
			for (var j = 0; j < $scope.xArray.length; j++) {
				if ($scope.winningCombo[i][j] == $scope.xArray[0]) {
					j++;
					if ($scope.winningCombo[i][j] == $scope.xArray[1]) {
						j++;
						if ($scope.winningCombo[i][j] == $scope.xArray[2]) {
							alert('Xwins');
						}
						else if ($scope.winningCombo[i][j] == $scope.xArray[3]) {
							alert('XWins');
						}
					}
				}
			}
		}
	}
}
$scope.winningArrayO = function() {
	if (count > 4) {
		$scope.xArray.sort();
		for (var i = 0; i < $scope.winningCombo.length; i++) {
			for (var j = 0; j < $scope.oArray.length; j++) {
				if ($scope.winningCombo[i][j] == $scope.oArray[0]) {
					j++;
					if ($scope.winningCombo[i][j] == $scope.oArray[1]) {
						j++;
						if ($scope.winningCombo[i][j] == $scope.oArray[2]) {
							alert('O wins');
						}
						else if ($scope.winningCombo[i][j] == $scope.oArray[3]) {
							alert('O Wins');
						}
					}
				}
			}
		}
	}
}
		// }
		/* Write a Function that logs the value of a specific square */

	// $scope.determineAWinner = function() {
	// 	console.log($scope.winningNumberX)
	// 	console.log($scope.winningNumberY)
	// 	if ( $scope.winningNumberX == 7 || $scope.winningNumberX == 56 || $scope.winningNumberX == 448 || $scope.winningNumberX == 73 || $scope.winningNumberX == 146 || $scope.winningNumberX == 292 || $scope.winningNumberX == 273 || $scope.winningNumberX == 84) {
	// 		alert('x wins');
	// 	}
	// }
});