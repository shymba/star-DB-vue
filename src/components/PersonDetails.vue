<template>
  <div class="person-details">
    <img src="https://starwars-visualguide.com/assets/img/characters/1.jpg"/>
    <div class="">
      <h4>R2-D2</h4>
      <ul>
        <li>
          <span>Gender</span>
          <span>male</span>
        </li>
        <li>
          <span>Birth Year</span>
          <span>45</span>
        </li>
        <li>
          <span>Eye Color</span>
          <span>Green</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import SwapiService from "@/swapi-service";

const swapi = new SwapiService();

export default {
  name: "PersonDetails",
  data() {

  },

  methods: {
    details() {
      swapi.getPerson(1).then((person) => {
        console.log(person.name)
      })
    }
  },
  mounted() {
    this.details()
  }
}
</script>

<style scoped>

h4 {
  font-size: 1.5rem;
  text-align: left;
  margin-top: 0;
}

.person-details {
  display: flex;
  padding: 1rem;
  background-color: #303030;
  border-radius: 5px;
}
.person-details ul {
  padding-left: 20px;
}

.person-details li {
  list-style: none;
  text-align: left;
  margin-bottom: 1rem;
}

img {
  width: 30%;
  height: 50%;
  border-radius: 10px;
  margin-right: 1rem;
}

</style>