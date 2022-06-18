function func()
{
    var a=Number(document.getElementById("n1").value);
    var b=Number(document.getElementById("n2").value);
    var c=document.getElementById("select").value;
    var e=document.getElementById("empty");


if(a===""||b==="")
{
alert("Please enter a number");
var d="Error";
e.innerHTML=d;
}

else
{
    var ans=a + c + d;
    var ak=eval(ans);
    e.innerHTML=ak;
}
}

function funct(){
    var k=document.getElementsByClassName("texts");
    k[0].innerHTML="Look";
    k[1].innerHTML="the";
    k[2].innerHTML="Text";
    k[3].innerHTML="changed";
    var l=document.getElementById("color");
    l.style.color="red";
}
//     if(a===""||b===""){
//     alert("Please enter a number");
//     var d="ERROR";
//     }
//     else if(c==="+")
//     var d=a+b;
//     else if(c==="-")
//     var d=a-b;
//     else if(c==="*")
//     var d=a*b;
//     else if(c==="/")
//     var d =a/b;

//     
//     e.innerHTML=d;
// }
//          OR
