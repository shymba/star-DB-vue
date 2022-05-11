<template>
  <div class="person-details">
    <img
        :src="`${detailsPerson.img}`"/>
    <div class="">
      <h4>{{ detailsPerson.name }}</h4>
      <ul>
        <li>
          <span><strong>Gender </strong> </span>
          <span>{{ detailsPerson.gender }}</span>
        </li>
        <li>
          <span><strong>Birth Year </strong></span>
          <span>{{ detailsPerson.birthYear }}</span>
        </li>
        <li>
          <span><strong>Eye Color </strong></span>
          <span>{{ detailsPerson.eyeColor }}</span>
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
      required: true
    }
  },
  methods: {  },
  mounted() {  }

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
  height: 50%;
  border-radius: 10px;
  margin-right: 1rem;
}

</style>