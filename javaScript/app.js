// select option 1
document.getElementById("op1").addEventListener("click",
function()
{
    document.getElementById("doctor").innerHTML = `
    
    <option value="دكتور/ احمد عبده ">دكتور/ احمد عبده </option>
    <option value="دكتور/ ماجد زكرى">دكتور/ ماجد زكرى</option>
    `;
});

// select option 2
document.getElementById("op2").addEventListener("click",
function()
{
    document.getElementById("doctor").innerHTML = `
    
    <option value="دكتورة/ فاطمه علام ">دكتورة/ فاطمه علام </option>
    <option value="دكتور/ شريف موسى ">دكتور/ شريف موسى </option>
    <option value="دكتورة/ هبة احمد">دكتورة/ هبة احمد</option>
    `;
});

// select option 3
document.getElementById("op3").addEventListener("click",
function()
{
    document.getElementById("doctor").innerHTML = `
    
    <option value="دكتور/ شريف رضوان">دكتور/ شريف رضوان</option>
    <option value="دكتور/ أحمد حجازي ">دكتور/ أحمد حجازي </option>
    <option value="دكتور/ عبدالله عطية">دكتور/ عبدالله عطية</option>
    `;
});

// select option 4
document.getElementById("op4").addEventListener("click",
function()
{
    document.getElementById("doctor").innerHTML = `
    
    <option value="دكتورة/ وسام حنفي">دكتورة/ وسام حنفي</option>
    <option value="دكتور/ ماجد الوكيل">دكتور/ ماجد الوكيل</option>
    <option value="دكتور عبدالرحمن نجاح">دكتور عبدالرحمن نجاح</option>
    `;
});

// select option 5
document.getElementById("op5").addEventListener("click",
function()
{
    document.getElementById("doctor").innerHTML = `
    <option value="دكتورة/ أمل السيد">دكتورة/ أمل السيد</option>
    <option value="دكتورة/ هدى بدير">دكتورة/ هدى بدير</option>
    `;
});

// select option 6
document.getElementById("op6").addEventListener("click",
function()
{
    document.getElementById("doctor").innerHTML = `
    
    <option value="دكتور/ محمد صبحى">دكتور/ محمد صبحى</option>
    <option value="دكتور/ ابراهيم السيد ">دكتور/ ابراهيم السيد </option>
    `;
});

// select option 7
document.getElementById("op7").addEventListener("click",
function()
{
    document.getElementById("doctor").innerHTML = `
    
    <option value="دكتورة/ داليا مصطفي">دكتورة/ داليا مصطفي</option>
    <option value="دكتور/ باسم فوده">دكتور/ باسم فوده</option>
    <option value="دكتور/ أحمد الشيشينى">دكتور/ أحمد الشيشينى</option>
    `;
});


// select option 8
document.getElementById("op8").addEventListener("click",
function()
{
    document.getElementById("doctor").innerHTML = `

    <option value="دكتور/ احمد صلاح ">دكتور/ احمد صلاح </option>
    <option value="دكتور محمد عبد الحكيم">دكتور محمد عبد الحكيم</option>
    `;
});

