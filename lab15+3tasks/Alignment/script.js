
 var res=document.getElementById("res")
function left()
{
    
    var a=document.getElementById("para");
    a.style.textAlign="left";
    
}

function right()
{
   
    var a=document.getElementById("para");
    a.style.textAlign="right";
    
}
function center()
{
    
    var a=document.getElementById("para");
    a.style.textAlign="center";
    
}
function evod()
{    
    var a=document.getElementById("number").value;
    if(a%2 == 0)
    {
        alert("Even Number");
    }
    else{
        alert("Odd Number");
    }
}
function ftn()
{
    var number=parseFloat(document.getElementById("number").value);
    let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    alert("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        alert(`${number} is a prime number`);
    } else {
        alert(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}   
}
function addition()
{
    var a=parseInt(document.getElementById("number2").value);
    var a1=parseInt(document.getElementById("number1").value);
    var res=document.getElementById("res")
    var sum=a+a1;
    res.value=sum;
    
}
function subtraction()
{
    var a=parseInt(document.getElementById("number2").value);
    var a1=parseInt(document.getElementById("number1").value);
    var res=document.getElementById("res")
    var sub=a-a1;
    res.value=sub; 

}
function multiplication()
{
    var a=parseInt(document.getElementById("number2").value);
    var a1=parseInt(document.getElementById("number1").value);
    var res=document.getElementById("res")
    var mul=a*a1;
    res.value=mul;

}
function division()
{
    var a=parseInt(document.getElementById("number2").value);
    var a1=parseInt(document.getElementById("number1").value);
    var res=document.getElementById("res")
    var div=a/a1;
    res.value=div;
  

}

function clearNumber() {
    res.value=null;
}

