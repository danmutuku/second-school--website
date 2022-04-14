document.getElementById("btn").addEventListener("click", giveGrade);
function giveGrade(){
  var myGrade = parseInt(prompt("Enter your grade:"));
  alert (myGrade);
  if (myGrade>=80 && myGrade<100){
document.getElementById("para"). innerHTML ="A";
}else if(myGrade>=75 && myGrade<79){
document.getElementById("para"). innerHTML ="A-";
}else if(myGrade>=70 && myGrade<74){
document.getElementById("para"). innerHTML ="B+";
}else if(myGrade>=65 && myGrade<69){
document.getElementById("para"). innerHTML ="B";
}else if(myGrade>=64 && myGrade<60){
document.getElementById("para"). innerHTML ="B-";
}else if(myGrade>=55 && myGrade<59){
document.getElementById("para"). innerHTML ="C+";
}else if(myGrade>=54 && myGrade<50){
document.getElementById("para"). innerHTML ="C";
}else if(myGrade>=49 && myGrade<45){
document.getElementById("para"). innerHTML ="C-";
}else if(myGrade>=40 && myGrade<44){
document.getElementById("para"). innerHTML ="D";
}else if(myGrade>=39 && myGrade<35){
document.getElementById("para"). innerHTML ="D";
}else if(myGrade>=30 && myGrade<34){
document.getElementById("para"). innerHTML ="D-";
}else if(myGrade>=0 && myGrade<29){
document.getElementById("para"). innerHTML ="E";
}else{
document.getElementById("para"). innerHTML ="Enter invalid grade";
}
}
