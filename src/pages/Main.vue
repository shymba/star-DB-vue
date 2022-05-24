<template>
  <Header
      @peopleListItems="listOfPeople"
      @planetsListItems="listOfPlanets"
      @starshipsListItems="listOfStarships"
  />
  <div>
    <RandomPlanet />
    <div class="details">
      <ItemList
          :swObjects="swObjects"
          @select="oneItem"/>

      <PersonDetails
          :detailsPerson="personDetails"
      />
    </div>
  </div>
</template>

<script>
import RandomPlanet from "@/components/RandomPlanet";
import ItemList from "@/components/ItemList";
import PersonDetails from "@/components/PersonDetails";

import SwapiService from "@/swapi-service";
import Header from "@/components/Header";
const swapi = new SwapiService();

export default {

  name: 'App',
  components: {
    Header,
    PersonDetails,
    ItemList,
    RandomPlanet,
  },
  data() {
    return {
      personDetails: {
        name: '',
        gender: '',
        birthYear: '',
        eyeColor: '',
        img: '',
        population: '',
        rotationPeriod: '',
        diameter: '',
        cargoCapacity: '',
        maxSpeed: '',
        passengers: '',
        url:'',
        banner: 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg',
      },
      swObjects: []
    }
  },
  methods: {
    listOfPeople(list, path) {
      this.swObjects = list;
      this.url = path;
    },
    listOfPlanets(list, path) {
      this.swObjects = list;
      this.url = path;
    },
    listOfStarships(list, path) {
      this.swObjects = list;
      this.url = path;
    },
    oneItem(person) {
      const _personId = swapi._extractId(person);

          this.personDetails.name = person.name,
          this.personDetails.gender = person.gender,
          this.personDetails.birthYear = person.birth_year,
          this.personDetails.eyeColor = person.eye_color,
          this.personDetails.img = `${this.url}${_personId}.jpg`,
          this.personDetails.population = person.population,
          this.personDetails.rotationPeriod = person.rotation_period,
          this.personDetails.diameter = person.diameter,
          this.personDetails.cargoCapacity = person.cargo_capacity,
          this.personDetails.maxSpeed = person.max_atmosphering_speed,
          this.personDetails.passengers = person.passengers

    }
  }
}
</script>

<style>
.details {
  display: flex;
}

</style>