var b1 , b2, b3, b4, b5 ;
// validate name function
function validateName()
{  b1=false;
    var Uname = document.getElementById("useName").value;
    var bool = 0,n=0;

    if( Uname.length == 0)
    {
        document.getElementsByClassName("errorSpan")[0].innerHTML = "ادخل اسمك !!";
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

// validate phone function
function validatePhone()
{   b3=false;
    var userAge = document.getElementById("phone").value;
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

    if(userAge.length == 0)
    {
        document.getElementsByClassName("errorSpan")[2].innerHTML = "من فضلك ادخل رقم الهاتف !!";
    }
    else if (userAge.length != 11)
    {
        document.getElementsByClassName("errorSpan")[2].innerHTML = "يجب ان يتكون من 11 رقم !!";
    }
    else if(x > 0 )
    {
        document.getElementsByClassName("errorSpan")[2].innerHTML = "لا يمكن ان يحتوى الرقم على حروف !!"
    }
    else if(userAge[0]!= '0'|| userAge[1]!= '1')
    {
        document.getElementsByClassName("errorSpan")[2].innerHTML = " من فضلك ادخل الرقم بالصيغة الصحيحة ....01"
    }
    else
    {
        document.getElementsByClassName("errorSpan")[2].innerHTML = "<i class='fa fa-check'></i>";
        b3=true;
    }
}

// validate email function
function validateEmail(){
    b4=false;
    var email = document.getElementById("email").value;
    if(email.length == 0){
        document.getElementsByClassName("errorSpan")[3].innerHTML = " ادخل بريدك الالكترونى !!";
    }
    else if(email.includes("@") == false || email.includes(".") == false || email.includes("com") == false){
        document.getElementsByClassName("errorSpan")[3].innerHTML =  "ادخل بريدك الالكترونى بالصيغة الصحيحة !!";
    }
    else{
        document.getElementsByClassName("errorSpan")[3].innerHTML = "<i class='fa fa-check'></i>";
        b4=true;
    }
}

// validate adress function
function validateAddress(){
    b5=false;
    var address = document.getElementById("address").value;
    if(address.length == 0)
    {
        document.getElementsByClassName("errorSpan")[4].innerHTML ="من فضلك ادخل العنوان";
    }
    else{
        document.getElementsByClassName("errorSpan")[4].innerHTML = "<i class='fa fa-check'></i>";
        b5=true;
    }
}

// 
var count11=1, count21=1, count31=1, count41=1, count51=1, count61=1, count71=1, count81=1;
//
var count10=1, count20=1, count30=1, count40=1, count50=1, count60=1, count70=1, count80=1;
// 
var count1=0, count2=0, count3=0, count4=0, count5=0, count6=0, count7=0, count8 = 0;
var clinic;


document.getElementById("sendBtn").onclick=validate;
function validate()
{
    validateName();
    validateAge();
    validatePhone();
    validateEmail();
    validateAddress();

    check();

};

// 
function check()
{      clinic = document.getElementById("clinic").value;
        console.log(clinic)

        if(b1==true && b2==true && b3==true && b4==true && b5==true)
        {
            if( clinic === "القلب والصدر")
            {
                count1++;
                if(count1 < 3)
                {
                    confirm(`تم الحجز معادك ضمن عيادة ${clinic} غدا الساعة ${count11} مساءا`)
                    count11 = count11 + .5;
                }
                else
                {
                    var value = confirm("عذرا لا يوجد مواعيد متاحة هل تريد حجز معاد بعد غد")
                    if(value == true)
                    {
                        confirm(`تم الحجز معادك بعد غد الساعة ${count10} مساءا`);
                        count10 = count10 + 0.5;
                    }
                    else
                    {
                        confirm("لم يتم الحجز")
                    }
                }
            }
    
            else if( clinic === "أمراض الجهاز الهضمي والكبد")
            {
                count2++;
                if(count2 < 15)
                {
                    confirm(`تم الحجز معادك ضمن عيادة ${clinic} غدا الساعة ${count21} مساءا`)
                    count21 = count21 + .5;
                }
                else
                {
                    var value = confirm("عذرا لا يوجد مواعيد متاحة هل تريد حجز معاد بعد غد")
                    if(value == true)
                    {
                        confirm(`تم الحجز معادك بعد غد الساعة ${count20} مساءا`);
                        count20 = count20 + 0.5;
                    }
                    else
                    {
                        confirm("لم يتم الحجز")
                    }
                }
            }
    
            else if( clinic === "جراحة العظام")
            {
                count3++;
                if(count3 < 15)
                {
                    confirm(`تم الحجز معادك ضمن عيادة ${clinic} غدا الساعة ${count31} مساءا`);
                    count31 = count31 + .5;
                }
                else
                {
                    var value = confirm("عذرا لا يوجد مواعيد متاحة هل تريد حجز معاد بعد غد");
                    if(value == true)
                    {
                        confirm(`تم الحجز معادك بعد غد الساعة ${count30} مساءا`);
                        count30 = count30 + 0.5;
                    }
                    else
                    {
                        confirm("لم يتم الحجز")
                    }
                }
            }
    
            else if( clinic === "طب الأطفال")
            {
                count4++;
                if(count4 < 15)
                {
                    confirm(`تم الحجز معادك ضمن عيادة ${clinic} غدا الساعة ${count41} مساءا`);
                    count41 = count41 + .5;
                }
                else
                {
                    var value = confirm("عذرا لا يوجد مواعيد متاحة هل تريد حجز معاد بعد غد")
                    if(value == true)
                    {
                        confirm(`تم الحجز معادك بعد غد الساعة ${count40} مساءا`);
                        count40 = count40 + 0.5;
                    }
                    else
                    {
                        confirm("لم يتم الحجز")
                    }
                }
            }
    
            else if( clinic === "النساء والتوليد")
            {
                count5++;
                if(count5 < 15)
                {
                    confirm(`تم الحجز معادك ضمن عيادة ${clinic} غدا الساعة ${count51} مساءا`);
                    count51 = count51 + .5;
                }
                else
                {
                    var value = confirm("عذرا لا يوجد مواعيد متاحة هل تريد حجز معاد بعد غد")
                    if(value == true)
                    {
                        confirm(`تم الحجز معادك بعد غد الساعة ${count50} مساءا`);
                        count50 = count50 + 0.5;
                    }
                    else
                    {
                        confirm("لم يتم الحجز")
                    }
                }
            }
    
            else if( clinic === "الأنف والأذن والحنجرة")
            {
                count6++;
                if(count6 < 15)
                {
                    confirm(`تم الحجز معادك ضمن عيادة ${clinic} غدا الساعة ${count61} مساءا`);
                    count51 = count51 + .5;
                }
                else
                {
                    var value = confirm("عذرا لا يوجد مواعيد متاحة هل تريد حجز معاد بعد غد")
                    if(value == true)
                    {
                        confirm(`تم الحجز معادك بعد غد الساعة ${count60} مساءا`);
                        count60 = count60 + 0.5;
                    }
                    else
                    {
                        confirm("لم يتم الحجز")
                    }
                }
            }
    
            else if( clinic === "طب المخ والأعصاب")
            {
                count7++;
                if(count7 < 15)
                {
                    confirm(`تم الحجز معادك ضمن عيادة ${clinic} غدا الساعة ${count71} مساءا`);
                    count71 = count71 + .5;
                }
                else
                {
                    var value = confirm("عذرا لا يوجد مواعيد متاحة هل تريد حجز معاد بعد غد")
                    if(value == true)
                    {
                        confirm(`تم الحجز معادك بعد غد الساعة ${count70} مساءا`);
                        count70 = count70 + 0.5;
                    }
                    else
                    {
                        confirm("لم يتم الحجز")
                    }
                }
            }
        
            else if( clinic === "العلاج الطبيعي")
            {
                count8++;
                if(count8 < 15)
                {
                    confirm(`تم الحجز معادك ضمن عيادة ${clinic} غدا الساعة ${count81} مساءا`);
                    count81 = count81 + .5;
                }
                else
                {
                    var value = confirm("عذرا لا يوجد مواعيد متاحة هل تريد حجز معاد بعد غد")
                    if(value == true)
                    {
                        confirm(`تم الحجز معادك بعد غد الساعة ${count80} مساءا`);
                        count80 = count80 + 0.5;
                    }
                    else
                    {
                        confirm("لم يتم الحجز")
                    }
                }
            }
        }
    }
