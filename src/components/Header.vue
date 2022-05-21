<template>
  <div class="header">
    <h3 @click="$router.push('/')">Star DB</h3>
    <ul>
<!--      <li @click="$router.push('/people')">People</li>-->
      <li
          @click="peopleList"
          :people="people"
      >
        People
      </li>
      <li
          @click="planetsList"
          :planets="planets"
      >
        Planets
      </li>
      <li
          @click="starshipsList"
          :starships="starships"
      >
        Starships
      </li>
    </ul>
  </div>
</template>

<script>

import SwapiService from "@/swapi-service";

const swapi = new SwapiService();

export default {
  name: "Header",
  data() {
    return {
      people: [],
      planets: [],
      starships: [],
    }
  },
  methods: {
    peopleList() {
      const peopleNames = swapi.getAllPeople();
      peopleNames.then((list) => {
        this.people = list;
        this.$emit('peopleListItems', this.people);
      })
    },
    planetsList() {
      const planetNames = swapi.getAllPlanets();
      planetNames.then((list) => {
        this.planets = list;
        this.$emit('planetsListItems', this.planets);
      })
    },
    starshipsList() {
      const starshipsNames = swapi.getAllStarships();
      starshipsNames.then((list) => {
        this.starships = list;
        this.$emit('starshipsListItems', this.starships);
      })
    },
  }
}
</script>

<style scoped>
  .header {
    display: flex;
    max-width: 1140px;
    color: #fff;
  }
  h3 {
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.2;
  }
  h3:hover {
    color: #00bc8c;
    cursor: pointer;
  }
  .header ul {
    display: flex;
    align-items: center;
    list-style: none;
  }
  .header ul li {
    margin: 0;
    padding: 0.5rem 1rem;
    border-radius: 3px;
  }
  .header ul li:hover {
    background-color: #444;
  }
  .header ul li {
    text-decoration: none;
    color: #00bc8c;
    cursor: pointer;
  }
  .header ul li:hover a {
    color: #007053;
  }

</style>