const firebaseConfig = {
    apiKey: "AIzaSyD9fjApiMFy5nNQ8JVJftIqqaRy_ADxV_E",
    authDomain: "contactform-8da8f.firebaseapp.com",
    databaseURL: "https://contactform-8da8f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "contactform-8da8f",
    storageBucket: "contactform-8da8f.appspot.com",
    messagingSenderId: "868104764172",
    appId: "1:868104764172:web:1dd45252268c3e1b462729"
  };
  
 
  firebase.initializeApp(firebaseConfig);
  
  
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
   
    document.querySelector(".alert").style.display = "block";
  
    
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
   
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };