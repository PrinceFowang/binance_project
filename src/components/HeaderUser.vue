<template>
  <header>
    <nav class="navbar bg-body-tertiary custom-navbar">
      <div class="container-fluid">
        <a class="GOR navbar-brand" href="/Beginners"> GORILLA WEALTH </a>
        <div class="navbar" v-if="userData && userData.name">
          <p><strong>Name:</strong> {{ userData.name }}</p>
        </div>
        <div class="ish">
          <p>
            <a class="rarr nav-link active" aria-current="page" href="/News"
              >Trendings news</a
            >
          </p>
          <p>
            <a class="rarr nav-link" href="/Crypto">Financial datas</a>
          </p>
        </div>
        <router-link
          to="/about"
          class="btn btn-outline-success custom-yellow-btn"
        >
          About us
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import router from "@/router";
export default {
  name: "HeaderUser",
  computed: {
    userData() {
      return this.$store.state.user;
    },
  },
  methods: {
    updateUserCrypto() {
      this.$store.commit("setUser", this.$store.state.user);
      router.push({ name: "Crypto" });
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar {
  --bs-navbar-padding-y: 0rem;
  border-bottom-right-radius: 5%;
  border-bottom-left-radius: 5%;
  transition: background-color 0.5s;
}

.custom-yellow-btn {
  color: #eebd50;
  border-color: #eebd50;
  font-size: medium;
  padding: 5px;
  margin-right: 15px;
}

.custom-yellow-btn:hover {
  background-color: #eebd50;
  color: #ffffff;
  transition: background-color 0.5s, color 0.5s;
}

.ish {
  display: flex;
}

.ish p {
  margin-right: 20px;
}
.container-fluid {
  background-color: #4e4d4d;
  transition: background-color 0.5s;
}

.GOR {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 2rem;
  color: #eebd50;
  display: flex;
  align-items: center;
  transition: color 0.5s;
  margin-left: 15px;
}

.rarr {
  margin-left: 30px;
  transition: margin-left 0.5s;
}

a:hover {
  color: #8c7054;
  transition: color 0.5s;
}
</style>
