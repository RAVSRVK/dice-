function hist(){
    var randomNumber1= Math.ceil(Math.random()*6);
var randomNumber2= Math.ceil(Math.random()*6);
var ia="images/dice"+randomNumber1+".png";
var ib="images/dice"+randomNumber2+".png";
document.querySelector(".img1").setAttribute("src", ia);
document.querySelector(".img2").setAttribute("src", ib);
if(randomNumber1>randomNumber2){
    document.querySelector(".refresh").innerHTML= "Player 1 Wins" ;
}
else if(randomNumber1<randomNumber2){
        document.querySelector(".refresh").innerHTML="Player 2 Wins";
}
else{
        document.querySelector(".refresh").innerHTML="Draw";
    
}
}
// <i class="fa fa-flag-o" style="font-size:108px;color:red"></i>