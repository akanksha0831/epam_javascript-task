function formValidation()
{
var umail = document.regform.uname;
var passid = document.regform.psw;
var mob = document.regform.mobile;
var dd = document.regform.dob;
if(usermail_validation(umail))
{
if(passid_validation(passid,7,12))
{
if(mobile_validation(mob))
{

}
}
}
return false;
}
function usermail_validation(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert('You have entered an invalid email address!');
return false;
}
}
function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert('Password should not be empty / length be between '+mx+' to '+my);
return false;
}
return true;
}
function mobile_validation(mobno)
{ 
  var phoneno = /^\d{10}$/;
  if(mobno.value.match(phoneno))
  {
      alert('form successfully submitted');
      window.location.reload();
      return true;
  }
  else
  {
      alert('Not a valid phone number');
      return false;
  }
}