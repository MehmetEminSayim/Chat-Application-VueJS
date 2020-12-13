<template>
  <div id="container mt-5">
      <router-view></router-view>
  </div>
</template>

<script>

export default {
 created() {

 }
}
</script>

<style>

.container{
  margin-top: 20px;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
