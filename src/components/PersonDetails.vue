<template>
  <div class="person-details">
    <img
        src="https://starwars-visualguide.com/assets/img/characters/1.jpg"/>
    <div class="">
      <h4>{{ name }}</h4>
      <ul>
        <li>
          <span><strong>Gender </strong> </span>
          <span>{{ gender }}</span>
        </li>
        <li>
          <span><strong>Birth Year </strong></span>
          <span>{{ birthYear }}</span>
        </li>
        <li>
          <span><strong>Eye Color </strong></span>
          <span>{{ eyeColor }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "PersonDetails",
  props: {
    name: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    birthYear: {
      type: String,
      required: true
    },
    eyeColor: {
      type: String,
      required: true
    },
  },

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