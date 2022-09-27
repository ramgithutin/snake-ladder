    //  name
    var player1 = "Player 1";
    var sum = 0;
    var sum2 = 0;
    var num = 1;
    var current = 0;
    var p = 0;
    var n = 0;

    function editNames() {
    	player1 = prompt("Change Player1 name");
    	document.querySelector("p.Player1").innerHTML = player1;
    }

    // Function to roll the dice
    function rollTheDice() {
    	document.querySelector(".img1").setAttribute("src", "assets/face0.gif");
    	//$("#"+sum+"").remove(":contains('A')");

    	setTimeout(function() {
    		n++;
    		current = Math.floor(Math.random() * 6) + 1;

    		document.querySelector(".img1").setAttribute("src",
    			"assets/face" + current + ".png");
    		if (current == 1) {
    			num++;
    		}
    		playGame();


    	}, 100);
    }

    function playGame() {
    	if (num > 0) {
    		if (n % 2 == 0) {
    			player2();
    		} else {
    			player1();
    		}
    	}

    	function player1() {
    		$("#img2").remove();
    		sum += current;
    		if (sum == 27) {
    			sum = 5;
    			play();
    		} else if (sum == 40) {
    			sum = 3;
    			play();
    		} else if (sum == 43) {
    			sum = 18;
    			play();
    		} else if (sum == 54) {
    			sum = 31;
    			play();
    		} else if (sum == 66) {
    			sum = 45;
    			play();
    		} else if (sum == 76) {
    			sum = 58;
    			play();
    		} else if (sum == 89) {
    			sum = 53;
    			play();
    		} else if (sum == 99) {
    			sum = 41;
    			play();
    		}
    		//ladder
    		else if (sum == 4) {
    			sum = 25;
    			play();
    		} else if (sum == 13) {
    			sum = 46;
    			play();
    		} else if (sum == 33) {
    			sum = 49;
    			play();
    		} else if (sum == 42) {
    			sum = 63;
    			play();
    		} else if (sum == 50) {
    			sum = 69;
    			play();
    		} else if (sum == 62) {
    			sum = 81;
    			play();
    		} else if (sum == 74) {
    			sum = 92;
    			play();
    		} else if (sum > 100) {
    			sum -= current;
    			play();
    		} else {
    			play();
    		}
    		if (sum == 100) {
    			alert("player1 win")
    		}
    	}

    	function player2() {
    		$("#img3").remove();
    		sum2 += current;
    		if (sum2 == 27) {
    			sum2 = 5;
    			play2();
    		} else if (sum2 == 40) {
    			sum2 = 3;
    			play2();
    		} else if (sum2 == 43) {
    			sum2 = 18;
    			play2();
    		} else if (sum2 == 54) {
    			sum2 = 31;
    			play2();
    		} else if (sum2 == 66) {
    			sum2 = 45;
    			play2();
    		} else if (sum2 == 76) {
    			sum2 = 58;
    			play2();
    		} else if (sum2 == 89) {
    			sum2 = 53;
    			play2();
    		} else if (sum2 == 99) {
    			sum2 = 41;
    			play2();
    		}
    		//ladder
    		else if (sum2 == 4) {
    			sum2 = 25;
    			play2();
    		} else if (sum2 == 13) {
    			sum2 = 46;
    			play2();
    		} else if (sum2 == 33) {
    			sum2 = 49;
    			play2();
    		} else if (sum2 == 42) {
    			sum2 = 63;
    			play2();
    		} else if (sum2 == 50) {
    			sum2 = 69;
    			play2();
    		} else if (sum2 == 62) {
    			sum2 = 81;
    			play2();
    		} else if (sum2 == 74) {
    			sum2 = 92;
    			play2();
    		} else if (sum2 > 100) {
    			sum2 -= current;
    			play2();
    		} else {
    			play2();
    		}
    		if (sum2 == 100) {
    			alert("player2 win")
    		}
    	}

    	function play() {

    		$('#' + sum + "").append('<img id="img2" src="assets/td.gif" />');
    		console.log(sum);


    	}

    	function play2() {

    		$('#' + sum2 + "").append('<img id="img3" src="assets/md.gif" />');
    		console.log("p1" + sum2);


    	}
    }