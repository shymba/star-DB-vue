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
      oneItem(item) {
        this.name = item.name,
        this.gender = item.gender,
        this.birthYear = item.birth_year,
        this.eyeColor = item.eye_color


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
