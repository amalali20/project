// appointment button
document.getElementById("btnn4").addEventListener("click",
function()
{
    open("appointment.html", "_self");
}
);

// function for image 1
document.getElementById("im1").addEventListener("click",
function()
{
    document.getElementById("d1").style.border = "2px dashed #02598B";
    document.getElementById("d2").style.border = "none";
    document.getElementById("d3").style.border = "none";
    document.getElementById("d4").style.border = "none";
    document.getElementById("d5").style.border = "none";
    document.getElementById("d6").style.border = "none";
    document.getElementById("div22").innerHTML = `
    <div class="info">
        <p>جميعنا يعلم أهمية الماء وأنها المكون الأساسي للجسم، لكن يبقى السؤال
            <br><span>ما كمية الماء التي يحتاجها الجسم يوميًا؟</span>
        </p>
        <h4>* الاحتياج اليومي من الماء</h4>
        <p>تختلف كمية الماء التي يحتاجها الجسم يوميا من الشخص للآخر، وهناك الكثير من الآراء العلمية المعتبرة في هذا الأمر. لكن بشكل عام، وفي الظروف الطبيعية، يقدر الاحتياج اليومي من الذكور والإناث 3.7 لترًا من الماء للذكور، وحوالي 2.7 لترًا للإناث. <br>
            تتغير هذه النسب وفقًا للكثير من العوامل، مثل درجة حرارة الطقس وحالة الشخص الصحية</p>
            <p>يجب أن تتناول كمية كافية من الماء حتى تعوض هذا الاستهلاك وتتجنب الدخول في حالة الجفاف، ولهذا، ينصح بتناول الماء خلال ساعات اليوم حتى وإن لم تكن عطشًا.</p>
    
        <h4>* كمية الماء التي يحتاجها الجسم يوميًا للأطفال</h4>
        <ul>
            <li><span>الأطفال من 4 إلى 8 سنوات:
            </span> 1.2 لترًا من الماء (ما يقارب 5 أكواب من الماء) لكل يوم.</li>
            <li><span>من عمر 9 إلى 13: 
            </span> 1.6 إلى لترين من الماء، وهو ما يعادل 7 إلى 8 أكواب من الماء</li>
            <li><span>من 14 عامًا وحتى 18 عامًا:</span>يوصى بشرب 8 إلى 11 كوبًا من الماء، أي لتران إلى لترين ونصف </li>
        </ul>
        <img src="../images/water1.jpg" alt="">
    </div>
    
    <div class="im">
        <img src="../images/water.jpg" alt="">
        <h4>* علامات حصولك على ما يكفي من الماء يوميًا</h4>
            <p>تمثل العلامات التالية موشرًا جيدًا على الوصول لاحتياج الجسم من الماء بشكل كافٍ:</p>
            <ul>
                <li>ندرة الإحساس بالعطش.</li>
                <li>لون البول فاتح أو عديم اللون.</li>
                <li>عدم ظهور علامات الجفاف الأخرى على الجسم مثل تشقق الشفتين وظهور القشور على البشرة.</li>
            </ul>
    </div>
    `;
}
);

