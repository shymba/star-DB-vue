<template>
  <div class="container">
 <router-view></router-view>
  </div>
</template>

<script>

export default {

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #fff;
}
body {
  /*background-color: #222;*/
  background: url(http://www.script-tutorials.com/demos/360/images/stars.png) top center #000;
}
.container {
  display: flex;
  flex-direction: column;
  max-width: 1140px;
  box-sizing: border-box;
  margin: 0 auto;
}

</style>
