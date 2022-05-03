<template>
  <div>
    <Header/>
    <RandomPlanet />
    <div class="details">
      <ItemList/>
      <PersonDetails/>
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
    }
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
