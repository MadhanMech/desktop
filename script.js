//Add Input tag in signups

var x=0;
    function toggleDetails() {
        const userType = document.getElementById("userType").value;
        const standard = document.querySelector(".standard");
        const subject = document.querySelector(".subject");
        if (userType === "STUDENT") {
            standard.classList.remove("d-none");
            subject.classList.add("d-none")
        }
        else if(userType==="STAFF"){
            subject.classList.remove("d-none");
            standard.classList.add("d-none");
        }
        
        else {
            subject.classList.add("d-none");
            standard.classList.add("d-none");
        }
        
    }
    function hide(){
        var element = document.getElementById("sidebar");
                element.classList.remove("d-block");
                console.log("Entered");
    }
    function show(){
        var element = document.getElementById("sidebar");
                x=x+1;
                element.classList.add("d-block");
                
                if(x>1){
                    console.log(x);
                    hide();
                    x=x-2;
                }
              
                
    }
    function showPassword(){
        var attp = document.getElementById("password");
        if(attp.type==="password"){
            attp.type="text";
        }
        else{
            attp.type="password";
        }
    }

/changepassword/
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('toggleoldpassword').addEventListener('click', function(event) {
        const passwordField = document.getElementById('oldpassword');
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-eye')) {
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });

    document.getElementById('togglenewpassword').addEventListener('click', function(event) {
        const confirmPasswordField = document.getElementById('newpassword');
        const type = confirmPasswordField.getAttribute('type') === 'password' ? 'text' : 'password';
        confirmPasswordField.setAttribute('type', type);
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-eye')) {
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });
    document.getElementById('toggleconfirmpassword').addEventListener('click', function(event) {
        const confirmPasswordField = document.getElementById('confirmpassword');
        const type = confirmPasswordField.getAttribute('type') === 'password' ? 'text' : 'password';
        confirmPasswordField.setAttribute('type', type);
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-eye')) {
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });


    document.getElementById('changepasswordform').addEventListener('submit', function(event) {
        validatePassword(event);
    });
});

function validatePassword(event) {
    const newPassword = document.getElementById('newpassword').value;
    const confirmPassword = document.getElementById('confirmpassword').value;
    const messageElement = document.getElementById('message');

    if (newPassword === confirmPassword) {
        messageElement.textContent = 'Passwords match!';
        messageElement.className = 'text-success';
    } else {
        event.preventDefault();  // Prevent form submission
        messageElement.textContent = 'Passwords do not match!';
        messageElement.className = 'text-danger';
    }
}

