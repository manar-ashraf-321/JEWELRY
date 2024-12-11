const changmood = document.getElementById('change-mood');
const Theme = document.getElementById('theme');
changmood.onchange=function() 
{
    if (changmood.checked==true) 
    {
        
        document.body.style.backgroundColor=  "#212529";
        Theme.textContent='Original Mode';
    } 
    else{
        document.body.style.backgroundColor= "#422d21";
        Theme.textContent='Dark Mode';
    }
};
/*---------------------------------------------------------------------------------*/
function Signup() {
    const printemail=document.getElementById('printemail');
    const printpass=document.getElementById('printpass');
    const printCo=document.getElementById('printCo');
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const Confirm_password=document.getElementById('Confirm-password').value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;
    if(!emailRegex.test(email) || !passwordRegex.test(password) || !passwordRegex.test(Confirm_password))
    {
        if(!emailRegex.test(email) || email ==" "){
            printemail.textContent= 'invalid_email';
        }
        if(!passwordRegex.test(password) ||passwordRegex.test(Confirm_password) || password==" ")
                {
                    printpass.textContent= 'invalid_Password';
                }
        if(password != Confirm_password)
            {
                printCo.textContent= 'invalid_Confirm_password';
            }
        return false;
    }
    else{
        window.location.href = "../index.html";
        // setTimeout(() => {
        //     window.location.href = "../index.html";
        // },1000);
        return true;
    };
}
/*------------------------------------------------------------------------------------*/
