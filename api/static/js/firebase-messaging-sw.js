importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyD87ghip_I5nVbunHevOgJBbZMqZKBXu0w",
    authDomain: "msgprj-e4500.firebaseapp.com",
    projectId: "msgprj-e4500",
    storageBucket: "msgprj-e4500.appspot.com",
    messagingSenderId: "384308660825",
    appId: "1:384308660825:web:4efb324cfcadd107d0bf48",
    measurementId: "G-16VVPH5SMN"
});

const messaging = firebase.messaging();

// Handle background messages
messaging.setBackgroundMessageHandler((payload) => {
    console.log('Background message received:', payload);

    const { title, body } = payload.notification;

    // Display notification
    return self.registration.showNotification(title, { body });
});