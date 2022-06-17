// setting user input for userID 
const userNameShow = () =>{
    let user = document.getElementById('user');
    if (localStorage.getItem('user')) {
        user.textContent = localStorage.getItem('user');
    }
    else {
        let userIn = prompt('Welcome ! Please Enter your name', 'user')
        if (!userIn) {
            alert('Please Fill the field');
            let userIn = prompt('Welcome ! Please Enter your name', 'user')
        } else {  
            user.innerHTML = + userIn;
            localStorage.setItem('user', userIn);
        }
    }
}//function close

// intialzing greetings with time 
const timeGreet = () =>{

let greet = document.getElementById('greeting')
const date = new Date();
let hour = date.getHours();
// console.log(hour);
if(0<=hour && hour<12){
    greet.innerText='Good Morning';
}else if(12<=hour && hour<17){  
    greet.innerText='Good Afternoon';
}else if(17<=hour && hour<=24){
    greet.innerText='Good Evening';
}





}//function close

mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

let typeAnimation = () => {

    let typed = document.getElementById('typed');
    let typeList = ['a Developer', 'a Designer', 'Freelancer', 'Aayush'];
    let word = 0;
    setInterval(() => {
        typed.innerHTML = typeList[word];
        word++
        if (word >= typeList.length) {
            word = 0;
        }
    }, 1000);

}//function close


//creating contact form
let formOpen = () =>{

    var formBtn = document.getElementById('formBtn');
    var contactForm = document.getElementById('contact');
    
    formBtn.addEventListener('click' , formOpen = () =>{

        let form = document.createElement('form');
        contactForm.appendChild(form);
        form.classList.add('contact')
        form.setAttribute('method','post');
        form.setAttribute('action','mailto:developerayu@gmail.com')

        let name = document.createElement('input');
        name.setAttribute('placeholder','Enter your Name');
        form.appendChild(name);

        let email = document.createElement('input')
        email.setAttribute('placeholder','Enter your Email')
        form.appendChild(email);

        let concern = document.createElement('textarea');
        concern.setAttribute('placeholder','Enter your concern Please');
        form.appendChild(concern);

        let submitBtn = document.createElement('button');
        submitBtn.innerText='Submit';
        submitBtn.setAttribute('value','submit');
        form.appendChild(submitBtn);


        name.classList.add('contactEl')
        email.classList.add('contactEl')
        concern.classList.add('contactEl')
        submitBtn.classList.add('submitBtn')
        formBtn.style.display='none';
        let closeForm = document.getElementById('closeForm');
        closeForm.style.display='block';

        closeForm.addEventListener('click',() =>{
            closeForm.style.display='none'
            formBtn.style.display='block';
            form.style.display='none';
        }) 
    })// function close
    
}// function close
   window.addEventListener('load', () => {
    userNameShow();
    timeGreet();
    typeAnimation();
//     formOpen();
});//function close
