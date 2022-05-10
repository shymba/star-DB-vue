<template>
  <div class="list">
    <div v-if="isLoading">
      <Spinner/>
    </div>
    <ul v-else>
      <li
          @click="$emit('select', item)"
          v-for="item in this.person"
          :key="item">
        {{ item.name }}
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
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      person: [],
      isLoading: false
    }
  },
  methods: {
    peopleList() {
      const namesList = swapi.getAllPeople();
      namesList.then((people) => {
        people.forEach((item) => {
          this.person.push(item)
        })
      })
    },
  },
    mounted() {
      this.peopleList();
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