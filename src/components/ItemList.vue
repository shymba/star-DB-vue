<template>
  <div class="list">
    <ul v-if="swObjects[0]">
      <li
          @click="$emit('select', person)"
          v-for="person in this.swObjects"
          :key="person">
        {{ person.name }}
      </li>
    </ul>
    <div class="spinner-list"
        v-else
    >
      <Spinner />
    </div>
  </div>
</template>

<script>
import Spinner from "@/components/Spinner";

export default {
  name: "ItemList",
  components: {
    Spinner
  },
  props: {
    swObjects: {
      type: Array,
      required: true
    },
  },
  methods: {
  },
  mounted() {
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

.spinner-list {
  padding-top: 5rem;
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