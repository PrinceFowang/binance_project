<template>
  <header-component></header-component>
  <div class="about-us">
    <div class="intro-div">
      <img src="@/assets/LogoGor.png" alt="Logo" class="img-logo" />
      <h1>Our team</h1>
      <p class="intro-text">
        In essence, Gorilla Wealth is dedicated to promoting the understanding
        and importance of ESG factors in the financial and investment landscape.
        By providing information and insights on these crucial areas
        (environmental impact, social responsibility, and governance practices)
        we aim to encourage responsible decision-making and investments that
        align with a sustainable and socially conscious future.
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

.cart {
  border-color: #1f1f1f;
  transition: transform 0.3s; /* Ajoute une transition pour le transform */
}

.img-logo {
  max-width: 100%;
  max-height: auto;
  transition: transform 1s;
}

.img-logo:hover {
  transform: scale(1.1);
}

.intro-text {
  color: aliceblue;
  text-align: center;
}

.intro-div {
  max-width: 40%;
  margin-right: 2%;
  margin-left: 2%;
  padding-right: 2%;
  padding-left: 2%;
}

.cart:hover {
  transform: translateY(-5px); /* Déplace la carte vers le haut au survol */
}

h1 {
  color: #eebd50;
  position: relative;
  top: -30%;
  text-align: center;
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
