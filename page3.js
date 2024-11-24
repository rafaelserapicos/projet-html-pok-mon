// Mode sombre
document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });
  
  // Formulaire
  document.getElementById('formulaire').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let password2 = document.getElementById('password2');
    let pseudo = document.getElementById('pseudo');
    let isValid = true;
    let errorList = document.getElementById('error-list');
    

    // Validation email
    if (!/\S+@\S+\.\S+/.test(email.value)) {
      isValid = false;
      email.classList.add('error');
      errorList.innerHTML += '<li>Adresse email invalide.</li>';
    } else {
      email.classList.replace('error', 'success');
    }
  
    // Validation mot de passe
    if (password.value.length < 8) {
      isValid = false;
      password.classList.add('error');
      errorList.innerHTML += '<li>Mot de passe trop court (min. 8 caractères).</li>';
    } else {
      password.classList.replace('error', 'success');
    }
  
    // ValiDation pseudo
    if (pseudo.value.length < 6) {
      isValid = false;
      pseudo.classList.add('error');
      errorList.innerHTML += '<li>Le pseudo doit comporter au moins 6 caractères.</li>';
    } else {
      pseudo.classList.replace('error', 'success');
    }
  
    // Validation confirmation mot de passe
    if (password2.value !== password.value) {
      isValid = false;
      password2.classList.add('error');
      errorList.innerHTML += '<li>Les mots de passe ne correspondent pas.</li>';
    } else {
      password2.classList.replace('error', 'success');
    }
  
    // AffiCHage du message
    if (isValid) {
      document.querySelector('.message-success').style.display = 'block';
    } else {
      document.querySelector('.message-error').style.display = 'block';
    }
  });
  

// Tabs / Onglets
document.querySelectorAll('.tab').forEach(t => t.onclick = function() {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('tab-active'));
    this.classList.add('tab-active');
  
    document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));
    document.querySelector('.' + this.classList[1]).classList.add('active');
  });