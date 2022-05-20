<template>
  <div class="list">
    <ul>
      <li
          @click="$emit('select', person)"
          v-for="person in this.swObjects"
          :key="person">
        {{ person.name }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "ItemList",
  props: {
    swObjects: {
      type: Array,
      required: true
    },
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