// function for image 2
document.getElementById("im2").addEventListener("click",
function()
{
    document.getElementById("d2").style.border = "2px dashed #02598B";
    document.getElementById("d1").style.border = "none";
    document.getElementById("d3").style.border = "none";
    document.getElementById("d4").style.border = "none";
    document.getElementById("d5").style.border = "none";
    document.getElementById("d6").style.border = "none";
    document.getElementById("div22").innerHTML = `
    <div class="info">
    <p>صاحب التطور التكنولوجي الهائل الذي شهدته البشرية <span>انخفاض نشاط الأشخاص الحركي</span>، مما تسبب بزيادة معدلات السمنة المرتبطة بالخمول، ودفع معظم اختصاصيي الرعاية الصحية التركيز على تشجيع زيادة النشاط الحركي بأداء التمارين الرياضية بمختلف أنواعها بانتظام، والتي تتضمن أي حركة تتطلب عمل العضلات، وحرق الجسم سعرات حرارية لتنفيذها، مما يعود على الجسم بالعديد من الفوائد الصحية.
    </p>
    <h4>* فوائد ممارسة التمارين الرياضية</h4>
    <span>من أهم فوائد ممارسة التمارين الرياضية:</span>
    <ul>
        <li>تحسين المزاج</li>
        <li>الحفاظ على صحة البشرة</li>
        <li>الحفاظ على العضلات والعظام</li>
        <li>تخفيض خطر الإصابة بالأمراض المزمنة</li>
        <li>حرق الجسم للسعرات الحرارية
            وإنقاص الوزن</li>
    </ul>
    <h4 class="h41">* أنواع التمارين الرياضية</h4>
    <img src="../images/sport1.avif" alt="" class="img1">
    <img src="../images/sport11.jpg" alt="" class="img1">
    <h4>2- التمارين الرياضية اللاهوائية</h4>
    <p>تهدف التمارين الرياضية اللاهوائية إلى بناء العضلات وزيادة قوة الجسم وقدرة تحمله، وهي تمارين عالية الشدة تؤدى على فترات زمنية قصيرة لا تتجاوز الدقيقتين،
        وفي حين أن التمارين اللاهوائية تستهلك سعرات حرارية أقل من الهوائية، وفوائد التمارين الهوائية للقلب أكبر من فوائد اللاهوائية، إلا أن التمارين اللاهوائية أفضل لبناء العضلات والقوة،
        ومن أهم الأمثلة على هذه التمارين <span>رفع الأثقال  والركض السريع  والقفز السريع بالحبل</span></p>
</div>

<div class="im">
    <img src="../images/sport.avif" alt="">
    <h4>1- التمارين الرياضية الهوائية</h4>
    <p>تهدف التمارين الهوائية إلى زيادة استهلاك الجسم للاكسجين، واستخدامه لمختلف عمليات الأيض، وغالباً ما تؤدى بشدة متوسطة وعلى فترات طويلة،
        وتستهدف هذه التمارين عضلات الجسم الكبيرة، ويعتبر <span>المشي، والسباحة، وركوب الدراجة</span> من أهم الأمثلة عليها</p>

    <img src="../images/sport2.jpg" alt="" class="img1">
    <img src="../images/sport22.jpg" alt="" class="img1">
</div>
    `;
}
);

// function for image 3
document.getElementById("im3").addEventListener("click",
function()
{
    document.getElementById("d3").style.border = "2px dashed #02598B";
    document.getElementById("d1").style.border = "none";
    document.getElementById("d2").style.border = "none";
    document.getElementById("d4").style.border = "none";
    document.getElementById("d5").style.border = "none";
    document.getElementById("d6").style.border = "none";
    document.getElementById("div22").innerHTML = `
    <div class="info">
    <p>إن الحصول على قدر كاف من النوم الجيد هو المفتاح لتحسين الصحة العامة، وتقوية المناعة، وتعزيز الذاكرة، فضلًا عن الوقاية من الأمراض المزمنة والحفاظ على وزن صحي؛ لذلك يوصى باتباع عادات النوم الصحية، وتجنب السهر أو عدم انتظام مواعيد النوم فهي عوامل تضر بصحة الإنسان النفسية والبدنية.</p>
    <h4>* فوائد النوم</h4>
    <ul>
        <li><span>تقوية المناعة </span></li>
        <p>تشمل فوائد النوم والاستيقاظ مبكرًا تعزيز أداء الجهاز المناعي حيث يعطي النوم فرصة للجسم للإصلاح والتعافي وتقوية المناعة.</p>
        <li> <span>تحسين الأداء الرياضي </span> </li>
        <p>عد الحصول على قدر كافٍ من النوم من أهم العوامل التي تساعد الرياضيين على تحسين أدائهم    
            تتضمن فوائد النوم للرياضيين ما يلي <span>بناء العضلات  و زيادة السرعة  و زيادة قدرة التحمل و سرعة ردة الفعل</span></p>
        <li><span>الحفاظ على صحة القلب</span></li>
        <p>يعد من أهم فوائد النوم المبكر مدة لا تقل عن 7 ساعات هو تعزيز صحة القلب، حيث يتيح للقلب فرصة للراحة فيتباطأ معدل ضرباته وينخفض ضغط الدم.</p>
        <li><span>تنظيم مستوى السكر في الدم </span></li>
        <p>تتمثل فوائد النوم مبكرًا والاستيقاظ مبكرًا في المساعدة على تنظيم عملية التمثيل الغذائي ونسبة السكر في الدم، إذ أن مستوى السكر في الدم ينخفض في مراحل النوم العميق</p>

    </ul>

    <img src="../images/sleep1.jpg" alt="">
</div>

<div class="im">
    <img src="../images/sleep.jpg" alt="">
    <h4>*- ما هي عدد ساعات النوم الصحي؟</h4>
    <p>تختلف عدد ساعات النوم الكافية التي تضمن الحصول على فوائد النوم باختلاف المرحلة العمرية، ونوضح في الجدول التالي عدد ساعات النوم اللازمة لكل مرحلة عمرية:</p>
    <ul>
        <li><span>الأطفال من عمر 3 إلى 5 سنوات</span>10 إلى 13 ساعة</li>
        <li><span>الأطفال من عمر 6 إلى 12 عامًا</span> إلى 12 ساعة</li>
        <li><span>المراهقين من عمر 13 إلى 18 عامًا</span>8 إلى 10 ساعات</li>
        <li><span>البالغين من عمر 18 إلى 60 عامًا</span>7 ساعات أو أكثر</li>
        <li><span>الكبار من عمر 61 إلى 64 عامًا</span>7 إلى 9 ساعات</li>
        <li><span>الكبار من عمر 65 فأكثر </span>7 إلى 8 ساعات</li>
    </ul>
</div>

    `;
}
);

