var appName = angular.module('tictactoe', []);
appName.controller('Grid', function($scope) {
	$scope.cells = [[1,2,4],[8,16,32],[64,128,256]]; 
	$scope.xMoves = 0;
	$scope.oMoves = 0;
	$scope.xArray = [];
	$scope.oArray = [];
	$scope.xWinCount = 0;
	$scope.winningCombo = [[1,2,4],[8,16,32],[64,128,256],[1,8,64],[2,16,128],[4,32,256],[1,16,256],[4,16,64]];

	count = 0;
	$scope.changeColor = function(cell) {
		if (count % 2 == 0) {
			count = count + 1;	
			$scope.xMoves += cell;
			$scope.xArray.push(cell);
			$scope.winningArrayX();
			return true;
		}
		else {
			count = count + 1;
			$scope.oMoves += cell;
			$scope.oArray.push(cell);
			$scope.winningArrayO();
			return false;
		}
	}
$scope.sortingFunction = function() {
	return $scope.xArray.sort();
}

// Changes the color of the background
$scope.isSet = function(whatever, cell){
	return (whatever & cell) == cell;
}
// Call a function 
$scope.winningArrayX = function() {
		$scope.xArray.sort(function(a,b) {return a-b;})
		console.log($scope.xArray);
		for (var i = 0; i < $scope.winningCombo.length; i++)	{
			// for (var j = 0; j < $scope.xArray.length; j++) {
				if ($scope.winningCombo[i][0] == $scope.xArray[0]) {
					// j++;
					console.log('made it')
					if ($scope.winningCombo[i][1] == $scope.xArray[1]) {
						// j++;
						if ($scope.winningCombo[i][2] == $scope.xArray[2]) {
							alert('Xwins');
						}
						else if ($scope.winningCombo[i][2] == $scope.xArray[3]) {
							alert('XWins');
						}
						else if ($scope.winningCombo[i][2] == $scope.xArray[4]) {
							alert('xWins');
						}
						else {
							return;
						}
					}
					else if ($scope.winningCombo[i][1] == $scope.xArray[1]) {
						// j++;
						if ($scope.winningCombo[i][2] == $scope.xArray[3]) {
							alert('xWins');
						}
						else if ($scope.winningCombo[i][2] == $scope.xArray[4]) {
							alert('xWins');
						}
						else {
							return;
						}
					}
					else if ($scope.winningCombo[i][1] == $scope.xArray[3]) {
						// j++;
						if ($scope.winningCombo[i][2] == $scope.xArray[4]) {
							alert('xWins');
						}
						else {
							return;
						}
					}
				}
				else if ($scope.winningCombo[i][0] == $scope.xArray[1]) {
					// j++;
					if ($scope.winningCombo[i][1] == $scope.xArray[2]) {
						// j++;
						if($scope.winningCombo[i][2] == $scope.xArray[3]) {
							alert('xWins');
						}
						else if ($scope.winningCombo[i][2] == $scope.xArray[4]) {
							alert('xWins');
						}
						else {
							return;
						}
					}
					else if ($scope.winningCombo[i][1] == $scope.xArray[3]) {
						// j++;
						if($scope.winningCombo[i][2] == $scope.xArray[4]) {
							alert('xWins');
						}
						else {
							return;
						}
					}
				}
				else if ($scope.winningCombo[i][0] == $scope.xArray[2]) {
					// j++;
					if ($scope.winningCombo[i][1] == $scope.xArray[3]) {
						// j++;
						if ($scope.winningCombo[i][2] == $scope.xArray[4]) {
							alert('xWins');
						}
						else {
							return;
						}
					}
				}
			}
	}

				// console.log($scope.winningCombo[i]);
				// for (var j = 0; j < $scope.winningCombo; j++) {
					// if (($scope.xArray[1] == $scope.winningCombo[i][0]) || ($scope.xArray[1] == $scope.winningCombo[i][1]) || ($scope.xArray[1] == $scope.winningCombo[i][2]))  {
						
					// 	if (($scope.xArray[2] == $scope.winningCombo[i][0]) || ($scope.xArray[2] == $scope.winningCombo[i][1]) || ($scope.xArray[2] == $scope.winningCombo[i][2])) {
					// 		console.log('you have a winner');
					// 	}
					// 	else if (($scope.xArray[3] == $scope.winningCombo[i][0]) || ($scope.xArray[3] == $scope.winningCombo[i][1]) || ($scope.xArray[3] == $scope.winningCombo[i][2])) {
					// 		console.log('you have a winner');
					// 	}
					// 	else if (($scope.xArray[4] == $scope.winningCombo[i][0]) || ($scope.xArray[4] == $scope.winningCombo[i][1]) || ($scope.xArray[4] == $scope.winningCombo[i][2])) {
					// 		console.log('you have a winner');
					// 	}
					// 	else {
					// 		alert('sometin wong')
					// 	}
					// }
				// }
				// for(var j = 0; j < $scope.winningCombo.length; j++) {
				// 	if ($scope.xArray[1] == $scope.winningCombo[i][0])
				// }
			

		
			
		
	//sort the x array to allow for a clean search
		
	 // $scope.xArray.sort();
		// console.log($scope.xArray);
		// // run a loop though the 8 predefines arrays
		// for (var i = 0; i < $scope.winningCombo.length; i++) {
		// 	for (var j = 0; j < $scope.xArray.length; j++) {
		// 		if (($scope.xArray[j] == $scope.winningCombo[i][0]) || ($scope.xArray[j] == $scope.winningCombo[i][1]) || ($scope.xArray[j] == $scope.winningCombo[i][2])) {
		// 			$scope.xArray.sort();
		// 			console.log($scope.xArray);

					
		// 		// $scope.xWinCount++;
		// 		// console.log($scope.xWinCount)
		// 		}
		// 	}
		// }

// $scope.winningArrayO = function() {
// 	if (count > 4) {
// 		$scope.oArray.sort();
// 		for (var i = 0; i < $scope.winningCombo.length; i++) {
// 			for (var j = 0; j < $scope.oArray.length; j++) {
// 				if ($scope.winningCombo[i][j] == $scope.oArray[0]) {
// 					j++;
// 					if ($scope.winningCombo[i][j] == $scope.oArray[1]) {
// 						j++;
// 						if ($scope.winningCombo[i][j] == $scope.oArray[2]) {
// 							alert('O wins');
// 						}
// 						else if ($scope.winningCombo[i][j] == $scope.oArray[3]) {
// 							alert('O Wins');
// 						}
// 						else if ($scope.winningCombo[i][j] == $scope.oArray[4]) {
// 							alert('O wins')
// 						}
// 						else {
// 							$scope.winningArray0();
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }
		// }
	
});