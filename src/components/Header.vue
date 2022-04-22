<template>
  <div class="header">
    <h3>Star DB</h3>
    <ul>
      <li><a href="#">People</a></li>
      <li><a href="#">Planets</a></li>
      <li><a href="#">Starships</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
  .header {
    display: flex;
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
  .header ul li a {
    text-decoration: none;
    color: #00bc8c;
  }
  .header ul li:hover a {
    color: #007053;
  }

</style>