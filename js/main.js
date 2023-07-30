const modalButton = document.getElementsByClassName("modal_button")[0];
const bodyElementHTML = document.getElementsByTagName("body")[0];
const modalBackground = document.getElementsByClassName("modal_background")[0];
const modalWindow = document.getElementsByClassName("modal_window")[0];
const modalClose = document.getElementsByClassName("modal_close")[0];

const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userMessage = document.getElementById("message");
const sendButton = document.getElementById("send_button");
const errorInputName = document.getElementById("inputName");
const errorInputEmail = document.getElementById("inputEmail");
const errorIncorrectEmail = document.getElementById("incorrectEmail");
const errorInputMessage = document.getElementById("inputMessage");
const block4form = document.getElementById("block_4_form");
const successMessage = document.getElementById("success_message")

modalButton.addEventListener("click", function () {
    modalBackground.style.display = "block";
});

modalBackground.addEventListener("click", function(event){
    if(event.target === modalBackground) {
        modalBackground.style.display = "none";
    }
});

modalClose.addEventListener("click", function () {
    modalBackground.style.display = "none";
});

if($('.cards_slider')){
    $('.cards_slider').slick({
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        infinite: true,
        focusOnSelect: true,
        variableWidth: true,
      });
}

$.ajax({
    url: 'https://jsonplaceholder.typicode.com/photos',
    method: 'get',             
    dataType: 'json',          
    success: function(data){   
        for(i=0; i<8; i++){
            let images = document.getElementById('images');
            let image = document.createElement('img');
            image.classList.add('jqery_image');
            image.src = data[i].url;
            images.append(image);
        }
    }
});

function checkEmail(value){
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    return EMAIL_REGEXP.test(value);
};

function inputName(){
    if(userName.value == null || userName.value ==''){
        userName.style.borderColor = 'red';
        errorInputName.style.display='block';
    } else {
        userName.style.borderColor = 'green';
        errorInputName.style.display='none';
    }
}

function inputEmail(){
    if(checkEmail(userEmail.value)){
        email.style.borderColor = 'green';
        errorIncorrectEmail.style.display='none';
        errorInputEmail.style.display='none';
    } else if(userEmail.value == null || userEmail.value==''){
        userEmail.style.borderColor = 'red';
        errorInputEmail.style.display='block';
        errorIncorrectEmail.style.display='none';
    } else if(!checkEmail(userEmail.value)){
        email.style.borderColor = 'red';
        errorIncorrectEmail.style.display='block';
        errorInputEmail.style.display='none';
    }
}

function inputMessage(){
    if(userMessage.value==null || userMessage.value==''){
        userMessage.style.borderColor = 'red';
        errorInputMessage.style.display='block';
    } else {
        userMessage.style.borderColor = 'green';
        errorInputMessage.style.display='none';
    }
}

function sendform(){
    let haveError = false;
    inputName();
    inputEmail();
    inputMessage();
    if(userName.value == null || userName.value ==''){
        haveError = true; 
    } else if(userEmail.value == null || userEmail.value==''){
        haveError = true; 
    } else if(!checkEmail(userEmail.value)){
        haveError = true; 
    } else if(userMessage.value==null || userMessage.value==''){
        haveError = true; 
    }
    if(!haveError){
        block4form.style.display='none';
        successMessage.style.display='block';
    }
};

userName.addEventListener('input', inputName);
userEmail.addEventListener('input', inputEmail);
userMessage.addEventListener('input', inputMessage);
sendButton.addEventListener('click', sendform);