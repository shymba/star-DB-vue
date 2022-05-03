<template>
  <div class="random-planet">
    <img
        class="planet-image"
        :src="`${img}`"
        v-if="!isLoading"
        alt="planet"
    >
    <div v-else>
      <Spinner/>
    </div>
    <div class="list-description">
      <h4>{{name}}</h4>
      <ul>
        <li>
          <span>Population </span>
          <span>{{ population }}</span>
        </li>
        <li>
          <span>Rotation Period </span>
          <span>{{ rotationPeriod }}</span>
        </li>
        <li>
          <span>Diameter </span>
          <span>{{ diameter }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import SwapiService from "@/swapi-service";
import Spinner from "@/components/Spinner";

const swapi = new SwapiService();

export default {
  name: "RandomPlanet",
  components: {
    Spinner
  },
  data() {
    return {
      id: null,
      img: null,
      name: null,
      population: null,
      rotationPeriod: null,
      diameter: null,
      isLoading: false
    }
  },

  methods: {
    planetView() {
      this.isLoading = true;
      const _apiImg = "https://starwars-visualguide.com/assets/img/planets/";
      const id = Math.floor(Math.random()*17 + 2);
      swapi.getPlanet(id).then((planet)=> {
           this.id = id,
           this.img = `${_apiImg}${this.id}.jpg`,
           this.name = planet.name,
           this.population = planet.population,
           this.rotationPeriod = planet.rotation_period,
           this.diameter = planet.diameter
           this.isLoading = false
      });
    }
  },
    mounted() {
    // this.planetView();
    setInterval(this.planetView, 5000);
  }
}

</script>

<style scoped>
  .random-planet {
    display: flex;
    margin-bottom: 1rem;
    padding: 1rem;
    background-color: #303030;
    border-radius: 5px;
  }
  .random-planet>.planet-image {
    width: 150px;
    height: 150px;
    border-radius: 5px;
    margin-right: 1rem;
  }
  .list-description ul {
    padding-left: 20px;
  }
  .list-description li {
    list-style: none;
    text-align: left;
    margin-bottom: 1rem;
  }
  h4 {
    font-size: 1.5rem;
    text-align: left;
    margin-top: 0;
  }

</style>