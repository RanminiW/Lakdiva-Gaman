let navbar = document.querySelector('.header .navbar');
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let viewQueryBtn = document.querySelector('#view-query');
let viewQueryForm = document.querySelector('.view-query-form-container');
let viewQueryClose = document.querySelector('#send-query');
let viewQueryEdit = document.querySelector('#edit-query');
const selected = document.querySelector("#contact .content .row form .inputBox .selected");
const optionsContainer = document.querySelector("#contact .content .row form .inputBox .options-container");


window.onscroll = () =>{
    navbar.classList.remove('active');
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    loginForm.classList.remove('active');
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
}

function getDetails() {
    var getName = document.getElementById("qName").value;
    var getEmail = document.getElementById("qEmail").value;
    var getSubject = catOption();
    var getDetail = document.getElementById("qDetail").value;
    document.getElementById("displayName").innerHTML = getName;
    document.getElementById("displayEmail").innerHTML = getEmail.toLowerCase();;
    document.getElementById("displaySubject").innerHTML = getSubject;
    document.getElementById("displayDetail").innerHTML = getDetail;
}

function name(){
  var getName = document.getElementById("qName").value;
  if(getName=""){
    alert();
  }
}
// search button
searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

// login form button
formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

// view query button
viewQueryBtn.addEventListener('click', () =>{
    viewQueryForm.classList.add('active');
});

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
