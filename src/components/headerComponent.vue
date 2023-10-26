<template>
  <header>
    <nav class="navbar bg-body-tertiary custom-navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="/"> GORILLA WEALTH </a>
        <button class="btn btn-outline-success custom-yellow-btn" type="submit">
          About us
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
* {
  margin: 0cm;
}

.navbar {
  --bs-navbar-padding-y: 0rem;
  border-bottom-right-radius: 5%;
  border-bottom-left-radius: 5%;
}
.custom-yellow-btn {
  color: #eebd50;
  border-color: #eebd50;
  font-color: #eebd50;
}

.custom-yellow-btn:hover {
  background-color: #eebd50;
  color: #ffffff;
}

.container-fluid {
  background-color: #4e4d4d;
}

a {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: xx-large;
  color: #eebd50;
  display: flex;
  align-items: center;
  padding-left: 2ch;
  transition: color 0.5s; /* Add transition for color change */
}

a:hover {
  color: #8c7054; /* Change the color on hover */
}
</style>