// function for image 4
document.getElementById("im4").addEventListener("click",
function()
{
    document.getElementById("d4").style.border = "2px dashed #02598B";
    document.getElementById("d1").style.border = "none";
    document.getElementById("d2").style.border = "none";
    document.getElementById("d3").style.border = "none";
    document.getElementById("d5").style.border = "none";
    document.getElementById("d6").style.border = "none";
    document.getElementById("div22").innerHTML = `
    <div class="info">
    <p>التغذية السليمة هي أحد العوامل الرئيسية لضمان نمو طبيعي وصحي لطفلك . يمكن أن يؤثر النوع الصحيح من التغذية وأنواع معينة من الطعام على ذاكرة طفلك وقدرته على التعلم لاحقًا.</p>
    <ul>
        <li><h5>التزمي بتناول الفيتامينات الصحيحة</h5>سينصحك معظم أطباء النساء بتناول أنواع معينة من الفيتامينات المفيدة لك ولطفلك، ومن الضروري أن تشمل تلك الفيتامينات من بينها؛ حمض الفوليك وفيتامين ب 12 لتنمية خلايا الدم الحمراء، وفيتامين ج لإنتاج الكولاجين، وفيتامين د للمساعدة في نمو العظام.</li>
        <li><h5>البروتين هو المفتاح</h5>ستحتاجين  نسبة جيدة من البروتينات والتي تتواجد في اللحوم والبيض وغيرها من العناصر فالبروتين عنصر رئيسي وهام لطفلك الذي ينمو، حيث يساعد البروتين في بناء خلايا الجسم، ويسمح للطفل بإنتاج الهرمونات الضرورية لنموه وتطوره.
        </li>
        <li><h5>تناولي وجبات منتظمة ومتوازنة</h5>يُنصح بتناول الطعام بانتظام وعدم اتباع أي حمية غذائية لإنقاص الوزن، كذلك التأكد من أن وجباتك متوازنة وتتكون من العناصر الغذائية الرئيسية على مدار اليوم.</li>
    </ul>
    <img src="../images/weman1.webp" alt="">
</div>

<div class="im">
    <img src="../images/weman.webp" alt="">
    <ul>
        <li><h5> تناولي الكثير من الفاكهة والخضروات</h5>يتضمن تناول وجبات متوازنة من خلال تناول الفاكهة والخضروات. الفاكهة والخضروات غنية بمضادات الأكسدة، وهي مفيدة لنا في أي عمر، كما أنها تساعد في حماية أنسجة دماغ طفلك من التلف. فكلما كانت الألوان أكثر، كان ذلك أفضل.</li>
        <li><h5>إمداد جسدك وطفلك بالحديد الذي يحتاجونه</h5>يساعد الحديد على توصيل الأكسجين لطفلك، مما يبقيه على قيد الحياة ويضمن نموه بشكل صحيح.</li>
        <li><h5> تجنبِ تناول اللحوم النيئة والبيض غير المطهو جيدًا</h5>يزيد تناول اللحوم النيئة والبيض غير المطهو جيدًا من احتمالية الإصابة بالتسمم الغذائي، حيث قد تحتوي اللحوم والبيض غير المطبوخ على نوع معين من الطفيليات التي يمكن أن تتسبب في تسممًا غذائيًا</li>
    </ul>
</div>
    `;
}
);

