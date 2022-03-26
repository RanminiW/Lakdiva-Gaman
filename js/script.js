let navbar = document.querySelector('.header .navbar');
let viewQueryBtn = document.querySelector('#view-query');
let viewQueryForm = document.querySelector('.view-query-form-container');
let viewQueryClose = document.querySelector('#send-query');
let viewQueryEdit = document.querySelector('#edit-query');
const selected = document.querySelector("#contact .content .row form .inputBox .selected");
const optionsContainer = document.querySelector("#contact .content .row form .inputBox .options-container");



window.onscroll = () =>{
    navbar.classList.remove('active');
    viewQueryForm.classList.remove('active');
}

// select start
const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

function catOption(){
    var option = document.getElementsByName('category');
    for(let i=0; i<option.length; i++){
      if(option[i].checked){
        return option[i].id;
      }
    }
  }
// select end

//mail query
function mailContent(){
    var getEmail = document.getElementById("qEmail").value;
    var getDetail = document.getElementById("qDetail").value;
    var getSubject = catOption();
    var mailto_link = 'mailto:' +getEmail+'?subject=' + encodeURIComponent(getSubject) + '&body=' + encodeURIComponent(getDetail);
    win = window.open(mailto_link, 'emailWin');
    console.log("This works");
    document.getElementById("qEmail").value='';
    document.getElementById("qDetail").value='';
    document.getElementById("qName").value='';
    
}

function getName(){
  var getName = document.getElementById("qName").value;
  if(getName==""){
    missing= "Please enter your name";
    customAlert(missing);
  }else if(getName){
    document.getElementById("displayName").innerHTML = getName;
  }
}

function getEmail(){
  var getEmail = document.getElementById("qEmail").value;
  if(getEmail==""){
    missing= "Please enter your email address";
    customAlert(missing);
  }else if(getEmail){
    document.getElementById("displayEmail").innerHTML = getEmail.toLowerCase();;
  }
}
function getSubject(){
  var getSubject = catOption();
  if(getSubject==undefined){
    missing= "Please choose the subject of your query";
    customAlert(missing);
  }else if(getSubject){
    document.getElementById("displaySubject").innerHTML = getSubject;
  }
}

function getDetail(){
  var getDetail = document.getElementById("qDetail").value;
  if(getDetail==""){
    missing= "Please enter the details of your query";
    customAlert(missing);
  }else if(getDetail){
    document.getElementById("displayDetail").innerHTML = getDetail;
  }
}


function customAlert(missing){
  const div=document.createElement('div');
  div.className='alert';
  div.appendChild(document.createTextNode(missing));
  const parent=document.querySelector('.contact .content .row form');
  const before=document.querySelector('#beforeAlert');
  parent.insertBefore(div,before);
  setTimeout(()=>document.querySelector('.alert').remove(),3000);
  viewQueryForm.classList.remove('active');
}

function getDetails() {
  viewQueryForm.classList.add('active');
  getName();
  getEmail();
  getSubject();
  getDetail();
}


viewQueryClose.addEventListener('click', () =>{
    viewQueryForm.classList.remove('active');
});

viewQueryEdit.addEventListener('click', () =>{
    viewQueryForm.classList.remove('active');
});

// contact video
document.querySelectorAll('.contact .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.contact .video-container .video').src = src;
    }
})
// swiper
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});
