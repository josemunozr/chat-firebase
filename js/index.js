;(function () {
  
  const config = {
    apiKey: "AIzaSyBOeBEHgqv0rzv65uj80C0KSJrwj5kz3AA",
    authDomain: "chat-realtime-794a8.firebaseapp.com",
    databaseURL: "https://chat-realtime-794a8.firebaseio.com",
    storageBucket: "chat-realtime-794a8.appspot.com",
  }

  firebase.initializeApp(config)

  const $btnLoginGoogle =  $("#loginGoogle")

  $btnLoginGoogle.on('click', () => {
    var provider = new firebase.auth.GoogleAuthProvider()

    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        let user = result.user.displayName
        $("#user").html(user)
      })
      .catch((error) => {
        console.log(error)
      })
  })  

})()