<template>
  <div>
    <Header/>
    <RandomPlanet />
    <div class="details">
      <ItemList
          @select="oneItem"/>
      <PersonDetails
          :name="name"
          :gender="gender"
          :birthYear="birthYear"
          :eyeColor="eyeColor"
          :imgUrl="img"
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
        name: '',
        gender: '',
        birthYear: '',
        eyeColor: '',
        img: null
      }
    },
    methods: {
      oneItem(person) {
        const _apiImg = "https://starwars-visualguide.com/assets/img/characters/";

        this.name = person.name,
        this.gender = person.gender,
        this.birthYear = person.birth_year,
        this.eyeColor = person.eye_color,
        this.img = `${_apiImg}${swapi._extractId(person)}.jpg`

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
