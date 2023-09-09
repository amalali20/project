// appoint button
document.getElementById("btnn").addEventListener("click",
function()
{
    open("appointment.html", "_self");
}
);


//button in section 6
document.getElementById("btnn1").addEventListener("click",
function()
{
    open("health.html", "_self");
}
);



// section 3
document.getElementById("bt1").addEventListener("click",
function(){
    open("about.html" , "_self")
});

var h1 = document.getElementById("h1");
var h2 = document.getElementById("h2");
var h3 = document.getElementById("h3");

var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");


h1.addEventListener("click",
function(){

    if(p1.innerHTML == "")
    {
        h1.style.color = "#02598B";
        p1.innerHTML = `عياداتنا لديها مجموعة من الخدمات التي تغطي أي احتياجات للرعاية الصحية، كل ذلك تحت سقف واحد! مجموعة من الخدمات بما في ذلك الممارسة العامة والرعاية المتخصصة والطب النفسي للأطفال والمراهقين وطب الأطفال وأمراض القلب وطب الأسنان والجراحة التجميلية والعلاج التجميلي، بالإضافة إلى العلاج الطبيعي والأشعة وجميع خدمات المختبرات.`;
    }
    else
    {
        p1.innerHTML = "";
        h1.style.color = "";
    }
    h2.style.color = "";
    h3.style.color = "";
    p2.innerHTML = "";
    p3.innerHTML = "";
});

h2.addEventListener("click",
function(){

    if(p2.innerHTML == "")
    {
        h2.style.color = "#02598B";
        p2.innerHTML = ` تستخدم عياداتنا أحدث المعدات والتقنيات لإنشاء منشأة فعالة وكفؤة حيث تأتي رفاهتك أنت وأحبائك في المقام الأول. `;
    }
    else
    {
        p2.innerHTML = "";
        h2.style.color = "";
    }
    h1.style.color = "";
    h3.style.color = "";
    p1.innerHTML = "";
    p3.innerHTML = "";
});


h3.addEventListener("click",
function(){

    if(p3.innerHTML == "")
    {
        h3.style.color = "#02598B";
        p3.innerHTML = `فريق من الأطباء الخبراء موجودون دائمًا للحفاظ على صحتك`;
    }
    else
    {
        p3.innerHTML = "";
        h3.style.color = "";
    }
    h1.style.color = "";
    h2.style.color = "";
    p1.innerHTML = "";
    p2.innerHTML = "";
});

