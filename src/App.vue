<template>
  <div id="app">
    <Header />
    <div >
      <router-view :key="key"></router-view>
    </div>
      <Footer />
  </div>
</template>

<script>
import Header from './components/header.vue';
import Footer from './components/foot.vue';
import teamlist from './views/teamlist.vue';

export default {
  name: 'App',
  components: {
    teamlist,
    Header,
    Footer,
  },
  computed: {
    key() {
      return this.$route.name !== undefined
        ? this.$route.name + +new Date()
        : this.$route + +new Date();
    },
  },
};
</script>

<style>
body{margin: 0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
}
</style>
