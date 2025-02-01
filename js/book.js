function book(){
    const printemail=document.getElementById('printemail');
    const printpass=document.getElementById('printphone');
    const email=document.getElementById('email').value;
    const phone=document.getElementById('phone').value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;
    if(!emailRegex.test(email) || !phoneRegex.test(phone))
    {
        if(!emailRegex.test(email) || email ==" "){
            printemail.textContent= 'invalid_email';
        }
        if(!phoneRegex.test(phone) ||phone==" ")
                {
                    printpass.textContent= 'invalid_Phone number';
                }
        return false;
    }
    else{
        // window.location.href = "../index.html";
        // // setTimeout(() => {
        // //     window.location.href = "../index.html";
        // // },1000);
        // return true;
        alert("Booking done ^--^")
    };
}