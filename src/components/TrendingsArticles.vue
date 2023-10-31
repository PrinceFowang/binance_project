<template>
  <div class="crypto-news-container">
    <header-component></header-component>
    <div class="news-list">
      <img src="@/assets/LogoGor.png" alt="Logo" class="img-logo" />
      <h1>Cryptocurrency News</h1>
      <ul>
        <li v-for="article in news" :key="article.id" class="news-item">
          <div class="news-title">
            <a :href="article.url" target="_blank">{{ article.title }}</a>
          </div>
          <div class="news-description">
            {{ article.body }}
          </div>
          <div class="news-info">
            <div class="news-source">
              Source: {{ article.source ? article.source.name : "Unknown" }}
            </div>
            <div class="news-published">
              Published: {{ formatDate(article.published_on * 1000) }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderUser.vue";

export default {
  name: "TrendingsNews",
  components: {
    "header-component": HeaderComponent,
  },
  data() {
    return {
      news: [],
    };
  },
  mounted() {
    this.fetchCryptocurrencyNews();
  },
  methods: {
    async fetchCryptocurrencyNews() {
      try {
        const response = await this.$axios.get(
          "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
        );

        this.news = response.data.Data;
      } catch (error) {
        console.error("Error fetching cryptocurrency news:", error);
      }
    },
    formatDate(timestamp) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(timestamp).toLocaleDateString(undefined, options);
    },
  },
};
</script>

<style scoped>
.crypto-news-container {
  text-align: center;
  padding: 20px;
  background: linear-gradient(to right, #4e4d4d, #1f1f1f);
}

.news-list {
  max-width: 800px;
  margin: 0 auto;
}

.news-item {
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px 0;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.news-item:hover {
  transform: scale(1.05);
}

.news-title a {
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

.news-description {
  font-size: 16px;
}

.news-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  font-size: 14px;
}

.news-source {
  color: #007bff;
}

.news-published {
  color: #6c757d;
}

.img-logo {
  max-width: 40%;
  max-height: auto;
  margin-left: 0%;
  transition: transform 1s;
}

.img-logo:hover {
  transform: scale(1.1);
}

h1 {
  color: #eebd50;
  margin-bottom: 10px;
}
</style>
