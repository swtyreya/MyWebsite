function changecolor(){
    document.getElementById('JavaScript').style.color = "green";
}
function changecolor2(){
    document.getElementById('JavaScript').style.color = "skyblue";
}
function changeimage(){
    document.getElementById('Java').src="images/shh.jpg";
}
function changeimage2(){
    document.getElementById('Java').src="images/sad.jpg";
}
function changetext(){
    var txt= document.getElementById("input1").value;
    document.getElementById('JavaScript').innerHTML = txt;
}
