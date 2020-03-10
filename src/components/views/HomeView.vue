<template>
  <div class="view-class">
    <b-row align-h="center">
      <b-card
        bg-variant="info"
        text-variant="white"
        title="SpaceAG Frontend Challenge"
        class="text-center"
      ></b-card>
    </b-row>
    <b-row align-h="end">
      <SaveButton />
    </b-row>
    <b-row class="map-container" align-v="center" align-h="center">
      <Home />
    </b-row>
  </div>
</template>

<script>
import Home from "../Home.vue";
import SaveButton from "../SaveButton.vue";
export default {
  name: "HomeView",
  components: {
    Home,
    SaveButton
  }
};
</script>
