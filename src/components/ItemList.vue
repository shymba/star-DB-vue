<template>
  <div class="list">
    <div v-if="isLoading">
      <Spinner/>
    </div>
    <ul v-else>
      <li
          :id="item"
          @click="$emit('select', item, gender, birthYear, eyeColor)"
          v-for="item in name"
          :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>

import SwapiService from "@/swapi-service";
import Spinner from "@/components/Spinner";

const swapi = new SwapiService();

export default {
  name: "ItemList",
  components: {
    Spinner
  },
  data() {
    return {
      name: [],
      gender: '',
      birthYear: '',
      eyeColor: '',
      isLoading: false
    }
  },
  methods: {
    peopleList() {
      const namesList = swapi.getAllPeople();
      namesList.then((people) => {
        people.forEach((item) => {
          return this.name.push(item.name);
        })
      })
    },
    detailsPerson() {
      swapi.getPerson(3).then((person) => {
        console.log(person.url)
        this.gender = person.gender,
        this.birthYear = person.birth_year,
        this.eyeColor = person.eye_color

      })
    }
  },
    mounted() {
      this.peopleList();
      this.detailsPerson();
    }
}
</script>

<style scoped>
.list {
  background-color: #303030;
  flex: 50%;
  margin-right: 15px;
  border: 1px solid #444;
  border-bottom: none;
  border-radius: 5px;
}

.list ul {
  margin: 0;
  padding: 0;
}
.list li {
  list-style: none;
  text-align: left;
  padding: .75rem 1.25rem;
  border-bottom: 1px solid #444;
}

.list li:last-child {
  -moz-border-radius-bottomleft: 5px;
  -moz-border-radius-bottomright: 5px;
}
.list li:first-child {
  -moz-border-radius-topleft: 5px;
  -moz-border-radius-topright: 5px;
}

.list ul li:hover {
  padding: .75rem 1.25rem;
  cursor: pointer;
  background-color: #444;
}

</style>