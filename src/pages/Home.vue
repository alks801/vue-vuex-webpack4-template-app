<template>
  <div class="home-container">
      <img :src="logo">
      <div class="title">
          Home Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at quis dolores maxime recusandae enim beatae vero, doloribus iste rerum!
      </div>
      <div class="weather" v-for="w in weatherList" :key="w.id">
          {{w.city}}, {{w.temp}}
      </div>

    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import logo from '../assets/img/logo.png'
export default {
  data: () => ({logo}),
  computed: mapGetters({
    weatherList: "allWeather"
  }),

  /*
  without import it could be:
  computed: {
    doneTodosCount() {
      return this.$store.getters.allWeather;
    }
  }*/
  created() {
    this.$store.dispatch("getAllWeather");
  }
};
</script>
