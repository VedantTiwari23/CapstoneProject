function popup(){
    alert("Login functionality is not implemented yet.");
}
document.getElementById('email').oninput = function(){
    let msg=this.value.trim();
    let warn=document.getElementById('warn');

    if(msg==""){
        warn.style.display='none';
    }

    else if(!warn.include("@")){
         warn.style.display='block'
    }

    else{
        warn.style.display='none';
    }
}


document.getElementById('password').oninput = function () {
    let pass = this.value;
    let strengthText = document.getElementById("strength");

    if (pass.length === 0) {
        strengthText.style.display = "none";
        return;
    }

    strengthText.style.display = "block";

    let strength = 0;

    if (pass.length >= 6) strength++;
    if (/[A-Z]/.test(pass)) strength++;
    if (/[0-9]/.test(pass)) strength++;
    if (/[^A-Za-z0-9]/.test(pass)) strength++;

    if (pass.length < 6) {
        strengthText.innerText = "Password must be at least 6 characters";
        strengthText.style.color = "red";
    }
    else if (strength <= 2) {
        strengthText.innerText = "Weak Password";
        strengthText.style.color = "red";
    }
    else if (strength === 3) {
        strengthText.innerText = "Medium Password";
        strengthText.style.color = "orange";
    }
    else {
        strengthText.innerText = "Strong Password";
        strengthText.style.color = "green";
    }
};