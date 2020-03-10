<template>
  <b-button variant="info" @click="showData">Save</b-button>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SaveButton",
  methods: {
    showData() {
      const jsonMarkers = JSON.stringify({ markers: this.markers });
      console.log(jsonMarkers);
    }
  },
  computed: {
    ...mapGetters(["markers"])
  }
};
</script>

<style></style>
