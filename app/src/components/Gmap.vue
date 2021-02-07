<template>
  <div class="container">
    <!-- <p>Entree votre adresse</p> -->
    <div class="add">
      <gmap-autocomplete class="gmapAuto" @place_changed="setPlace">
      </gmap-autocomplete>
      <button @click="addMarker">Add</button>
    </div>
    <gmap-map :center="center" :zoom="12" style="width: 100%; height: 200px">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center = m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "Gmap",
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null,
      postalCode: "",
    };
  },
  mounted() {
    this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.markers) {
        this.markers = [];
      }
      if (this.places) {
        this.places = [];
      }
      if (this.currentPlace) {
        this.postalCode = this.currentPlace.address_components[7].long_name;
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme.scss";

.container {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
div > p {
  flex: 100%;
  margin-bottom: 1rem;
}
.add {
  display: flex;
  flex-direction: row;
}
.gmapAuto {
  flex: 70%;
  height: 2.5rem;
  border-radius: 0.5rem;
}
button {
  flex: 30%;
  margin-left: 0.5rem;
}
</style>