// function for image 5
document.getElementById("im5").addEventListener("click",
function()
{
    document.getElementById("d5").style.border = "2px dashed #02598B";
    document.getElementById("d1").style.border = "none";
    document.getElementById("d2").style.border = "none";
    document.getElementById("d3").style.border = "none";
    document.getElementById("d4").style.border = "none";
    document.getElementById("d6").style.border = "none";
    document.getElementById("div22").innerHTML = `
    <div class="info">
    <h4>كيف يُمكن تعريف خشونة واحتكاك الركبة؟</h4>
    <p>الخشونة أوالاحتكاك من الممكن أن تُصيب أي مفصل في الجسم، وهي باختصار ضرر أو تآكل في الغضاريف التي تُغطّي العظمة عند التقائها بعظمة أُخرى. فمثلًا في الركبة، يوجد التقاء بين أكثر من عظمتين (هُما الفخذ والساق، أو عظمة الصابونة مع عظمة الفخذ) وكل مفصل منهم من المُمكن أن يُصاب بخشونة دون الآخر، أو أن تكون الخشونة شاملة الركبة كاملة.</p>
    <h5>ما هي أبرز الأسباب وراء الإصابة بهذه الحالة؟</h5>
    <ul>
        <li>التقدّم بالسن، وتختلف شدّتها على حسب الحالة الصحيّة للمريض</li>
        <li> الخشونة قد تكون بسبب إصابة في المفصل اما كسر او قطع في الأربطة المثبتة للمفصل.</li>
        <li>الأمراض الروماتزمية أيضًا بأنواعها قد تكون من أسباب خشونة المفصل</li>
        <li>الالتهابات الجرثومية أيضًا قد تكون سبب في تآكل الغضاريف وتدهوّر المفصل خلال فترة قصيرة في حالة عدم تشخيصها وعلاجها في الوقت المُناسب</li>
    </ul>
    <img src="../images/bones1.webp" alt="">
</div>

<div class="im">
    <img src="../images/bones.jpeg" alt="">
    <h5>ما هي خيارات العلاج بالنسبة لخشونة واحتكاك الركبة؟</h5>
    <p>علاج الخشونة يكون أولًا بالوقاية. فالنشاط البدني مع تقوية عضلات الفخذ من أنجح وسائل الوقاية من تطوّر الخشونة وعلاج الألم. الخشونة بشكل عام لا يُمكن عكسها ولكن بالإمكان التحكّم في اعراضها وتطوّرها. العلاجات التحفظية هي دائما أول الخيارات وأهمها:</p>
    <ul>
        <li>المحافضة على الوزن المثالي.</li>
        <li>النشاط الرياضي المُناسب للعمر والوزن.</li>
        <li>العلاج الطبيعي وتقوية عضلات الفخذ.</li>
        <li>في بعض أنواع الخشونة قد يستفيد المريض من أنواع مُعيّنة من الدعامات التي تُلبس حول الركبة عند المشي أو عمل نشاط رياضي</li>
    </ul>
</div>
    `;
}
);

// function for image 6
document.getElementById("im6").addEventListener("click",
function()
{
    document.getElementById("d6").style.border = "2px dashed #02598B";
    document.getElementById("d1").style.border = "none";
    document.getElementById("d2").style.border = "none";
    document.getElementById("d3").style.border = "none";
    document.getElementById("d4").style.border = "none";
    document.getElementById("d5").style.border = "none";
    document.getElementById("div22").innerHTML = `
    <div class="info">
    <p>إن السمنة هي واحدة من الحالات الطبية الأكثر شيوعًا في المجتمع الغربي اليوم وأكثرها صعوبة من ناحية علاج السمنة والتصدي لها، لم يتم نسبيًّا تحقيق سوى تقدم ضئيل في علاج السمنة باستثناء تغيير نمط الحياة، ولكن تم جمع العديد من المعلومات بخصوص العواقب الطبية لحالة السمنة.</p>
    <h4>من أسباب وعوامل خطر السمنة</h4>
    <ul>
        <li><h5>الإفراط في الأكل</h5>يؤدي الإفراط في تناول الطعام إلى زيادة الوزن، وخاصةً إذا كان النظام الغذائي يحتوي على نسبة عالية من الدهون.</li>
        <li><h5>الخمول البدني</h5>يحرق الأشخاص الخاملون سعرات حرارية أقل من الأشخاص النشطين، حيث أظهر المسح الوطني لفحص الصحة والتغذية وجود علاقة قوية بين الخمول البدني وزيادة الوزن </li>
        <li><h5>الوراثة</h5>يكون الشخص أكثر عرضة للإصابة بالسمنة إذا كان أحد الوالدين أو كلاهما يعاني من السمنة، حيث تؤثر الوراثة أيضًا على الهرمونات المشاركة في تنظيم الدهون.</li>
        <li><h5>اتباع نظام غذائي غني بالكربوهيدرات</h5>إن دور الكربوهيدرات في زيادة الوزن غير واضح، حيث تزيد الكربوهيدرات من مستويات الغلوكوز في الدم والتي بدورها تحفز إفراز البنكرياس للأنسولين  الذي يعزز نمو الأنسجة الدهنية ويمكن أن يتسبب في زيادة الوزن.</li>
    </ul>
    <img src="../images/weight1.jpg" alt="">
</div>

<div class="im">
    <img src="../images/weight.jpg" alt="">
    <h4>تشمل أبرز طرق العلاج ما يأتي:</h4>
    <ul>
        <li><h5>ممارسة الرياضة</h5>إن ممارسة التمارين الرياضية ضرورية للمحافظة على فِقدان الوزن وعلاج السمنة للمدى الطويل يُسبب النشاط الجسماني زيادة في استهلاك السُّعُرات الحرارية في الجسم.</li>
        <li><h5> علاج السمنة الدوائي</h5>تمت الموافقة على عدد قليل جدًّا من الأدوية لعلاج السمنة التي بحاجة لوصفة طبية والتي يوصى بها لتخفيف الوزن، حيث يوصى بتناول الأدوية كجزء من البرنامج العلاجي الشامل وليس كوسيلة وحيدة لتخفيف الوزن وعلاج السمنة. </li>
        <li><h5>العلاج الجراحي</h5>إن الأشخاص الذين يعانون من السمنة ويكون مؤشر كتلة الجسم لديهم أكثر من 40 يستطيعون أن يخضعوا لعمليات جراحية مختلفة في المعدة تؤدي إلى فِقدان الوزن.</li>
    </ul>
    <h4>تشمل أبرز طرق الوقاية ما يأتي:</h4>
    <ul>
        <li>قلل استهلاك السكر.</li>
        <li>جرب نظامًا غذائيًا نباتيًا.</li>
        <li>تجنب الدهون</li>
        <li>تجنب الوجبات السريعة.</li>
        <li></li>
    </ul>
</div>
    `;
}
);


// click on button 
document.getElementById("send").onclick=validate;
function validate()
{
    validateName();
    validateEmail();
    validateSub();

    done();
};

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
        document.getElementsByClassName("errorSpan")[0].innerHTML = "<i class='fa fa-check'></i>";
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
    var address = document.getElementById("text").value;
    if(address.length == 0)
    {
        document.getElementsByClassName("errorSpan")[2].innerHTML ="اكتب اسم المقال!";
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
        confirm("سيتم عرض المقال الذى تريده فى الصفحة قريبا");
    }
}