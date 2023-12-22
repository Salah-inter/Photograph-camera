const wreapper = document.querySlector('.wreapper');
const loginLink = document.querySlector('.login-link');
const registerLink = document.querySlector('.register-link');

registerLink.addEvetListener('click', () => {
    wreapper.classList.add('active');
});

loginLink.addEvetListener('click', () => {
    wreapper.classList.remove('active');
});