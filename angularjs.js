// var julieRef = new Firebase('https://SampleChat.firebaseIO-demo.com/users/julie/');
// julieRef.on('value', function(snapshot) {
//   if(snapshot.val() === null) {
//     alert('User julie does not exist.');
//   } else {
//     var firstName = snapshot.val().name.first;
//     var lastName = snapshot.val().name.last;
//     alert('User julie’s full name is: ' + firstName + ' ' + lastName);
//   }
// });


var appName = angular.module('tictactoe', ["firebase"]);
appName.controller('Grid', function($scope, $firebase) {
	var appRef = new Firebase("https://cromulent-tac-toe.firebaseio.com/");
	//  
	});
	$scope.cells = [[1,2,4],[8,16,32],[64,128,256]]; 
	$scope.xMoves = 0;
	$scope.oMoves = 0;
	$scope.xArray = [];
	$scope.oArray = [];
	$scope.xScore = 0;
	$scope.oScore = 0;
	$scope.tieED = 0;
	$scope.count = 0;
	$scope.winningCombo = [[1,2,4],[8,16,32],[64,128,256],[1,8,64],[2,16,128],[4,32,256],[1,16,256],[4,16,64]];
	
	$scope.playerColors = [
	{color: "url('nyc.jpg')", name: 'NYC'},
	{color: "url('paris.jpg')", name: 'Paris'},
	{color: "url('sf.jpg')", name: 'SF'}
	];

	$scope.reset = function() {
		for(q = 0; q < 9; q++) {
			$scope.xArray.pop();
			$scope.oArray.pop();
			$scope.xMoves = 0;
			$scope.oMoves = 0;
			$scope.count = 0;
			$scope.counter.$set({counter: $scope.count});
			console.log($scope.xArray);
		}
	}
	$scope.changeColor = function(cell) {
		if ($scope.count % 2 == 0) {
			$scope.count = $scope.count + 1;	
			$scope.counter.$set({counter: $scope.count});
			$scope.count = 0;
			$scope.xMoves += cell;
			$scope.xArray.push(cell);
			$scope.winningArrayX();
			return true;
		}
		else {
			$scope.count = $scope.count + 1;
			$scope.counter.$set({counter: $scope.count});
			$scope.count = 0;
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

$scope.keepScoreX = function() {
	$scope.xScore = $scope.xScore + 1;
	console.log($scope.xScore);
}

$scope.keepScoreO = function() {
	$scope.oScore = $scope.oScore + 1;
	console.log($scope.oScore);
}
$scope.tie = function() {
	$scope.tieED = $scope.tieED + 1;
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
							$scope.keepScoreX(); 
							$scope.reset();
						}
						else if ($scope.winningCombo[i][2] == $scope.xArray[3]) {
							$scope.keepScoreX(); 
							$scope.reset();
						}
						else if ($scope.winningCombo[i][2] == $scope.xArray[4]) {
							$scope.keepScoreX(); 
							$scope.reset();
						}
						else {
							return;
						}
					}
					else if ($scope.winningCombo[i][1] == $scope.xArray[2]) {
						// j++;
						if ($scope.winningCombo[i][2] == $scope.xArray[3]) {
							$scope.keepScoreX(); 
							$scope.reset();
						}
						else if ($scope.winningCombo[i][2] == $scope.xArray[4]) {
							$scope.keepScoreX(); 
							$scope.reset();
						}
						else {
							return;
						}
					}
					else if ($scope.winningCombo[i][1] == $scope.xArray[3]) {
						// j++;
						if ($scope.winningCombo[i][2] == $scope.xArray[4]) {
							$scope.keepScoreX(); 
							$scope.reset();
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
							$scope.keepScoreX(); 
							$scope.reset();
						}
						else if ($scope.winningCombo[i][2] == $scope.xArray[4]) {
							$scope.keepScoreX(); 
							$scope.reset();
						}
						else {
							return;
						}
					}
					else if ($scope.winningCombo[i][1] == $scope.xArray[3]) {
						// j++;
						if($scope.winningCombo[i][2] == $scope.xArray[4]) {
							$scope.keepScoreX(); 
							$scope.reset();
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
							$scope.keepScoreX(); 
							$scope.reset();
						}
						else {
							return;
						}
					}
				}
				else {
					if ($scope.count == 9) {
						$scope.tie();
					}
				}
			}
		}
$scope.winningArrayO = function() {
	$scope.oArray.sort(function(a,b) {return a-b;})
	console.log($scope.oArray);
	for (var i = 0; i < $scope.winningCombo.length; i++)	{
			// for (var j = 0; j < $scope.xArray.length; j++) {
				if ($scope.winningCombo[i][0] == $scope.oArray[0]) {
					// j++;
					console.log('made it')
					if ($scope.winningCombo[i][1] == $scope.oArray[1]) {
						// j++;
						if ($scope.winningCombo[i][2] == $scope.oArray[2]) {
							$scope.keepScoreO(); 
							$scope.reset();
						}
						else if ($scope.winningCombo[i][2] == $scope.oArray[3]) {
							$scope.keepScoreO(); 
							$scope.reset();
						}
						else if ($scope.winningCombo[i][2] == $scope.oArray[4]) {
							$scope.keepScoreO(); 
							$scope.reset();
						}
						else {
							return;
						}
					}
					else if ($scope.winningCombo[i][1] == $scope.oArray[2]) {
						// j++;
						if ($scope.winningCombo[i][2] == $scope.oArray[3]) {
							$scope.keepScoreO(); 
							$scope.reset();
						}
						else if ($scope.winningCombo[i][2] == $scope.oArray[4]) {
							$scope.keepScoreO(); 
							$scope.reset();
						}
						else {
							return;
						}
					}
					else if ($scope.winningCombo[i][1] == $scope.oArray[3]) {
						// j++;
						if ($scope.winningCombo[i][2] == $scope.oArray[4]) {
							$scope.keepScoreO(); 
							$scope.reset();
						}
						else {
							return;
						}
					}
				}
				else if ($scope.winningCombo[i][0] == $scope.oArray[1]) {
					// j++;
					if ($scope.winningCombo[i][1] == $scope.oArray[2]) {
						// j++;
						if($scope.winningCombo[i][2] == $scope.oArray[3]) {
							$scope.keepScoreO(); 
							$scope.reset();
						}
						else if ($scope.winningCombo[i][2] == $scope.oArray[4]) {
							$scope.keepScoreO(); 
							$scope.reset();
						}
						else {
							return;
						}
					}
					else if ($scope.winningCombo[i][1] == $scope.oArray[3]) {
						// j++;
						if($scope.winningCombo[i][2] == $scope.oArray[4]) {
							$scope.keepScoreO(); 
							$scope.reset();
						}
						else {
							return;
						}
					}
				}
				else if ($scope.winningCombo[i][0] == $scope.oArray[2]) {
					// j++;
					if ($scope.winningCombo[i][1] == $scope.oArray[3]) {
						// j++;
						if ($scope.winningCombo[i][2] == $scope.oArray[4]) {
							alert('O Wins');
						}
						else {
							return;
						}
					}
				}
				else {
					if ($scope.count == 9) {
						$scope.tie();
					}
				}
			}
		}	
	});