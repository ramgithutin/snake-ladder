    // Player name
    var player1 = "Player 1";
  
    // Function to change the player name
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
    
        } ,2500);
    }