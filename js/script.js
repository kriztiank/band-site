let a;
let b;

function validate() {
  a = document.getElementById('name_id').value;
  b = document.getElementById('pass_id').value;

  //if the text field is empty or less than 2 characters, display warning
  if (a === '' || a.length < 2) {
    alert('Name must be filled out');
    document.getElementById('name_id').focus();
    return false;
  }

  //if the text field is empty or less than 2 characters, display warning
  if (b === '' || b.length < 2) {
    alert('Password must contain uppercase, lowercase letters and a number');
    document.getElementById('pass_id').focus();
    return false;
  }

  // function is_password_Key nederst på siden tjekker efter et gyldigt password og kører nedenstående if true
  if (is_password_key() === true) {
    location.href = 'landingpage.html';
    alert(`
        Name: ${a} 
        Pass: ${b} 
        Your information has been submitted`);
  }
}

function is_password_key() {
  if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/.test(pass_id.value)) {
    return true;
  }
  alert('Password must contain uppercase, lowercase letters and a number');
  return false;
}
