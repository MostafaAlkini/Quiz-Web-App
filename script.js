const loginTab = document.getElementById('login');
const registerTab = document.getElementById('register');
const loginForm = document.getElementById('loginContainer');
const registerForm = document.getElementById('registerContainer');
const submitRegister = document.getElementById('submitRegister');
const loginFormSubmit = document.getElementById('loginContainer');


loginTab.addEventListener('click', () => {
    loginTab.classList.add('show');
    registerTab.classList.remove('show');
    loginForm.classList.add('show');
    registerForm.classList.remove('show');
});

registerTab.addEventListener('click', () => {
    registerTab.classList.add('show');
    loginTab.classList.remove('show');
    registerForm.classList.add('show');
    loginForm.classList.remove('show');
});

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    saveData();
});
loginFormSubmit.addEventListener('submit', (event) => {
    event.preventDefault();
    login()

});
function saveData() {
    const email = document
        .getElementById('emailRegister')
        .value;
    localStorage
        .setItem('email', email);

    console.log(localStorage.getItem("email"))

    const password = document
        .getElementById('passwordRegister')
        .value;
    localStorage
        .setItem('password', password);
    console.log(localStorage.getItem("password"))

}
function login() {
    const loginEmail = document.getElementById('emailLogin').value;
    const loginPassword = document.getElementById('passwordLogin').value;

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    const adminEmail = "mostafa@admin.com";
    const adminPassword = "Mostafa123";

    if (loginEmail === adminEmail && loginPassword === adminPassword) {
        window.location.href = 'http://127.0.0.1:3000/dashboard.html';
    } else if (loginEmail === storedEmail && loginPassword === storedPassword) {
        window.location.href = 'http://127.0.0.1:3000/home.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
}
