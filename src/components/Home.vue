<template>
  <div id="app" class="header-body-container">
    <header-component></header-component>
    <div class="body-content">
      <section class="left-column">
        <img src="@/assets/LogoGor.png" alt="Logo" class="img-logo" />
      </section>
      <section class="right-column">
        <div class="text-container">
          <h1>We value <span class="auto-typing"></span></h1>
          <p>
            Gorilla Wealth is a platform dedicated to raising awareness and
            providing information about the world of ESG data (Environmental,
            Social, Governance). With a keen eye on the world we'll be living in
            tomorrow, responsible investment is emphasized to help us steer in
            the right direction.
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
  transition: transform 1s;
}

.img-logo:hover {
  transform: scale(1.1);
}

.right-column {
  flex: 2;
  padding: 20px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text-container {
  text-align: center;
  margin-bottom: 20px;
}

.button-container {
  margin-top: 0px;
  text-align: center;
}

h1 {
  font-size: 36px;
  color: #fff;
}

p {
  font-size: 18px;
  line-height: 1.6;
  color: #ccc;
}

.login-component button {
  padding: 15px 30px;
  font-size: 20px;
  background-color: #8c7054;
  border: none;
  color: #fff;
  border-radius: 5px;
}

.login-component button:hover {
  background-color: #eebd50;
}

.auto-typing {
  color: #eebd50;
}
</style>
