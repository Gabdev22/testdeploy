<template>
  <b-spinner v-if="loading" variant="info" label="Loading..."></b-spinner>
  <l-map class="maps" :zoom="zoom" :center="center" @click="addMarker" v-else>
    <l-tile-layer :url="url"></l-tile-layer>
    <MyMarker v-for="marker of markers" :key="marker.id" :marker="marker" />
    <l-geo-json :geojson="geojson"></l-geo-json>
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LGeoJson } from "vue2-leaflet";
import { geojsonFeature } from "../geojsonData";
import MyMarker from "./MyMarker";
import { mapGetters, mapActions } from "vuex";
import inside from "point-in-polygon";
import { ADD_COORDINATE } from "../store/mutationTypes";

export default {
  name: "Home",
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
    MyMarker
  },
  data() {
    return {
      loading: true,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 9,
      center: null,
      geojson: null,
      polygon: null
    };
  },
  methods: {
    addMarker({ latlng }) {
      const { lat, lng } = latlng;
      const isInside = inside([lat, lng], this.polygon);
      if (isInside) {
        this.ADD_COORDINATE({
          position: {
            latitude: lat,
            longitude: lng
          }
        });
      }
    },
    ...mapActions([ADD_COORDINATE])
  },
  computed: {
    ...mapGetters(["markers"])
  },
  created() {
    const latlngs = geojsonFeature.geometry.coordinates[0].map(c =>
      [...c].reverse()
    );
    this.geojson = geojsonFeature;
    this.center = geojsonFeature.properties.center;
    this.polygon = latlngs;
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }
};
</script>
