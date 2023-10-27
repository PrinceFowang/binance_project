<template>
  <div class="about-us">
    <header-component></header-component>
    <transition name="fade" mode="out-in">
      <div class="about-card card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="/path/to/your/image.jpg"
              class="img-fluid rounded-start"
              alt="Company Image"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">About Our Company</h5>
              <p class="card-text">
                Welcome to Gorilla Wealth, your trusted partner for financial
                services and wealth management solutions.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import headerComponent from "/src/components/headerComponent.vue";

export default {
  name: "AboutUs",
  components: {
    headerComponent,
  },
};
</script>

<style scoped>
.about-us {
  display: flex;
  height: 100vh;
  background: linear-gradient(to right, #4e4d4d, #1f1f1f);
}

.about-card {
  max-width: 540px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease; /* Add a smooth transition effect */
}

.about-card:hover {
  transform: scale(1.05); /* Scale up the card on hover */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s; /* Add a fade-in/out transition effect */
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
