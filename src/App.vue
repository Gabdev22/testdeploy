<template>
  <b-container>
    <HomeView />
  </b-container>
</template>

<script>
import HomeView from "./components/views/HomeView.vue";

export default {
  name: "App",
  components: {
    HomeView
  }
};
</script>

<style lang="scss">
.container {
  height: 100vh;
}

.row {
  margin-top: 1em;
  margin-bottom: 1em;
}

.map-container {
  height: 60%;
}

.view-class {
  height: inherit;
}

.maps {
  height: 100%;
}
</style>
