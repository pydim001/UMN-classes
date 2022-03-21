<template>
  <NavBar />
  <Department />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Department from "./components/Department.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Department,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
