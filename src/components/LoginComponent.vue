<template>
  <div>
    <button class="btn btn-outline-success MicrosoftButton" @click="signIn">
      Connect
    </button>
  </div>
</template>

<script>
import router from "@/router";
import { signInAndGetUser } from "@/lib/microsoftGraph.js";
export default {
  data() {
    return {
      user: null,
    };
  },
  methods: {
    async signIn() {
      try {
        const authResult = await signInAndGetUser();
        console.log("Authentication successful:", authResult.name);

        // Commit the setUser mutation to update the user data
        this.$store.commit("setUser", authResult);

        // Redirect to the user profile page after successful sign-in
        router.push({ name: "Beginners" });
      } catch (error) {
        console.error("Connection error:", error);
      }
    },
  },
};
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.MicrosoftButton {
  border-color: #eebd50;
  color: #eebd50;
  width: 100%;
}

.MicrosoftButton:hover {
  background-color: #eebd50;
  border-color: #eebd50;
}
</style>
