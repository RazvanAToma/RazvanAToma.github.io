let correctincorrect = document.getElementById('correctincorrect');
let password = 'password';

function checkPass() {
    if (document.getElementById("password").value === password) {

        correctincorrect.innerHTML = ('correct')

    } else {
        correctincorrect.innerHTML = ('incorrect')
    } 
}
    
