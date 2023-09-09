document.getElementById("sendBtn").onclick=validate;
var myWindow;
function validate()
{
    validateName();
    validateAge();

    validateEmail();
    validateAddress();

    goTo();      
}
var b1 , b2, b3 , b4;
// validate name function
function validateName()
{  b1=false;
    var Uname = document.getElementById("useName").value;
    var bool = 0,n=0,
    i=0 ;
    while(i < Uname.length)
    {  if((Uname[i]>='a' && Uname[i]<='z') || (Uname[i]>='A' && Uname[i]<='Z'))
        {
            bool++;
        }
        else{
            n++;
        }
        i++;
    }


    if( Uname.length == 0)
    {
        document.getElementsByClassName("errorSpan")[0].innerHTML = "ادخل اسمك !!";
    }
    else if(n > 0)
    {
        document.getElementsByClassName("errorSpan")[0].innerHTML = "لا يمكن كتابه رقم مع الاسم";

    }
    else{
        document.getElementsByClassName("errorSpan")[0].innerHTML = "<i class='fa fa-check ' ></i>";
        b1=true;
    }
}
// validate age function
function validateAge()
{   b2=false;
    var userAge = document.getElementById("age").value;
    var x=0,y=0,k=0;
    while(k<userAge.length)
    {
        if((userAge[k]>='a' && userAge[k]<='z') || (userAge[k]>='A' && userAge[k]<='Z'))
        {
            x++;
        }
        else{
            y++;
        }
        k++;
    }

    if(userAge.length == 0 )
    {
        document.getElementsByClassName("errorSpan")[1].innerHTML = "من فضلك ادخل عمرك !!";
    }
    else if (parseInt(userAge) < 20)
    {
        document.getElementsByClassName("errorSpan")[1].innerHTML = "يجب ان يكون عمرك 20 سنة فيما فوق !";
    }
    else if (parseInt(userAge) > 70)
    {
        document.getElementsByClassName("errorSpan")[1].innerHTML = "يجب ان يكون عمرك أقل من 70 سنة";
    }
    else if(x > 0){
        document.getElementsByClassName("errorSpan")[1].innerHTML = "لا يمكن ان يحتوى عمرك على حروف !";
    }
    else
    {
        document.getElementsByClassName("errorSpan")[1].innerHTML = "<i class='fa fa-check'></i>";
        b2=true;
    }
}
// validate email function
function validateEmail(){
    b3=false;
    var email = document.getElementById("email").value;
    if(email.length == 0){
        document.getElementsByClassName("errorSpan")[2].innerHTML = " ادخل بريدك الالكترونى !!";
    }
    else if(email.includes("@") == false || email.includes(".") == false || email.includes("com") == false){
        document.getElementsByClassName("errorSpan")[2].innerHTML =  "ادخل بريدك الالكترونى بالصيغة الصحيحة !!";
    }
    else{
        document.getElementsByClassName("errorSpan")[2].innerHTML = "<i class='fa fa-check'></i>";
        b3=true;
    }
}
// validate adress function
function validateAddress(){
    b4=false;
    var address = document.getElementById("address").value;
    if(address.length == 0)
    {
        document.getElementsByClassName("errorSpan")[4].innerHTML ="من فضلك ادخل العنوان";
    }
    else{
        document.getElementsByClassName("errorSpan")[3].innerHTML = "<i class='fa fa-check'></i>";
        b4=true;
    }
}
// go to thank page
function goTo()
{
    if(b1==true && b2==true && b3==true && b4==true)
    {
        myWindow = window.open("", "myWindow");
        myWindow.document.write(`<h1 class='h'> Thanks </h1>`);
    }
}

// close from  return to home
document.getElementById("cancel").onclick=Close;
function Close(){
    var cancel = confirm("this will cancel Registeration and close form");
    if(cancel == true)
    {
        open("home.html", "_self")
    }
}
