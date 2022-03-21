<template>
  <div id="strip">
    <img src="../assets/umn.png" id="logo" />
    <div id="title">
      <h1>UMN CLASSES</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
#img-div {
  text-align: left;
}
#logo {
  height: 50px;
  position: relative;
  right: 650px;
}
#title {
  color: gold;
  text-align: center;
  margin-top: -70px;
}
#strip {
  background-color: maroon;
  height: 50;
  text-align: center;
}
</style>
