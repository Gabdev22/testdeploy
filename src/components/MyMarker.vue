<template>
  <div>
    <l-circle :lat-lng="latlng" :radius="radius" :color="'red'" />
    <l-marker :lat-lng="latlng" :icon="icon">
      <l-popup>
        <MyForm :formInfo="formInfo" />
      </l-popup>
    </l-marker>
  </div>
</template>

<script>
import MyForm from "./MyForm";
import { LMarker, LPopup, LCircle } from "vue2-leaflet";
import L from "leaflet";
import markerImage from "../assets/markerImage.png";

export default {
  name: "MyMarker",
  components: {
    LMarker,
    LPopup,
    LCircle,
    MyForm
  },
  data() {
    return {
      icon: L.icon({
        iconUrl: markerImage,
        iconSize: [32, 37],
        iconAnchor: [16, 37],
        popupAnchor: [0, -37]
      })
    };
  },
  props: {
    marker: {
      id: Number,
      position: {
        latitude: Number,
        longitude: Number
      },
      radius: Number,
      numOfSamples: Number
    }
  },
  methods: {},
  computed: {
    radius() {
      return this.marker.radius;
    },
    latlng() {
      const { latitude, longitude } = this.marker.position;
      return [latitude, longitude];
    },
    formInfo() {
      return {
        id: this.marker.id,
        radius: this.marker.radius,
        numOfSamples: this.marker.numOfSamples
      };
    }
  },
  created() {
    console.log("Created!: ", this.marker);
  },
  updated() {
    console.log("Updated!: ", this.marker);
  }
};
</script>
