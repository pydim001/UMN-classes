<template>
  <div id="input">
    <input
      placeholder="Search Department or Courses, e.g. CSCI or CSCI 2021"
      id="dep"
    />
  </div>
</template>

<script>
export default {
  name: "Department",
};
</script>
    
<style scoped>
#input {
  text-align: center;
  margin-top: 100px;
}
#dep {
  width: 500px;
  height: 25px;
}
</style>


