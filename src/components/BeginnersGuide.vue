<template>
  <div class="BeginnersG">
    <header-component></header-component>
    <div class="beginners-guide">
      <img src="@/assets/LogoGor.png" alt="Logo" class="img-logo" />
      <h1 class="guide-title">Beginner's Guide to Cryptocurrencies</h1>

      <!-- Section 1: What are Cryptocurrencies? -->
      <section class="guide-section">
        <h2>What are Cryptocurrencies?</h2>
        <p>
          Cryptocurrencies are digital or virtual currencies that use
          cryptography for security and operate independently of a central
          authority, such as a government or a central bank. They are designed
          to facilitate secure, peer-to-peer transactions and are typically
          based on a technology called blockchain.
        </p>
      </section>

      <!-- Section 2: How to Buy Cryptocurrencies -->
      <section class="guide-section">
        <h2>How to Buy Cryptocurrencies?</h2>
        <p>
          There are various ways to buy cryptocurrencies, including
          cryptocurrency exchanges (centralized and decentralized), peer-to-peer
          platforms, and Bitcoin ATMs, each offering unique advantages and
          considerations. Cryptocurrency exchanges provide convenience,
          liquidity, and a wide range of options but often require identity
          verification; peer-to-peer platforms allow direct transactions with
          increased privacy and multiple payment methods but require caution to
          avoid scams; Bitcoin ATMs offer in-person purchases with cash but may
          have higher fees and limited cryptocurrency choices; and brokers, gift
          cards, mining, and earning opportunities provide alternative methods
          to acquire cryptocurrencies based on individual preferences and needs.
        </p>
      </section>

      <!-- Section 3: Cryptocurrency Wallets -->
      <section class="guide-section">
        <h2>Cryptocurrency Wallets</h2>
        <p>
          Cryptocurrency wallets are essential tools for storing and managing
          your digital assets. They serve as secure digital containers for your
          cryptocurrencies, enabling you to send, receive, and store them while
          maintaining control of your private keys, which are crucial for the
          security and ownership of your assets. There are two primary types of
          cryptocurrency wallets: hot wallets (online) and cold wallets
          (offline). Hot wallets, like software or mobile wallets, are
          accessible for easy transactions but may be vulnerable to online
          threats. Cold wallets, such as hardware or paper wallets, provide
          enhanced security by keeping your keys offline but are less convenient
          for frequent transactions. It's important to choose a wallet that
          aligns with your usage and security preferences and to back up your
          keys to prevent the risk of losing access to your funds. Additionally,
          practicing good wallet security measures, such as using strong
          passwords and enabling two-factor authentication, is essential to
          safeguard your digital assets.
        </p>
      </section>

      <!-- Section 4: ESG Data -->
      <section class="guide-section">
        <h2>What is ESG Data?</h2>
        <p>
          ESG data, an acronym for Environmental, Social, and Governance data,
          encompasses information related to a company's sustainability and
          ethical practices. The "E" component focuses on environmental factors
          like carbon emissions and resource usage, the "S" component pertains
          to social aspects such as labor relations and community engagement,
          while the "G" component addresses governance, including board
          composition and transparency. ESG data is critical for investors
          evaluating the impact of their investments and for companies looking
          to enhance their sustainability and ethical practices, thereby
          appealing to responsible consumers and investors. Moreover, regulators
          may require ESG disclosures to ensure transparency and ethical
          conduct, ultimately contributing to a more sustainable and socially
          conscious business landscape.
        </p>
      </section>

      <!-- Section 5: Responsible Investment -->
      <section class="guide-section">
        <h2>What is Responsible Investment?</h2>
        <p>
          Responsible investment, often referred to as socially responsible
          investing (SRI) or ethical investing, is an approach to investing that
          considers not only the potential financial returns of an investment
          but also the environmental, social, and governance (ESG) factors
          associated with it. Responsible investors aim to align their
          investment choices with their values and beliefs, seeking to support
          companies and projects that demonstrate responsible and sustainable
          business practices, environmental stewardship, social responsibility,
          and strong governance. By doing so, responsible investment promotes
          positive societal and environmental impacts while still striving for
          financial returns, reflecting a growing global awareness of the
          importance of sustainable and ethical business conduct.
        </p>
      </section>

      <!-- Section 6: Contact Information -->
      <section class="guide-section">
        <h2>Contact Information</h2>
        <p>We're here to help! Contact us with your questions or feedback.</p>
        <p>Email: example@email.com</p>
      </section>

      <!-- Section 7: Disclaimer -->
      <section class="guide-section">
        <h2>Disclaimer</h2>
        <p>
          This content is for informational purposes only. Cryptocurrency
          investments involve risks, and you should do your research.
        </p>
      </section>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderUser.vue";

export default {
  name: "BeginnersGuide",
  components: {
    "header-component": HeaderComponent,
  },
};
</script>

<style scoped>
/* Add your CSS styling here */

.beginners-guide {
  padding: 20px;
  /* Background gradient */
  color: #ffffff; /* Text color */
}

.guide-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #eebd50; /* Title text color */
  text-align: center;
  transition: transform 0.5s;
}

.guide-title:hover {
  transform: scale(0.9); /* Scale the title on hover */
}
.guide-section {
  margin-bottom: 40px;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #eebd50;
  transition: transform 0.5s; /* Section title text color */
}

h2:hover {
  transform: scale(0.9); /* Scale section titles on hover */
}

p {
  font-size: 18px;
  line-height: 1.5;
  color: #ffffff; /* Text color */
}

.BeginnersG {
  padding: 20px;
  background: linear-gradient(to right, #4e4d4d, #1f1f1f);
}
.img-logo {
  max-width: 25%;
  max-height: auto;
  margin-left: 37.5%;
  transition: transform 1s;
}

.img-logo:hover {
  transform: scale(1.1);
}
</style>
