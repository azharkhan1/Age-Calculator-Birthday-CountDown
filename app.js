

const countDown = ()=>{

    var countdob = document.getElementById("countdob").value

    var dob = new Date (countdob);
    var latestTime = new Date();
    latestTimeYear = latestTime.getFullYear();
    dobYear = dob.getFullYear();
    latestTimeYear = latestTimeYear - dobYear;
    dob.setFullYear(dob.getFullYear() + latestTimeYear + 1);
    console.log(dob);

var currentDate = new Date();
var msdob = dob.getTime();
var msCurrentDate = currentDate.getTime();
var msDiff = msCurrentDate - msdob;
var daysRemaining = Math.floor(msDiff / (1000*60*60*24));
var hoursRemaining = Math.floor(msDiff / (1000*60*60));
var minutesRemaining = Math.floor(msDiff / (1000*60));
var secondsRemaining = Math.floor(msDiff / (1000));
document.getElementById("coutdown").innerHTML = `Days:${daysRemaining}<br> Hours:${hoursRemaining} <br> Minutes:${minutesRemaining} <br> Seconds:${secondsRemaining}`

return false;

}


const ageChecker = ()=>{

    setInterval(function(){
        var dob = document.getElementById("dob").value;

var date  = new Date(dob);
//    var date  = new Date("4 april,1994");
 var timeFixing = new Date();

var  fixingMili = timeFixing.getTime();

 dateMili = date.getTime();
 
 diff = fixingMili - dateMili; 

 myDob = Math.floor (diff/(1000*60*60*24*30*12));
 month = Math.floor (diff/(1000*60*60*24*30));
 days = Math.floor (diff/(1000*60*60*24));
 hours = Math.floor (diff/(1000*60*60));
 minutes = Math.floor (diff/(1000*60));
 seconds = Math.floor (diff/(1000));
 smallest = Math.floor (diff);
document.getElementById("yourage").innerHTML = ` <b>Age</b>: ${myDob} <br> <b>Month:</b>:${month} <br> <b>Days:</b>:${days} <br>  <b>Hours:</b>:${hours} <br> <b>Minutes:</b>:${minutes} <br> <b>Seconds:</b>:${seconds} <br> <b>Milliseconds:</b> ${smallest}`

    },1000)
   return false;
}

                  
                  var sum = 0;
        const startGame=()=>{
            var num1 = parseInt(document.getElementById("num1").value);
            var num2 = parseInt(document.getElementById("num2").value);
        
            document.getElementById("firstValue").innerHTML = `Your first turn : ${num1}`
            document.getElementById("computerTurn").innerHTML = `Computer's first Turn = ${9999-num1}`
            document.getElementById("secondValue").innerHTML = `Your second turn : ${num2}`
            document.getElementById("computer2Turn").innerHTML = `Computer's second Turn = ${9999-num2}`
            num1 = (9999-num1) + (num1);
            num2 =  (9999-num2) + (num2);
            num2 = num2+num1;

            document.getElementById("result").innerHTML = `Result is ${num2}`;
            console.log(num1,"num2==>",num2)
            return false;
        }
