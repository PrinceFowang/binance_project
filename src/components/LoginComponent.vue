<template>
  <div>
    <button class="btn btn-outline-success MicrosoftButton" @click="signIn">
      Connect
    </button>
  </div>
</template>

<script>
import { signInAndGetUser } from "@/lib/microsoftGraph.js";
export default {
  methods: {
    async signIn() {
      try {
        const authResult = await signInAndGetUser();
        console.log("3 Authentification réussie :", authResult.name);
      } catch (error) {
        console.error("Erreur de connexion :", error);
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
