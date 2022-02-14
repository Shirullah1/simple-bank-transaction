document.getElementById('login-button').addEventListener('click',function(){
  const userField = document.getElementById('user-email');
  const userEmail = userField.value;
  const passwordField = document.getElementById('user-password');
  const userPassword = passwordField.value;
  if (userEmail =='shirullah@gmail.com' && userPassword =='secret'){
     window.location.href ='banking.html';
  }
})