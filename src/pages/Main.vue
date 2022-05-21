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
        passengers: ''
      },
      swObjects: []
    }
  },
  methods: {
    oneItem(person) {
      const _apiImg = "https://starwars-visualguide.com/assets/img/characters/";
      const _personId = swapi._extractId(person);

      this.personDetails.name = person.name,
          this.personDetails.gender = person.gender,
          this.personDetails.birthYear = person.birth_year,
          this.personDetails.eyeColor = person.eye_color,
          this.personDetails.img = `${_apiImg}${_personId}.jpg`,
          this.personDetails.population = person.population,
          this.personDetails.rotationPeriod = person.rotation_period,
          this.personDetails.diameter = person.diameter
          this.personDetails.cargoCapacity = person.cargo_capacity
          this.personDetails.maxSpeed = person.max_atmosphering_speed
          this.personDetails.passengers = person.passengers

    },
    listOfPeople(list) {
      this.swObjects = list;
    },
    listOfPlanets(list) {
      this.swObjects = list;
    },
    listOfStarships(list) {
      this.swObjects = list;
    },
  },
  computed() {
    this.listOfPeople();
    this.listOfPlanets();
    this.listOfStarships()
  }
}
</script>

<style>
.details {
  display: flex;
}

</style>
