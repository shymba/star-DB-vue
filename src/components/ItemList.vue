<template>
  <div class="list">
    <ul>
      <li>Earth</li>
      <li>Mars</li>
      <li>Moon</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ItemList"
}
</script>

<style scoped>
.list {
  padding: 1rem;
  background-color: #303030;
  border-radius: 5px;
  flex: 50%;
  margin-right: 15px;
}

.list ul {
  padding-left: 20px;
}

.list li {
  list-style: none;
  text-align: left;
  margin-bottom: 1rem;
}

</style>