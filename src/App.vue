<template>
  <div>
    <Header/>
    <RandomPlanet />
    <div class="details">
      <ItemList
          @select="oneItem"/>

      <PersonDetails
          :detailsPerson="personDetails"
      />
    </div>
  </div>
</template>

<script>
  import Header from "@/components/Header";
  import RandomPlanet from "@/components/RandomPlanet";
  import ItemList from "@/components/ItemList";
  import PersonDetails from "@/components/PersonDetails";

  import SwapiService from "@/swapi-service";
  const swapi = new SwapiService();

  export default {

    name: 'App',
    components: {
      PersonDetails,
      ItemList,
      Header,
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
        this.personDetails.img = `${_apiImg}${_personId}.jpg`

      },
    },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #fff;
}
.details {
  display: flex;
}

</style>
