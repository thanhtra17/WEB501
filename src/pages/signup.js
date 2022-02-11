import { signup } from "../api/users";
const SignUp = {
  render(){
    return /*html*/`
        <form id="formSignup">
            <input type="text" placeholder="username" id="username" /> <br />
            <input type="email" placeholder="email" id="email" /> <br />
            <input type="password" placeholder="password" id="password" /> <br />
            <button class="border border-black">Đăng ký</button>
        </form>
    `
},
afterRender(){
    const formSignup = document.querySelector('#formSignup');
    formSignup.addEventListener('submit', function(e){
        e.preventDefault();
        signup({
            username: document.querySelector('#username').value,
            email: document.querySelector('#email').value,
            password: document.querySelector('#password').value
        })
    });
}
}
export default SignUp;