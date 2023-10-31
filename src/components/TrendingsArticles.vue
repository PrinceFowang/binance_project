<template>
  <div class="crypto-news-container">
    <header-component></header-component>
    <div class="news-list">
      <h1>Cryptocurrency News</h1>
      <ul>
        <li v-for="article in news" :key="article.id" class="news-item">
          <div class="news-title">
            <a :href="article.url" target="_blank">{{ article.title }}</a>
          </div>
          <div class="news-description">
            {{ article.description }}
          </div>
          <div class="news-source">Source: {{ article.source.name }}</div>
          <div class="news-published">
            Published: {{ formatDate(article.publishedAt) }}
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
        // Replace this URL with the actual cryptocurrency news API endpoint.
        const response = await this.$axios.get(
          "https://your-crypto-news-api.com/news"
        );

        this.news = response.data.articles;
      } catch (error) {
        console.error("Error fetching cryptocurrency news:", error);
      }
    },
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString(undefined, options);
    },
  },
};
</script>

<style scoped>
.crypto-news-container {
  text-align: center;
  padding: 20px;
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

.news-source {
  font-size: 14px;
  margin-top: 5px;
}

.news-published {
  font-size: 14px;
  margin-top: 5px;
}
</style>
