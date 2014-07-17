var appName = angular.module('tictactoe', []);
		appName.controller('Grid', function($scope) {
				counter = 0;
			$scope.changeColor = function() {
				alert('ahhh');
				/*if (counter == 1 || counter == 3 || counter == 5 || counter == 7) {
					myStyle="{background:'red'}"
					counter = counter + 1;
				}
				else {
					myStyle="{background:'black'}"
					counter = counter + 1;
				}*/
			}
		});