 <template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
   name: 'App'
}
</script>

<style lang="scss">
body{
  margin:0;
  padding:0;
  background:#060506;
}
a{
  text-decoration:none;
}
ul {
  list-style:none;
  padding:0;
}
h1,h2,h3,h4,h5,h6{
  margin:0;
  padding:0;
}
</style> 