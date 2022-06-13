let myform = document.loginform;
let btn = myform.btnlogin;
let username = myform.txtusername;
let password = myform.txtpassword;
btn.addEventListener("click", () => {
  let user = username.value;
  let pwd = password.value;
  alert(`Username:${user}\nPassword:${pwd}`);
});
