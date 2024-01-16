/*===== LOGIN SHOW and HIDDEN =====*/
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')


signUp.addEventListener('click', ()=>{
    // remove classes first if they exist
    loginUp.classList.remove('none')
    // add classes
    loginIn.classList.toggle('none')
})

signIn.addEventListener('click', ()=>{
    // remove classes first if they exist
    loginIn.classList.remove('none')

    // add classes
    loginUp.classList.toggle('none')
})

