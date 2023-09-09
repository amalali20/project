// appointment button
document.getElementById("btnn5").addEventListener("click",
function()
{
    open("appointment.html", "_self");
}
);

// form 
document.getElementById("send").onclick=validate;
function validate()
{
    validateName();
    validateEmail();
    validateSub();

    done();
}

var b1 , b2, b3 ;
// validate name function
function validateName()
{  b1=false;
    var Uname = document.getElementById("useName").value;

    if( Uname.length == 0)
    {
        document.getElementsByClassName("errorSpan")[0].innerHTML = "ادخل اسمك !!";
    }
    else{
        document.getElementsByClassName("errorSpan")[0].innerHTML = "<i class='fa fa-check ' ></i>";
        b1=true;
    }
}

// validate email function
function validateEmail(){
    b2=false;
    var email = document.getElementById("email").value;
    if(email.length == 0){
        document.getElementsByClassName("errorSpan")[1].innerHTML = " ادخل بريدك الالكترونى !!";
    }
    else if(email.includes("@") == false || email.includes(".") == false || email.includes("com") == false){
        document.getElementsByClassName("errorSpan")[1].innerHTML =  "ادخل بريدك الالكترونى بالصيغة الصحيحة !!";
    }
    else{
        document.getElementsByClassName("errorSpan")[1].innerHTML = "<i class='fa fa-check'></i>";
        b2=true;
    }
}

// validate subject function
function validateSub(){
    b3=false;
    var address = document.getElementById("sub").value;
    if(address.length == 0)
    {
        document.getElementsByClassName("errorSpan")[2].innerHTML ="اكتب اسم الموضوع!";
    }
    else{
        document.getElementsByClassName("errorSpan")[2].innerHTML = "<i class='fa fa-check'></i>";
        b3=true;
    }
}

// done function
function done()
{
    if(b1==true && b2==true && b3==true)
    {
        confirm("سوف يصلك الرد على بريدك الالكترونى خلال ساعات");
    }
}