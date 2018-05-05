<template>
  <div class="home-container">
      <img :src="logo">
      <div class="title">
          Home Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at quis dolores maxime recusandae enim beatae vero, doloribus iste rerum!
      </div>
      <div class="weather" v-for="w in weatherList" :key="w.id">
          {{w.city}}, {{w.temp}}
      </div>
      <div class="add-weather">
        <input type="text" name="add-w" v-model="newWeather">
        <input type="button" value="Add Weather" @click="addWeather">
      </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import logo from "../assets/img/logo.png";
import weatherDefs from "../store/modules/weather/definitions";

export default {
  data: function() {
    return { logo, newWeather: "" };
  },
  computed: mapGetters({
    weatherList: weatherDefs.getters.ALL_WEATHER
  }),

  /*
  without import it could be:
  computed: {
    doneTodosCount() {
      return this.$store.getters.allWeather;
    }
  }*/
  created() {
    this.$store.dispatch(weatherDefs.actions.GET_ALL_WEATHER);
  },
  methods: {
    addWeather: function() {
      var newWeather = this.newWeather.split(",");
      if (!newWeather || newWeather.length != 2) {
        return console.log(newWeather);
      }
      this.$store.dispatch(weatherDefs.actions.ADD_WEATHER, {city: newWeather[0], temp: newWeather[1]});
    }
  }
};
</script>
