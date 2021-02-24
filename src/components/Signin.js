import React from 'react';
import firebase from 'firebase/app';

export default function Signin(){

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
      console.log("Succesfully signed up!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
      firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
        console.log("Successfully signed in!");
      }).catch(function(error) {
        console.log(error.message);
      });
  }

  // function setPersistenceSession(event) {
  //   var email = event.target.signinEmail.value;
  //   var password = event.target.signinPassword.value;
  //   firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  //     .then(() => {
  //       return firebase.auth().signInWithEmailAndPassword(email, password);
  //     })
  //     .catch((error) => {
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //     });
  // }
  
  
  function doSignOut() {
    firebase.auth().signOut().then(function () {
      console.log('Succesfully signed out!');
    }).catch(function(error) {
      console.log(error.message);
    })
  }


 

  return (
    <React.Fragment>
      <h1>Sign Up</h1>
      <form onSubmit={doSignUp}>
        <input
          type='text'
          name='email'
          placeholder='email' />
        <input
          type='password'
          name='password'
          placeholder='Password' />
        <button type='submit'>Sign Up</button>
      </form>

      <h1>Sign In</h1>
      {/* <form onSubmit={setPersistenceSession}> */}
      <form onSubmit={doSignIn}>
        <input
          type='text'
          name='signinEmail'
          placeholder='email' />
        <input
          type='password'
          name='signinPassword'
          placeholder='Password' />
        <button type='submit'>Sign In</button>
      </form>

      <h1>Sign Out</h1>
      <button onClick={doSignOut}>Sign out</button>
    </React.Fragment>
  );
}