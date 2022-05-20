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
        img: ''
      },
      swObjects: []
    }
  },
  methods: {
    oneItem(person) {
      console.log(person)
      const _apiImg = "https://starwars-visualguide.com/assets/img/characters/";
      const _personId = swapi._extractId(person);

      this.personDetails.name = person.name,
          this.personDetails.gender = person.gender,
          this.personDetails.birthYear = person.birth_year,
          this.personDetails.eyeColor = person.eye_color,
          this.personDetails.img = `${_apiImg}${_personId}.jpg`
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
