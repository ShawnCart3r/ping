function checkFun(){
    let dollerval = document.querySelector('.doller span');
    let button = document.getElementById("butt");
    let pro_button = document.querySelector('.pro .pro_button');

    let flag= 0;
    console.log(dollerval[0].innerText);
    if(dollerval[0].innerText=='19.99') {
        dollerval[0].innerHTML="199.99";
      dollerval[1].innerHTML="249.99";
      dollerval[2].innerHTML="399.99";
      
      button[0].style.backgroundColor="hsl(232deg 65% 72%)";
      button[1].style.backgroundColor="hsl(232deg 65% 72%)";
      pro_button.style.backgroundColor="white";
      
      button[0].style.color="white";
      button[1].style.color="white";
      pro_button.style.color="hsl(232deg 65% 72%)";
      flag =1;
    } else if (flag === 0) {

        dollerval[0].innerHTML="19.99";
      dollerval[1].innerHTML="24.99";
      dollerval[2].innerHTML="39.99"
    }
}

const email = document.getElementById('email')
const submit = document.getElementById('submit')
const message = document.getElementById('error-msg')

const isEmail = (email)=> {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validate = ()=> {
    const input = document.getElementById('email').value
    if(!isEmail(input)) {
        email.classList.add('error')
        message.classList.add('error')

    } else {
        email.classList.remove('error')
        message.classList.remove('error')
        alert('Thank you for your submission!')
    }
}

submit.addEventListener('click', e => {
    e.preventDefault()
    validate()
})
