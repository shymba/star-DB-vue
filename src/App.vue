<template>
  <div>
    <Header/>
    <RandomPlanet />
  </div>
</template>

<script>
  import Header from "@/components/Header";
  import RandomPlanet from "@/components/RandomPlanet";

  export default {
    name: 'App',
    components: {
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

</style>
