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
      />
    </div>
  </div>
</template>

<script>
  import Header from "@/components/Header";
  import RandomPlanet from "@/components/RandomPlanet";
  import ItemList from "@/components/ItemList";
  import PersonDetails from "@/components/PersonDetails";

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
        name: null,
        gender: '',
        birthYear: '',
        eyeColor: '',
      }
    },
    methods: {
      oneItem(item, genderPerson, birthYearPerson, eyeColorPerson) {
        this.name = item,
        this.gender = genderPerson,
        this.birthYear = birthYearPerson,
        this.eyeColor = eyeColorPerson

        console.log(item)
      }
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
