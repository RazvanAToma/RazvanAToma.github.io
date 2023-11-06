let correctincorrect = document.getElementById('correctincorrect');
let password = 'password';

function checkPass() {
    if (document.getElementById("password").value === password) {

        correctincorrect.innerHTML = ('correct')
        window.location.href = "index_logged.html";
    } else {
        correctincorrect.innerHTML = ('incorrect');
    } 
}

