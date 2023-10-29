<template>
  <header-component></header-component>
  <div class="about-us">
    <div>
      <h1>Our team</h1>
      <p>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </p>
    </div>
    <div class="centered-cards">
      <div class="card mb-2 cart" style="max-width: 400px; margin: 10px">
        <div class="card-content">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="@/assets/Prince.jpg"
                class="img-fluid rounded-start"
                alt="PrincePicture"
                style="max-width: 300%; height: auto"
              />
            </div>
            <div class="col-md-15">
              <div class="card-body">
                <h5 class="card-title">Prince FOWANG</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <a
                  href="https://www.linkedin.com/in/prince-fowang-4a34a2251/"
                  target="_blank"
                >
                  <img
                    src="@/assets/LinkedIn-logo.webp"
                    alt="LinkedIn"
                    style="max-width: 15%; height: auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-2 cart" style="max-width: 400px; margin: 10px">
        <div class="card-content">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="@/assets/Pierre.jpg"
                class="img-fluid rounded-start"
                alt="PrincePicture"
                style="max-width: 300%; height: auto"
              />
            </div>
            <div class="col-md-15">
              <div class="card-body">
                <h5 class="card-title">Pierre BENJAMIN</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <a
                  href="https://www.linkedin.com/in/nathana%C3%ABl-benjamin-500699136/details/education/"
                  target="_blank"
                >
                  <img
                    src="@/assets/LinkedIn-logo.webp"
                    alt="LinkedIn"
                    style="max-width: 15%; height: auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  align-items: center; /* Vertically center the cards */
  justify-content: center; /* Horizontally center the cards */
  height: 100vh;
  background: linear-gradient(to right, #4e4d4d, #1f1f1f);
}
.centered-cards {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  margin-top: 20px;
}

.cart {
  border-color: #1f1f1f;
}

h1 {
  color: #eebd50;
  position: relative;
  right: 15%;
  top: -30%;
}

.card-content {
  background: rgba(78, 77, 77, 0.9); /* Slightly lighter background color */
  padding: 20px;
  border-radius: 10px;
  transition: background 0.3s; /* Smooth transition for background color */
}

.card-title {
  color: #eebd50;
}

.card-text {
  color: white;
}

.card-content:hover {
  background: rgba(78, 77, 77, 0.7); /* Lighter background on hover */
}
</style>
