var rat1 = document.getElementById("rat1");
var rat2 = document.getElementById("rat2");
var rat3 = document.getElementById("rat3");
var rat4 = document.getElementById("rat4");
var rat5 = document.getElementById("rat5");
var rat6 = document.getElementById("rat6");
var score = document.getElementById("score");
var count = 0;

setInterval(function()
{
    var random = (Math.floor(Math.random()*6) + 1);
    var rat = "rat" + random;
    var ra = eval(rat);
    ra.classList.add("animate");
    setTimeout(function(){
        ra.classList.remove("animate")
    },1000);
    ra.onclick = function(){
        count++;
        score.innerText = count;
    }
},1000);