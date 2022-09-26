    //  name
    var player1 = "Player 1";
    var sum=0; 
    function editNames() {
        player1 = prompt("Change Player1 name");
        document.querySelector("p.Player1").innerHTML = player1;
    }
  
    // Function to roll the dice
    function rollTheDice() {
             document.querySelector(".img1").setAttribute("src",
                "assets/face0.gif");
        setTimeout(function () {
            var current = Math.floor(Math.random() * 6) + 1;
  
            document.querySelector(".img1").setAttribute("src",
                "assets/face" + current + ".png");
		sum+=current;
                console.log(sum);
          
        } ,2500);
    }