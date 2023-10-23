<template>
  <div class="d-grid gap-2 col-6 mx-auto">
    <button @click="loginWithMicrosoft" class="btn btn-primary" type="button">
      Login with Microsoft
    </button>
    <button @click="loginWithMicrosoft" class="btn btn-primary" type="button">
      Login with Google
    </button>
  </div>
</template>

<script>
import firebase from "firebase";
import firebaseConfig from "@/firebaseConfig";

// Initialize Firebase with the config
firebase.initializeApp(firebaseConfig);

export default {
  methods: {
    async loginWithMicrosoft() {
      const provider = new firebase.auth.OAuthProvider("microsoft.com");
      try {
        await firebase.auth().signInWithPopup(provider);
        // User is now logged in with Microsoft
      } catch (error) {
        console.error(error);
      }
    },

    async loginWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      try {
        await firebase.auth().signInWithPopup(provider);
        // User is now logged in with Google
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
