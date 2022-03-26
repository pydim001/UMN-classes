<template>
  <div id="strip">
    <div id="img-div">
      <img src="../assets/umn.png" id="logo" />
    </div>
    <div id="title">
      <h1>UMN CLASSES</h1>
    </div>
    <div id="btn-div">
      <router-link to="/review">
        <button id="review">REVIEW</button>
      </router-link>
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
  display: inline-block;
  right: -20px;
}
#title {
  color: gold;
  text-align: center;
  margin-top: -70px;
  display: inline-block;
  margin-top: -20px;
}
#strip {
  background-color: maroon;
  height: 50px;
  text-align: center;
}
#review {
  background-color: gold;
  color: maroon;
}
#btn-div {
  display: inline-block;
  position: absolute;
  left: 1300px;
  margin-top: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
#img-div {
  margin-bottom: -53px;
}
</style>
