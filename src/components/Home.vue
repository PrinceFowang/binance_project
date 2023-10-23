<template>
  <div>
    <h1>Welcome, {{ user.name }}</h1>
    <!-- Other user information here -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    axios
      .get("/api/user")
      .then((response) => {
        this.user = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
