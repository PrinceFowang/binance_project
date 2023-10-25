<template>
  <div class="header-body-container">
    <header-component></header-component>
    <div class="body-content">
      <section class="left-column">
        <img src="@/assets/LogoGor.png" alt="Logo" class="img-logo" />
      </section>
      <section class="right-column">
        <div class="text-container">
          <h1>We value <span class="auto-typing"></span></h1>
          <p>
            Cognitis enim pilatorum caesorumque funeribus nemo deinde ad has
            stationes appulit navem, sed ut Scironis praerupta letalia
            declinantes litoribus Cypriis contigui navigabant, quae Isauriae
            scopulis sunt controversa.
          </p>
        </div>
        <div class="button-container">
          <login-component></login-component>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "/src/components/headerComponent.vue";
import LoginComponent from "/src/components/LoginComponent.vue";
import Typed from "typed.js"; // Import the Typed.js library

export default {
  name: "App",
  components: {
    "header-component": HeaderComponent,
    "login-component": LoginComponent,
  },
  mounted() {
    // eslint-disable-next-line no-unused-vars
    let typed = new Typed(".auto-typing", {
      strings: ["finance", "the environment", "ESG", "gorillas"],
      typeSpeed: 100,
      backSpeed: 100, // It should be 'backSpeed' instead of 'backspeed'
      loop: true,
      fadeOut: true,
      fadeOutClass: "typed-fade-out",
      fadeOutDelay: 500,
    });
  },
};
</script>

<style scoped>
/* Apply a smoother background gradient to both columns */
.body-content {
  display: flex;
  height: 100vh;
  background: linear-gradient(to right, #4e4d4d, #1f1f1f);
}

.left-column {
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-logo {
  max-width: 100%;
  max-height: 100%;
}

.img-logo:hover {
  height: 100ch;
  width: 70ch;
}

.right-column {
  flex: 2;
  padding: 20px;
  background-color: transparent; /* No background color for the right column */
  display: flex;
  flex-direction: column; /* Set column layout for text and button */
  justify-content: center;
  align-items: center;
}

.text-container {
  text-align: center;
  margin-bottom: 20px; /* Add margin between text and button */
}

.button-container {
  margin-top: 0px; /* Push the button to the bottom */
  text-align: center;
}

/* Apply smoother text styles */
h1 {
  font-size: 36px; /* Increase the font size for the heading */
  color: #fff;
}

p {
  font-size: 18px; /* Increase the font size for the paragraph */
  line-height: 1.6;
  color: #ccc; /* Use a softer color for the text */
}

/* Style the button */
.login-component button {
  padding: 15px 30px; /* Adjust button padding for a larger size */
  font-size: 20px; /* Increase button font size */
  background-color: #8c7054; /* Button background color */
  border: none;
  color: #fff;
  border-radius: 5px;
}

.login-component button:hover {
  background-color: #eebd50; /* Button color on hover */
}
.auto-typing {
  color: #eebd50;
}
</style>
