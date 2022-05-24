<template>
  <div class="person-details">
    <img
        v-if="detailsPerson.img"
        :src="`${detailsPerson.img}`"/>

    <img
        v-else
        :src="`${detailsPerson.banner}`">

    <div class="">
      <h4>{{ detailsPerson.name }}</h4>
      <ul>
        <li>
          <span v-if="detailsPerson.gender"><strong>Gender: </strong></span>
          <span v-else-if="detailsPerson.population"><strong>Population: </strong></span>
          <span v-else><strong>Cargo Capacity: </strong></span>
          <span>{{ detailsPerson.gender || detailsPerson.population || detailsPerson.cargoCapacity }}</span>
        </li>
        <li>
          <span v-if="detailsPerson.gender"><strong>Birth Year: </strong></span>
          <span v-else-if="detailsPerson.population"><strong>Rotation Period: </strong></span>
          <span v-else><strong>Max Speed: </strong></span>
          <span>{{ detailsPerson.birthYear || detailsPerson.rotationPeriod || detailsPerson.maxSpeed}}</span>
        </li>
        <li>
          <span v-if="detailsPerson.gender"><strong>Eye Color: </strong></span>
          <span v-else-if="detailsPerson.population"><strong>Diameter: </strong></span>
          <span v-else><strong>Passengers: </strong></span>
          <span>{{ detailsPerson.eyeColor || detailsPerson.diameter || detailsPerson.passengers }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "PersonDetails",
  props: {
    detailsPerson: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      isBanner: true,
    }
  },
  methods: {  },

  updated() {

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
  flex: 50%;
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
  height: 50%;
  border-radius: 10px;
  margin-right: 1rem;
}

</style>