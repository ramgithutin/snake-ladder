    //  name
    var player1 = "Player 1";
    var sum = 0;
    var num = 1;
    var current = 0;
    var p = 0;

    function editNames() {
    	player1 = prompt("Change Player1 name");
    	document.querySelector("p.Player1").innerHTML = player1;
    }

    // Function to roll the dice
    function rollTheDice() {
    	document.querySelector(".img1").setAttribute("src", "assets/face0.gif");
    	//$("#"+sum+"").remove(":contains('A')");

    	setTimeout(function() {
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
		$("#img2").remove();
		sum += current;
	if(sum==27){
		sum=5;
		play();
	}
	else if(sum==40){
		sum=3;
		play();
}
	else if(sum==43){
		sum=18;
		play();
}
	else if(sum==54){
		sum=31;
		play();
}
	else if(sum==66){
		sum=45;
		play();
}
	else if(sum==76){
		sum=58;
		play();
}
	else if(sum==89){
		sum=53;
		play();
}
	else if(sum==99){
		sum=41;
		play();
}
//ladder
	else if(sum==4){
		sum=25;
		play();
}
	else if(sum==13){
		sum=46;
		play();
}
	else if(sum==33){
		sum=49;
		play();
}
	else if(sum==42){
		sum=63;
		play();
}
	else if(sum==50){
		sum=69;
		play();
}
	else if(sum==62){
		sum=81;
		play();
}	else if(sum==74){
		sum=92;
		play();
}	else if(sum>100){
		sum-=current;
		play();
}
	else{
		play();
}
	if(sum==100){
		alert("you win")
}
function play(){
    		
    		//     p=document.getElementById(sum);
    		$('#' + sum + "").append('<img id="img2" src="assets/td.gif" />');
    		console.log(sum);


}
    	}
    }