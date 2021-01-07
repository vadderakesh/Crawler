

function getPrice() {
const Http = new XMLHttpRequest();
const url='https://api.coindesk.com/v1/bpi/currentprice.json';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  var json=Http.responseText;
  var object=JSON.parse(json);
  document.getElementById("bitcoin").innerHTML="$ "+object.bpi.USD.rate;
}
}

function reset() {
document.getElementById("textbox").value="";
document.getElementById("id1").innerHTML="no.of words :0";
    document.getElementById("id2").innerHTML="no.of characters:0";
}

function count() {
  var str=document.getElementById("textbox").value;
  if(str.length===0) window.alert("Please Enter the text");
  else {
  var arr=str.split(" ");
  var cc=0;
  for(var i=0;i<str.length;i++) {
     if(str.charAt(i)===' ') continue;
     cc++;
  }
  var words=0;
  for(var i=0;i<arr.length;i++) {
     if(arr[i]==="") continue;
     else words++;
  }

  //console.log(arr);
   document.getElementById("id1").innerHTML="no.of words : "+words;
    document.getElementById("id2").innerHTML="no.of characters: "+cc;
}
}
/*

function myfunction() {
      document.getElementById("id1").innerHTML="id1 first time";
      document.getElementById("id2").innerHTML="id2 first time";
    }
function myfunction2() {
   document.getElementById("id1").innerHTML="id1 second time";
      document.getElementById("id2").innerHTML="id2 second time";
}
function myfunction3() {
   document.getElementById("id1").innerHTML="id1 third time";
      document.getElementById("id2").innerHTML="id2 third time";
}
function myfunction4() {
    var a=10;
    var b=20;
       document.getElementById("id1").innerHTML=a;
        document.getElementById("id2").innerHTML=b;
}
function myfunction5() {
       var str="india";
}

*/