const firebaseConfig = {
    apiKey: "AIzaSyDTWlE90wsML27OaUkexKMMN3OMNDE5qUE",
    authDomain: "learning-1e0cd.firebaseapp.com",
    projectId: "learning-1e0cd",
    storageBucket: "learning-1e0cd.appspot.com",
    messagingSenderId: "828167454788",
    appId: "1:828167454788:web:36f8cb19e7c5cbf02d3c11",
    measurementId: "G-0NYY3H457D"
  };
  firebase.initializeApp(firebaseConfig)

  function signup(event){
    event.preventDefault()
    
    let email=document.querySelector("#email").value
    let password=document.querySelector("#password").value

    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    alert("signup successful")
    // // Signed in 
    // var user = userCredential.user;
    // // ...
  })
  .catch((error) => {
    console.log(error);
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // // ..
  });
  }




  function login(event){
    event.preventDefault()
    
    let email=document.querySelector("#emailog").value
    let password=document.querySelector("#passwordlog").value

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("login successful")
    })
    .catch((error) => {
      console.log(error);
    });
  }