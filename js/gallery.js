function Func() {
    document.getElementById("myDrpdwn").classList.toggle("show");
    }
    
    function prcs(){
    var color=document.getElementById("clr").value;
    document.body.style.backgroundColor=color;
    }
    
    function chngefont() {
    document.getElementById("fntdwn").classList.toggle("show");
    }
    
    function fntprc(){
    var color=document.getElementById("clr1").value;
    document.getElementById("desc").style.color=color;
    }
    
    function tst01(){
    document.getElementById("title").innerHTML="Kandy";
    document.getElementById("desc").innerHTML =" Snuggled between the imposing mountains and verdant peaks are some of the best places to visit in Kandy that are defined by calmness and serenity. Known for spirituality and laid-back charm, Kandy has everything peaceful and balmy about it. The beautiful Sri Lankan city is also a popular attraction for Buddhists.";
    }
    function tst02(){
    document.getElementById("title").innerHTML="Sigiriya";
    document.getElementById("desc").innerHTML = "Sigiriya is an ancient rock located in sri lanka. People belief that there was a palace on the top of that rock. Archaeologist have discovered the proofs to prove that. King kashyapa who was ruler of the Anuradhapura kingdom (477-495 BCE) build this great palace.<br><br>Sigiriya is famous for not only for the architected, but also for the famous art works in the wall. Researchers are classified that those art works painted in Anuradhapura period. Those plantings are similar to the  Famous Ajantha caves artworks in india.<br><br>Some people believe that the women in the picture is King’s wife’s while other thinks those women are taking part in some religious activity.<br><br>Sigiri pictures are so popular among the tourists in world wide.";
    }
    function tst03(){
    document.getElementById("title").innerHTML="Trincomalee";
    document.getElementById("desc").innerHTML = "In the northeast corner of Sri Lanka is the port town of Trincomalee. It is a bit of a mission to make your way up here but the time spent travelling is well worth it. There are loads of great places to visit in Trincomalee and lots of awesome things to do.When visiting the region, we recommend staying a few kilometres north of Trincomalee in the Uppuveli area. This area is better catered towards tourism with lots of great places to stay and loads of good restaurants. It also means you’ll be staying right by Uppuveli Beach, a beautiful stretch of golden sand.";
    }
    function tst04(){
    document.getElementById("title").innerHTML="Ella";
    document.getElementById("desc").innerHTML = "Ella has all the best parts of Sri Lanka rolled into one: beautiful jungle mountains, rolling tea plantations, and epic waterfalls. As one of the biggest tea producers, travelers can look forward to spending their days among the greenest surroundings, enjoying the views from hilltop houses and adventurous hiking trails. Even the train ride to Ella is one of life’s most remarkable experiences, as you travel by iconic blue train through bamboo forests and tropical mist.";
    }
    function tst05(){
    document.getElementById("title").innerHTML="Galle";
    document.getElementById("desc").innerHTML = "Located along the southwest of Sri Lanka’s scenic coastline, the historic city of Galle is one of the country’s most popular tourist destinations, and it is easy to see why. Packed full of fascinating historical sights and cultural landmarks that date to Portuguese, Dutch, and British rule, the city is a fantastic place to explore, with lots of different cultural influences and historic tourist attractions.";
    }
    
     
     var images = document.getElementById("my_Div").getElementsByTagName("img");
    
       for(var i=0;i<images.length;i++){
    
       images[i].onmouseover=function(){
       this.style.cursor='hand';
       this.style.borderColor='red';
       }
    images[i].onmouseout=function(){
       this.style.cursor='pointer';
       this.style.borderColor='blue';
       }
    }
    
                           function changeImage(event){
                           event=event || window.event;
                          
                           var targetElement= event.target|| event.srcElement;
    
                                
                           document.getElementById("mainimg").src=targetElement.getAttribute("src");
                               
                           } 