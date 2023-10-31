<template>
  <div class="crypto-prices-container">
    <header-component></header-component>
    <div class="crypto-list">
      <img src="@/assets/LogoGor.png" alt="Logo" class="img-logo" />
      <h1>Cryptocurrency Prices with ESG</h1>
      <ul>
        <li
          v-for="(crypto, symbol) in cryptocurrencies"
          :key="symbol"
          class="crypto-item"
        >
          <div class="crypto-name">{{ crypto.name }} ({{ symbol }})</div>
          <div class="crypto-price">Price: ${{ crypto.price }}</div>
          <div class="crypto-esg">
            <div class="esg-score">
              <span class="score-label">Environmental:</span>
              {{ crypto.esg.environmental }}
            </div>
            <div class="esg-score">
              <span class="score-label">Social:</span> {{ crypto.esg.social }}
            </div>
            <div class="esg-score">
              <span class="score-label">Governance:</span>
              {{ crypto.esg.governance }}
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
  name: "CryptoPrices",
  components: {
    "header-component": HeaderComponent,
  },
  data() {
    return {
      cryptocurrencies: {
        BTC: {
          name: "Bitcoin",
          price: null,
          esg: {
            environmental: 80,
            social: 70,
            governance: 90,
          },
        },
        ETH: {
          name: "Ethereum",
          price: null,
          esg: {
            environmental: 85,
            social: 75,
            governance: 88,
          },
        },
        LTC: {
          name: "Litecoin",
          price: null,
          esg: {
            environmental: 75,
            social: 65,
            governance: 92,
          },
        },
        XRP: {
          name: "Ripple",
          price: null,
          esg: {
            environmental: 70,
            social: 80,
            governance: 85,
          },
        },
        ADA: {
          name: "Cardano",
          price: null,
          esg: {
            environmental: 90,
            social: 85,
            governance: 78,
          },
        },
        DOT: {
          name: "Polkadot",
          price: null,
          esg: {
            environmental: 85,
            social: 70,
            governance: 88,
          },
        },
        SOL: {
          name: "Solana",
          price: null,
          esg: {
            environmental: 88,
            social: 80,
            governance: 90,
          },
        },
        BNB: {
          name: "Binance Coin",
          price: null,
          esg: {
            environmental: 78,
            social: 88,
            governance: 82,
          },
        },
        XMR: {
          name: "Monero",
          price: null,
          esg: {
            environmental: 70,
            social: 78,
            governance: 75,
          },
        },
        XTZ: {
          name: "Tezos",
          price: null,
          esg: {
            environmental: 74,
            social: 82,
            governance: 79,
          },
        },
        VET: {
          name: "VeChain",
          price: null,
          esg: {
            environmental: 76,
            social: 80,
            governance: 77,
          },
        },
        AAVE: {
          name: "Aave",
          price: null,
          esg: {
            environmental: 77,
            social: 85,
            governance: 82,
          },
        },
        MATIC: {
          name: "Polygon",
          price: null,
          esg: {
            environmental: 78,
            social: 86,
            governance: 80,
          },
        },

        DOGE: {
          name: "Dogecoin",
          price: null,
          esg: {
            environmental: 72,
            social: 81,
            governance: 74,
          },
        },
      },
    };
  },
  mounted() {
    this.fetchCryptocurrencyPrices();
  },
  methods: {
    async fetchCryptocurrencyPrices() {
      try {
        const response = await this.$axios.get(
          "https://min-api.cryptocompare.com/data/pricemulti",
          {
            params: {
              fsyms:
                "BTC,ETH,LTC,XRP,ADA,DOT,SOL,BNB,XMR,XTZ,VET,AAVE,MATIC,DOGE", // Add more symbols
              tsyms: "USD",
            },
          }
        );

        for (const symbol in this.cryptocurrencies) {
          if (response.data[symbol]) {
            this.cryptocurrencies[symbol].price = response.data[symbol].USD;
          }
        }
      } catch (error) {
        console.error("Error fetching cryptocurrency prices:", error);
      }
    },
  },
};
</script>

<style scoped>
.crypto-prices-container {
  text-align: center;
  padding: 20px;
  background: linear-gradient(to right, #4e4d4d, #1f1f1f);
}

.crypto-list {
  max-width: 800px;
  margin: 0 auto;
}

.crypto-item {
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px 0;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.crypto-item:hover {
  transform: scale(1.05);
}

.crypto-name {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
}

.crypto-price {
  font-size: 16px;
}

.crypto-esg {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.esg-score {
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  margin-top: 2px;
}

.score-label {
  font-weight: bold;
}

.img-logo {
  max-width: 40%;
  max-height: auto;
  margin-left: 0%;
  transition: transform 1s;
}

h1 {
  color: #eebd50;
  margin-bottom: 10px;
}

.img-logo:hover {
  transform: scale(1.1);
}
</style>
