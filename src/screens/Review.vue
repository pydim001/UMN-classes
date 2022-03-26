<template>
  <router-link to="/">
    <button id="back">Back</button>
  </router-link>
  <div id="review">
    <div><input placeholder="inp1" /></div>
    <div><input placeholder="inp2" /></div>
    <div><input placeholder="inp3" /></div>
  </div>
</template>

<script>
export default {
  name: "Review",
};
</script>

<style scoped>
#review {
  text-align: center;
  margin-top: 300px;
}
#back {
  color: maroon;
  background-color: gold;
}
</style>